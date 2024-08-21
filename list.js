/** 5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their corresponding squares.     */





let uniqueNumbers = new Set([1, 2, 3, 4, 5, 6, 2, 3]); 
let numberSquares = new Map();
uniqueNumbers.forEach(number => {
    numberSquares.set(number, number * number);
});
console.log("Unique Numbers:");
uniqueNumbers.forEach(number => {
    console.log(number);
});
console.log("\nNumbers and their Squares:");
numberSquares.forEach((square, number) => {
    console.log(`${number} => ${square}`);
});


/* output
Unique Numbers:
1
2
3
4
5
6

Numbers and their Squares:
1 => 1
2 => 4
3 => 9
4 => 16
5 => 25
6 => 36


*/
