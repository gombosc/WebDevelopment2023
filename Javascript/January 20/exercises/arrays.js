var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();
console.log(array);

// 2. Sort the array in order.
array.sort();
console.log(array);

// Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);

// 4. Remove "Apples" from the array.
array.splice(1,0);
console.log(array);

// 5. Using this array, var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];  access "Oranges".
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]]; 
console.log(array2[1][1][0]);

// 6. Sort the array in reverse order. 
array.reverse();