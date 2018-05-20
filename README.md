# Debug Lite

A very tiny Javascript debugging utility. It's inspired by [debug](https://github.com/visionmedia/debug) but for only be used on browsers.


## File size

package | minified | gzipped
-|-|-
[debug](https://github.com/visionmedia/debug) (browser) | 7.67KB | 3.05KB
debug-lite | 1.37KB | 661 bytes

_Files was minified using https://closure-compiler.appspot.com/home ._


## Installation

```bash
$ npm install debug-lite
```


## Usage

For browser globals:
- Using `debug-lite.umd.min.js` file and use `window.debugLite.createDebug` function.

For bundlers like Webpack or Browserify:
- Using as module `import { createDebug } from 'debug-lite'`


## Example

```js
// import { createDebug } from 'debug-lite';
const createDebug = require('debug-lite').createDebug;

const log = createDebug('App');
const logInit = createDebug('App:init');
const logBuild = createDebug('App:build');

function init() {
  logInit('Initializing...');
}

function build() {
  logBuild('Building...');
}

function main () {
  log('app.js file is loaded');

  init();
  build();
}

main();
```
Open console and try:

```js
localStorage.DEBUG = '*';
location.reload();
```
![Show all messages](screenshots/screenshot0.png)

You can found a complete example [here](example#debug-lite--example).


## License

MIT