const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (directoryPath) => {
    return fs.existsSync(directoryPath);
  },

  fileExists: (filePath) => {
    return fs.existsSync(filePath);
  },

  copyFile: (source, target, cb) => {
    var cbCalled = false;

    var rd = fs.createReadStream(source);
    rd.on("error", function(err) {
      done(err);
    });
    var wr = fs.createWriteStream(target);
    wr.on("error", function(err) {
      done(err);
    });
    wr.on("close", function(ex) {
      done();
    });
    rd.pipe(wr);

    function done(err) {
      if (!cbCalled) {
        cb(err);
        cbCalled = true;
      }
    }
  }
};
