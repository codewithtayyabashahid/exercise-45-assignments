interface item{
    name:string;
    price:number;
}
//create two objects
const book :item ={
    name : 'Essential Typescript'
    price : 500
}
const watch:item ={
    name: 'Rolex'
    price:5000
}
console.log(`book name ${book.name} , price $${book.price}`);
console.log(`book name ${watch.name} , price $${watch.price}`);