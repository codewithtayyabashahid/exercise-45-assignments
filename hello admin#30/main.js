//exercise 30# 
//make array of five or more username
//including name admin image that you are including in Code
//that will print greet th each user that will log in to website
//if username is 'admin', print special message
//otherwise print a general message 
var users = ['sana', 'laiba', 'saba', 'Tayyaba', 'admin'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin , would you like to see a status report? ");
    }
    else {
        console.log("Hello ".concat(users, ", thank you for logging in again"));
    }
}
