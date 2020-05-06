const http = require('http');
const map = require('through2-map');
const port = process.argv[2];
const server = http.createServer(function(request, response){
  if (request.method === 'POST') {
    request.pipe(map(function (funk) {
      return funk.toString().toUpperCase()
    })).pipe(response);
  } else {return response.end("POST content not present")}
  request.on('end', () => response.end());
});

server.listen(port, function(error){
  if (error) {console.log("listen error: "+error)}
  else {console.log("server listening on port "+port)}
});
