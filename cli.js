#! /usr/bin/env node
const files = require('./lib/files');
const args = process.argv.slice(2)

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

}
