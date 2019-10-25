module.exports = function (messages){
  return messages.filter(function (short){
    return short.message.length < 50;
  }).map(function(message){
    return message.message
  })
}
