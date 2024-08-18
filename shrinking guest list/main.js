//exercise 17
var guestList = ["ali", "farhan", "raza", "sana"];
//for( let i=0; i<guestList.length; i++){
// console.log(`Respected Sir/Madam `+ guestList[i] +`,\nWe invited you on dinner. `);
//}
var not_present = "farhan";
var new_guest = "Tayyaba Shahid";
guestList[1] = new_guest;
//for(let i=0; i<guestList.length; i++){
//  console.log((`Respected Sir/Madam `+ guestList[i] +`,\nWe invited you on dinner tomorrow . \nThank you\n `));
//}
guestList.unshift('shaheen', 'sarfaraz', 'rizwan');
//for(let i=0; i<guestList.length; i++){
//  console.log((`Respected Sir/Madam `+ guestList[i] +`,\nWe invited you on dinner tomorrow . \nThank you\n `));
//}
console.log('\nUnfortunately we cannot arrange big table , only two people are allowed. ');
while (guestList.length > 2) {
    var remove_guest = guestList.pop();
    console.log("Sorry Sir/Madam. ".concat(remove_guest, " you are not invited for dinner. "));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam " + guestList[i] + ",\nYes you are still invited on dinner tomorrow . \nThank you\n ");
}
