var currentUsers = ['user1', 'admin', 'user3', 'user4', 'user5'];
var newUsers = ['user1', 'user6', 'user7', 'admin', 'user9'];
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new user name. "));
    }
    else {
        console.log("".concat(newUser, " is available. "));
    }
});
