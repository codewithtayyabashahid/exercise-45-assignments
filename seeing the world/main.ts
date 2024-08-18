//18 : think of atleast five places you'd like to visit.
//store location in array.make sure array is in alphabetical order
//print your array in it's original order

let places:string[]=['Seoul','New york','tokyo','toronto','Edenburgh']
//console.log('original :' + places);
//print array in alphabetical order without modifying
//console.log('copy ' + [...places].sorts();

//show that your array is still in it's original order.
console.log(`original :` + places);

//print array in reverse alphabetical order without changing it's original order.
console.log('copy ' + [...places].sort().reverse());

//show that your array is still in it's original position.
console.log('copy ' + [...places].sort().reverse());

//reverse the order of your list.print to show it's order has changed
console.log('original ' + places.sort());

//reverse order print to show it's back to it's original order
console.log('original ' + places.sort().reverse());