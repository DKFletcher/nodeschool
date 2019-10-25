const fs = require('fs')
const path = require('path')
fs.readdir(
  process.argv[2],
  function (err, paths){
    paths.filter(
      function(item){
        return path.extname(item)==="."+process.argv[3]
      }
    ).forEach(
      function(item){
        console.log(item);
      }
    )
  }
)
