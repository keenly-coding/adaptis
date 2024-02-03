/** highlight.js */
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import shell from 'highlight.js/lib/languages/shell';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/monokai.css';
/** end highlight.js */

/** normalize.css */
import 'normalize.css';
/** end normalize.css */

function baseLib() {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('shell', shell);
    hljs.registerLanguage('css', css);
    hljs.highlightAll();
}

baseLib();