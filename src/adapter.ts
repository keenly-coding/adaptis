class DOMError extends Error {
    constructor(message: string) {
        super();
        this.message = message;
        this.name = 'DOMError';
    }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function uuid() {
    await sleep(4);
    return new Date().getTime().toString(16);
};

type Constructor<T = {}> = new (...args: any[]) => T;

function AdapterMixin<TBase extends Constructor<HTMLElement>>(Base: TBase) {
    return class extends Base {
        /** _styles which contain only css for this component */
        static _styles: Array<string> = [];

        static get styles(): Array<string> {
            const superClass = Object.getPrototypeOf(this);
            let styles = this._styles;
            if (superClass.styles instanceof Array) {
                styles = [...superClass.styles, ...styles];
            };
            return styles;
        }

        static set css(css: string) {
            this._styles = [css];
        }

        static get css(): string {
            let css: string = '';
            for (const style of this.styles) {
                css += `\n${style}`;
            };
            return css;
        };

        static _tagName: string;
        static get tagName(): string|undefined {
            if (this._tagName === Object.getPrototypeOf(this).tagName) {
                return undefined;
            }
            return this._tagName;
        }

        static _cssStyleSheet: CSSStyleSheet;
        static get cssStyleSheet(): CSSStyleSheet {
            const superCSSStyleSheet = Object.getPrototypeOf(this)._cssStyleSheet;
            if (this._cssStyleSheet === superCSSStyleSheet) {
                this._cssStyleSheet = new CSSStyleSheet();
            }
            return this._cssStyleSheet;
        }

        static addStyle(css: string) {
            this._styles = this._styles.concat(css);
            if (this.tagName) {
                const addIndex = this.cssStyleSheet.cssRules.length;
                css = `${this.tagName} { ${css} }`;
                this.cssStyleSheet.insertRule(css, addIndex);
            };
        };
        
        static define(tagName: string): void {
            // To extends this function, sub-elements must be defined before call
            // this function as `super.define(tagName);`
            try {
                customElements.define(tagName, this);
            } catch (error) {
                if (error instanceof DOMException) {
                    throw new DOMError(
                        `DOMException: '${this.name}' ` +
                        `has already been defined to tag '${this.tagName}'`
                    );
                };
            };

            this._tagName = tagName;
            this.cssStyleSheet.replaceSync(`${this.tagName} {${this.css}`);
            document.adoptedStyleSheets.push(this.cssStyleSheet);
        };

        /** Deprecated, will be removed in v3 */
        static tagStyle(css: string): void {
            this.addStyle(css);
        };

        /** Deprecated, will be removed in v3 */
        static classStyle(class_: string, css: string) {
            this.addStyle(`&.${class_} { ${css} }`);
        };

        static _last_generated_id: string;

        _id: string|any; // instance id.
        cssStyleSheet: CSSStyleSheet = new CSSStyleSheet();
        adoptedStyleSheetIndex: number;

        set css(css: string) {
            this.cssStyleSheet.replaceSync(`${this.tagName} { ${css} }`);
        }
        
        constructor(...args: any[]) {
            super(...args);
            this.setID();
            const index = document.adoptedStyleSheets.length;
            document.adoptedStyleSheets[index] = this.cssStyleSheet;
            this.adoptedStyleSheetIndex = index;
        };

        async setID() {
            this._id = await uuid();
        };

        addStyle(css: string): void {
            this.classList.add(this._id);
            let class_ = this.classList.value.replace(/ /g, '.');
            css = `&.${class_} { ${css} }`;
            this.cssStyleSheet.insertRule(`${this.tagName} { ${css} }`);
        };

        delete() {
            delete document.adoptedStyleSheets[this.adoptedStyleSheetIndex];
            this.remove();
        }
    };
}

const Adapter = AdapterMixin(HTMLElement);

export { Adapter, AdapterMixin, DOMError };