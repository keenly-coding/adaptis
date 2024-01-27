## 🎉 CSS to the next level.

Adapter make **CSS** programmable in **OOP** manner together with **Javascript** and **Web Component**

## 🎉 Easy to start & learn
You can start using **Adapter** without **Node.js** or any
**JS Build Tools**. Just use plain Javascript, right away in your browser.
You can even try it now by open browser console **`Ctrl+Shift+I`** and try
styling particles above with the codes below.

<el-code-block>
    <div el="bar-top-left">
        <b>Javascript</b>
    </div>

```js
/* this code will style <el-particle> */
Particle.addStyle(`
    border-radius: 0;
    transform: rotate(45deg);
`);
```
</el-code-block>

## 🎉 CSS ❤️ OOP ❤️ Web Component

Because **Adapter** extends from **HTMLElement**, it's a pure **Web Component**
which bring all good features to **CSS** : Module, Inheritance, Encapsulation,
Object and much more...

<el-code-block>
    <div el="bar-top-left"><b>javascript</b></div>

```js
/* Particle1 also inherit style defined from Particle */
class Particle1 extends Particle {
    /** Initial CSS */
    static css = `display: inline-flex`;

    constructor() {
        super();
    }
    connectedCallback() {
        // Do something when instance is attached to DOM
    }
};

```
</el-code-block>

## 🎉 Compact

<div style="text-align: center;">
<strong style="font-size: 1.5em;">~ 2kB</strong> minify gzip
</div>

## 🎉 Integrate with other libraries

- HTML Render:
  [uhtml](https://github.com/WebReflection/uhtml),
  [lit-html](https://lit.dev/docs/libraries/standalone-templates/)
- CSS Parser:
  [csstree](https://github.com/csstree/csstree),
  [stylis](https://stylis.js.org/),
  [ligntningcss](https://lightningcss.dev/)
- Event/Signal: [mitt](https://www.npmjs.com/package/mitt),
  [nanoevents](https://github.com/ai/nanoevents]),
  [@preact/signals]()
- Reactive: [ArrowJS](https://www.arrow-js.com/)
- Animation:
  [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API),
  [anime.js](https://animejs.com/),
  [animate.css](https://animate.style/)

## 🎉 Setup

### CDN (Content Delivery Network)

This way is super easy !! **Adapter** was born for **ES Modules** and
nothing else. Just import module right away in your browser.

<el-code-block>
    <div el="bar-top-left">
        <b>html</b>
    </div>

```html
<head>
<script defer type="module">
import { Adapter } from "https://cdn.jsdelivr.net/npm/@devcapsule/adapter/+esm";
</script>
</head>
```
</el-code-block>

### Javascript Bundle Tools

If you're familiar with **NodeJS**, you can install **Adapter**
with `npm` and use it with javascript bundle tools.

<el-code-block>
    <div el="bar-top-left">
        <b>shell</b>
    </div>

```shell
$ npm install @devcapsule/adapter
```
</el-code-block>

<el-code-block>
    <div el="bar-top-left">
        <b>javascript</b>
    </div>

```js
import { Adapter } from '@devcapsule/adapter';
```
</el-code-block>

### The APIs

**Adapter** Provide simple APIs to style components.

<el-code-block>
    <div el="bar-top-left">
        <b>APIs</b>
        <span style="margin-left: 0.5rem;">(described in typescript)</span>
    </div>

```ts
Adapter.css: string // CSS string
Adapter.addStyle(css: string);
<Adapter Object>.addStyle(css: string);
```

</el-code-block>

### Sample Usage

<el-code-block>
    <div el="bar-top-left">
        <b>javascript</b>
    </div>

```js
import { Adapter } from 'https://cdn.jsdelivr.net/npm/@devcapsule/adapter/+esm';

/* Extends `Adapter` */
class Card extends Adapter {
    static css =`
        display: flex;
        justify-content: center;
        &.blue {
            color: blue;
        }
    `
};

/* Define your component to custome element name `el-card` */
Card.define('el-card');


/* Style created element */
const card = new Card();
card.css = `background-color: red;`;
document.body.append(card);

```
</el-code-block>

<el-code-block>
    <div el="bar-top-left">
        <b>html</b>
    </div>

```html
<el-card>
    Hello... Card Style Web Component
</el-card>

<el-card class="blue">
    This text is blue.
</el-card>
```
</el-code-block>