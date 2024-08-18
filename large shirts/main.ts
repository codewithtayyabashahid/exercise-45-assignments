function makeShirt(size:string ="large",message:string="I Love Typescript"){
    console.log(`Making a ${size} t-shirt with a message "${message}" on it. `)
}
makeShirt(); //default large and message
makeShirt("medium", "code is life")
makeShirt("small", "dive into code")