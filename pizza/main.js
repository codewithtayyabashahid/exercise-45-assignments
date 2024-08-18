var myPizza = ['cheeze pizza', 'pepperoni pizza', 'lava pizza'];
//print only names of pizza
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
//printing names with message
for (var i = 0; i < myPizza.length; i++) {
    console.log("i like to eat ".concat(myPizza[i]));
}
console.log("\nI really like to eat pizzas. Pizza comes in a variety of flavors and toppings, allowing individuals to customize it to their own liking. ");
