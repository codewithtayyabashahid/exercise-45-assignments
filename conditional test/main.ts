let car:string= 'civic';

//test 1 :equality comparison (true)
console.log("Is car == civic ? I predict true. ");
console.log( car == 'civic'); //true

//test 2 : strict equality compARISON (TRUE)
console.log("Is car === civic ? I predict true. ");
console.log( car === 'civic'); //true

//test 3: inequality comparison (false)
console.log("Is car != civic ? I predict False. ");
console.log( car != 'civic'); //false

//test 4: strict inequality comparison (false)
console.log("Is car !== civic ? I predict False. ");
console.log( car !== 'civic'); //false (lexicographic comparison)

//test 5: less than comparison (false)
console.log("Is car < civic ? I predict False. ");
console.log( car < 'civic'); //false (lexicographic comparison)

//test 6: Greater than comparison (false)
console.log("Is car > civic ? I predict False. ");
console.log( car > 'civic'); //false (lexicographic comparison)

//test 7: less than or equal to comparison (true)
console.log("Is car <= civic ? I predict False. ");
console.log( car <= 'civic'); //true

//test 8: Greater than or equal to comparison (true)
console.log("Is car >= civic ? I predict False. ");
console.log( car >= 'civic'); //true

////test 9: checking truthiness (true)
console.log("Is car? I predict False. ");
console.log( car); //true (non-empty string is true)

////test 10: checking falsiness(false)
console.log("Is !car? I predict False. ");
console.log( !car); //false (nagation of a truthy value)













