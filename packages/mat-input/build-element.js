const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/mat-input/runtime-es5.js',
    './dist/mat-input/polyfills-es5.js',
    './dist/mat-input/main-es5.js',
  ];
  const srcDistPath = './dist/mat-input';
  const elementDistPath = 'dist/mat-input/element';
  await fs.ensureDir(elementDistPath)
  await concat(files, `${elementDistPath}/mat-input.js`);
  await fs.copyFile(`${srcDistPath}/styles.css`, `${elementDistPath}/styles.css`)
  // await fs.copy(`${srcDistPath}/assets/`, `${elementDistPath}/assets/` )
})();