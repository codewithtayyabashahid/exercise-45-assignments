//Erxercise 43
//let magicians:string[]=['Alice','David','Chris'];
//function make_great(magicians:string[]):string[] {
  //  let greatMagicians = [];
  //  magicians.forEach(magician => {
    //    greatMagicians.push(`${magician} the Great `)
 //   })
//    return greatMagicians
//}
//let greatMagicians = make_great(magicians.slice());//creates a new modified array
//console.log("original magicians:")
//show_magicians(magicians);//show original names
//console.log("Great Magicians:");
//show_magicians(greatMagicians);//show modified names


//Exercise 44
//sandwiches
//function make_sandwich(...items:string[]){
  //  console.log(`Making a sandwich with: ${items.join(', ')}. `);
//}
//make_sandwich("ham","cheese");
//make_sandwich("turkey","letuce","tomato");
//make_sandwich("avacado","sprouts","mustard","mayo");


//exercise 45
//cars
function make_car(manufacturer:string,model:string,...option:[string,any][]):object{
    let car ={manufacturer,model}
    option.forEach(([key,value]) => car[key]);
    return car;
}
console.log(make_car("Toyota","corolla",["color","Red"],["year",2020]));
console.log(make_car("ford","corolla",["color","fiesta"],["sunroof",true]));










