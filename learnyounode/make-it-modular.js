const filterFn = require('./mymodule.js')
dir = process.argv[2]
fileTypeToFilter = process.argv[3]
filterFn(
  dir,
  fileTypeToFilter,
  function(err, paths){
    if (err) console.log(err);
    paths.forEach(
      function(item){
        console.log(item);
      }
    )
  }
)
