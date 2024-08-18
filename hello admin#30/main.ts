//exercise 30# 
//make array of five or more username
//including name admin image that you are including in Code
//that will print greet th each user that will log in to website
//if username is 'admin', print special message
//otherwise print a general message 

let users:string []=['sana','laiba','saba','Tayyaba','admin'];

for(let user of users){
    if(user === "admin"){
        console.log("Hello admin , would you like to see a status report? ")

    }

else{
    console.log(`Hello ${users}, thank you for logging in again`)
}
}
