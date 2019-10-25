const fs = require('fs')
const pathM = require('path')
module.exports = function(path, fileExtension, callback){
  fs.readdir(
    path,
    function (err, paths){
      if (err) return callback(err)
      paths = paths.filter(
        function(item){
          return pathM.extname(item) === "."+fileExtension
        }
      )
      callback(null, paths)
    }
  )
}
