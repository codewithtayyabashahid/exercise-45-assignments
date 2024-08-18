let guestList:string[]=[`ali`,`farhan`,`raza`,`sana`];
for( let i=0; i<guestList.length; i++){
    console.log(`Respected Sir/Madam `+ guestList[i] +`,\nWe invited you on dinner. `);

}
let not_present:string=`farhan`;
let new_guest:string=`Tayyaba Shahid`;
guestList[1] = new_guest
for(let i=0; i<guestList.length; i++){
    console.log((`Respected Sir/Madam `+ guestList[i] +`,\nWe invited you on dinner. `));
}
console.log(`Mr .${not_present} will not coming on dinner tomorrow. `)