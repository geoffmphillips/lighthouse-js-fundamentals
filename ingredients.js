var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var count = 0;
while (count <= ingredients.length - 1) {
  console.log(ingredients[count]);
  count++;
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i <= ingredients.length - 1; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
