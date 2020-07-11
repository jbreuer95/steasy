#! /usr/bin/env node
const files = require('./lib/files');
let base = require('./base.json')
const transformers = require('./transformers')
const args = process.argv.slice(2);

let config = require('./config')
try {
  config = require(`${process.cwd()}/steasy.config.js`);
  console.log('Using custom config')
} catch (e) {}


if (args.includes('init')) {
  const exists = files.fileExists('steasy.config.js')
  if (exists) {
    console.log('Config already exists')
  } else {
    files.copyFile(`${__dirname}/config.js`, `${process.cwd()}/steasy.config.js`, (err) => {
      if (err) {
        console.log(err)
      }
    })
    console.log(`Default config copied to working directory (${process.cwd()}/steasy.config.js)`)
  }
} else {
  base = transformers.addColors(base, config.theme.colors);
  base = transformers.addSpacing(base, config.theme.spacing);
  base = transformers.addOpacity(base, config.theme.opacity);
  files.saveFile("steasy.json", JSON.stringify(base));
}
