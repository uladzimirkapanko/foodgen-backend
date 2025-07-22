const users = [];

function findUserByName(userName) {
    return users.find(u => u.userName === userName);
}

function findUserByEmail(email) {
    return users.find(u => u.email === email);
}

function addUser(user) {
    users.push(user);
}

module.exports = {
    users,
    findUserByName,
    findUserByEmail,
    addUser
};
