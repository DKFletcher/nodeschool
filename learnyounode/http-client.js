
'use strict'
const http = require('http');
http.get(
  process.argv[2],
  function (response) {
    response.setEncoding('utf')
    response.on('data',
      function (data){
        console.log(data.toString());
      }
    )

    response.on('error',
      function (error){
        //console.log('error: '+error);
      }
    )

    response.on('end',
      function (end){
        //if (!end) console.log('end: '+end)
      }
    )

  }
)

/*
'use strict'
    const http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)
*/
