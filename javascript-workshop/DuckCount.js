
function duckCount() {
  return Array.prototype.filter.call(arguments, (function(arg) {
    	return Object.prototype.hasOwnProperty.call(arg, 'quack');
    })).length;
}
module.exports = duckCount;

// const fn1 = (object, property, count) => count+=(object.hasOwnProperty(property) ? 1 : 0);
// const fn2 = (argumentList, property, count, index) =>
//   index === argumentList.length
//   ? count
//   : fn2(argumentList, property, fn1(argumentList[index++], property, count), index);
// function duckCount(){
//   return fn2(arguments,'quack', 0, 0);
// }

// function duckCount(){
//   const scopedArgument = arguments
//   return (function countOne(index, count){
//     scopedArgument[index].hasOwnProperty('quack') ? count++ : count;
//     if (index === scopedArgument.length-1) return count;
//     return countOne(index + 1,count)
//   })(0, 0)
// }

// function duckCount(){
//   var count = 0;
//   for (var i=0; i<arguments.length; i++){
//     if (arguments[i].hasOwnProperty('quack')){ count++ }
//   }
//   return count;
// }
