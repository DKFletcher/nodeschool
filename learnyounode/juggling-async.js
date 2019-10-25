'use strict'
const http = require('http');
const {BufferList} = require('bl');
const bl1 = new BufferList()
const bl2 = new BufferList()
const bl3 = new BufferList()
var count = 0
function setCount(){
  count++;
  if (count === 3){
      console.log(bl1.toString());
      console.log(bl2.toString());
      console.log(bl3.toString());
  }
}
function pipeHTTP(url, bl){
  http.get(
    url,
    function (response){
      response.setEncoding('utf8')

      response.on('data',
        function (data){
          bl.append(Buffer.from(data));
        }
      )

      response.on('end',
        function (end){
          setCount();
        }
      )
    }
  )
}
pipeHTTP(process.argv[2], bl1);
pipeHTTP(process.argv[3], bl2);
pipeHTTP(process.argv[4], bl3);

/*'use strict'
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }*/
