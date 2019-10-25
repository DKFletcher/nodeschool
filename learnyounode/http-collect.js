'use strict'
const http = require('http');
const {BufferList} = require('bl');
const bl = new BufferList()

http.get(
  process.argv[2],
  function (response){
    response.setEncoding('utf8')
    response.on('data',
      function (data){
        bl.append(Buffer.from(data));
      }
    )



    response.on('end',
      function (end){
        console.log(bl.length);
        console.log(bl.toString());
      }
    )
  }
)

/*
'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
*/
