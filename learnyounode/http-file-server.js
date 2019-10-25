
//joecreager.com
const http = require('http');
const fs = require('fs');
const port = process.argv[2]
const file = process.argv[3]

http.createServer(function (request, response) {
  fs.createReadStream(file).pipe(response);
}).listen(+port, function(){
  console.log('Server listening on http://localhost:%s', port);
});



/*
'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
