 Reverse an Array in JavaScript :

Using for loop :

 original_array = [1, 2, 3, 4];

 reversed_array = [];

console.log("Original Array: ");
console.log(original_array);

for (let i = original_array.length - 1;
    i >= 0; i--) {
    reversed_array.push(original_array[i]);
}

console.log("Reversed Array: ");
console.log(reversed_array);

Output is :

Original Array: 
[ 1, 2, 3, 4 ]
Reversed Array: 
[ 4, 3, 2, 1 ]
