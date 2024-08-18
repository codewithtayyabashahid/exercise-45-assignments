//18 : think of atleast five places you'd like to visit.
//store location in array.make sure array is in alphabetical order
//print your array in it's original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['Seoul', 'New york', 'tokyo', 'toronto', 'Edenburgh'];
//console.log('original :' + places);
//print array in alphabetical order without modifying
//console.log('copy ' + [...places].sorts();
//show that your array is still in it's original order.
console.log("original :" + places);
//print array in reverse alphabetical order without changing it's original order.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
//show that your array is still in it's original position.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
//reverse the order of your list.print to show it's order has changed
console.log('original ' + places.sort());
