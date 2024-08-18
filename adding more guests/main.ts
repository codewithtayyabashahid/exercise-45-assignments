let guestList:string[]=[`ali`,`farhan`,`raza`,`sana`];
//for( let i=0; i<guestList.length; i++){
  //  console.log(`Respected Sir/Madam `+ guestList[i] +`,\nWe invited you on dinner. `);
//}
let not_present:string=`farhan`;
let new_guest:string=`Tayyaba Shahid`;
guestList[1] = new_guest
for(let i=0; i<guestList.length; i++){
    console.log((`Respected Sir/Madam `+ guestList[i] +`,\nWe invited you on dinner tomorrow . \nThank you\n `));
}
guestList.unshift('shaheen','sarfaraz','rizwan');
for(let i=0; i<guestList.length; i++){
    console.log((`Respected Sir/Madam `+ guestList[i] +`,\nWe invited you on dinner tomorrow . \nThank you\n `));
}
