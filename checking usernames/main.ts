let currentUsers :string[]=['user1','admin','user3','user4','user5'];
let newUsers :string[]=['user1','user6','user7','admin','user9'];

newUsers.forEach((newUser) =>{
    if(
        currentUsers.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} will need to enter a new user name. `)
    }else{
        console.log(`${newUser} is available. `)
    }
});




























