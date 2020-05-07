function repeat(opperation, num){
    for (var i=0; i<num; i++){
        opperation()
    }
}
 module.exports = repeat