let car:string='civic';
let age:number=18;
let numbers  :number[] =[1 ,2 ,3 ,4];

//**string tests */

//test 1 :equality (true)
console.log("Is car == civic ? I predict true. ");
console.log( car == 'civic'); //true

//test 2 : strict equality (TRUE)
console.log("Is car === civic ? I predict true. ");
console.log( car === 'civic'); //true

//test 3: inequality (true)
console.log("Is car != Toyota ? I predict False. ");
console.log( car != 'Toyota'); //true

//test 4: strict inequality (false)
console.log("Is car !== civic ? I predict False. ");
console.log( car !== 'civic'); //false 


//**Lowercase function test */

//test 5 : lowercase convesion(true)
console.log("Is car.toLowerCase() == 'civic' I predict False. ");
console.log( car.toLowerCase() == 'civic'); //true (converted to lowercase)

//test 6 : lowercase convesion(false)
console.log("Is car == car.toLowerCase() ? I predict False. ");
console.log(car == car.toLowerCase()); //false (original value remains)

//**Numerical Test */

//test 7:equality (true)
console.log("Is age == 25? I predict true. ");
console.log( age == 25 ); //true

//test 8 : Inequality (False)
console.log("Is age != 30? I predict true. ");
console.log( age != 30); //true

//test 9 : Greater than(False)
console.log("Is age > 30? I predict true. ");
console.log( age > 30); //false

//test 10 : Less than equal to(true)
console.log("Is age <= 25? I predict true. ");
console.log( age <= 25); //false















