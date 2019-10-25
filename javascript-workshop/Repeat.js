function repeat(opperation, num){
  if (num <= 0) return
  opperation()
  return repeat(opperation, --num)
}
module.exports = repeat;
