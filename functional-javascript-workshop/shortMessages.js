function shortMessage(messages){
    return messages.filter(element => element.message.length < 50 ).map(element => element.message)
}

module.exports = shortMessage