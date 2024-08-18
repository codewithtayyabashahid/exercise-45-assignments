var guestList = ["ali", "farhan", "raza", "sana"];
//for( let i=0; i<guestList.length; i++){
//  console.log(`Respected Sir/Madam `+ guestList[i] +`,\nWe invited you on dinner. `);
//}
var not_present = "farhan";
var new_guest = "Tayyaba Shahid";
guestList[1] = new_guest;
for (var i = 0; i < guestList.length; i++) {
    console.log(("Respected Sir/Madam " + guestList[i] + ",\nWe invited you on dinner tomorrow . \nThank you\n "));
}
guestList.unshift('shaheen', 'sarfaraz', 'rizwan');
for (var i = 0; i < guestList.length; i++) {
    console.log(("Respected Sir/Madam " + guestList[i] + ",\nWe invited you on dinner tomorrow . \nThank you\n "));
}
