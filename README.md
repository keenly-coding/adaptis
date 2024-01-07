<h1 style="text-align: center">✨ Adapter 🎉</h1>

> <h2 style="margin-top: 0; padding: 1rem;">
> Adaptive Style Web Component Framework
> </h2>

<ul style="font-size: 1.25rem;">
   <li>Built with ❤️</li>
   <li>Just <strong>1 kB</strong> (minified + gzip)</li>
</ul>

## Sample Usage
```js
import { Adapter } from `https://cdn.jsdelivr.net/npm/@devcapsule/adapter@2.4.4/+esm`;

const cardStyle = `
   display: block;
   min-height: 5rem;
   width: 100%;
   color: red;
`;

class Card extends Adapter {
   /** Style is isolated in defined tag name. */
   static css = cardStyle;
};

/** Don't worry about tag's name conflicted, choose your own. */
Card.define('el-card');

/**
 * More style can be added later, class can also be used.
 * This will render CSS as `el-card.text-blue { color: blue }`
 */
Card.addStyle(`
   &.text-blue { color: blue }
`);

/** Replace component styles with the base style `cardStyle`,
 * This is just one from many way to do it.
 */
Card.css = cardStyle;

/** Dynamically create stylable element <el-card>
 * which inherit all styles from `Card`
 */
const card = new Card();

/** <el-card> object has the same API as `Card`
 * but style will be specific for this element only.
 */
card.css = `display: flex;`;
card.addStyle(`color: black;`);
document.body.append(card);
```

## Software Development 💻

### Project Board
https://github.com/orgs/keenlycode/projects/2

### Prerequisites
- NodeJS : https://nodejs.org/en/
- Git : https://git-scm.com/

### Prerequisites for document creation.
- Python >= 3.10 : https://www.python.org/

### 🛠️ Setup
1. Clone repository from github
```shell
$ git clone https://github.com/keenlycode/adapter.git
$ cd adapter
```

2. Install node dependencies
```shell
$ npm install
```

### 🗃️ Build Library
```shell
# Build
$ npm run dist
```

### 🔍 Run Test
```shell
$ npm run test
```

### Document Creation (Python 🐍)
```shell
$ python -m venv venv
$ source venv/bin/activate
$ pip install -r require.pip
$ npm run docs
```