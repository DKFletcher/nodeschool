var slice = Array.prototype.slice
var test = 'some string';
function logIt(namespace){
  console.log(slice);
}
function makeLog(namespace,statement){
  console.log(namespace,statement);
}
function logger(namespace) {
  //console.log('test'+test);
  return test ?  console.log('second stage:'+slice) : console.log('first stage');;
  // var logging = partiallyApply(makeLog, );
}

module.exports = logger
