var guestList = ["ali", "farhan", "raza", "sana"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam " + guestList[i] + ",\nWe invited you on dinner. ");
}
var not_present = "farhan";
var new_guest = "Tayyaba Shahid";
guestList[1] = new_guest;
for (var i = 0; i < guestList.length; i++) {
    console.log(("Respected Sir/Madam " + guestList[i] + ",\nWe invited you on dinner. "));
}
console.log("Mr .".concat(not_present, " will not coming on dinner tomorrow. "));
