function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(submitted => goodUsers.some(good => submitted.id == good.id))
    };
}
module.exports = checkUsersValid