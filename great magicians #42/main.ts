//42
let magicians :string[] =["DON","Rmeez","david"];
function make_great(magicians:string[]){
for(let i=0; i< magicians.length; i++){
    magicians[i] = magicians[i] + "the Great"
}
}
make_great(magicians)
