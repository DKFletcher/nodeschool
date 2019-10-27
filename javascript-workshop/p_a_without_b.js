var slice = Array.prototype.slice
function logIt(namespace){
  console.log(slice);
}
function makeLog(namespace,statement){
  console.log(namespace,statement);
}
function logger(namespace) {
  if slice ?  console.log();
  var logging = partiallyApply(makeLog, );
  return test('test2')
}

module.exports = logger
