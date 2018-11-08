// through2 is a thin wrapper around node transform streams
var through = require('through2');
var PluginError = require('plugin-error');

// Consts
const PLUGIN_NAME = 'gulp-minifyphp';

module.exports = function() {
  // Creating a stream through which each file will pass
  return through.obj(function(file, enc, cb){
    if (file.isNull()) {
      // return empty file
      return cb(null, file);
    }
    if(file.isBuffer()){
      var data=file.contents.toString(enc);
      data=data.replace(/ +/g,' ').replace(/ +\r?\n/g,'\n').replace(/\t+/g,'').replace(/(\r?\n)+/g,'\r\n');
      data=data.replace(/(\/\/|#)[^\r\n]+/g,'');
      file.contents=Buffer.alloc(data.length);
      file.contents.write(data);
    }
    cb(null, file);
  });

};