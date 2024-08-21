/** 2 The following is an array of 10 students ages:
=> const ages = [19 ,22,19,24,20,25,26,24,25,24]

 Sort the array and find the min and max age
 Find the median age(one middle item or two middle items divided by two
 Find the average age(all items divided by number of items
 Find the range of the ages(ma minus min
 Compare the value of (min - average) and (max - average)

use abs() method   */



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log("Sorted ages:", ages);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);



let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
}
console.log("Median age:", medianAge);




const sumOfAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumOfAges / ages.length;
console.log("Average age:", averageAge);



const rangeOfAges = maxAge - minAge;
console.log("Range of ages:", rangeOfAges);




const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);
console.log("Difference between min and average:", minAverageDiff);
console.log("Difference between max and average:", maxAverageDiff);



/* output   Sorted ages: [
  19, 19, 20, 22, 24,
  24, 24, 25, 25, 26
]
Min age: 19
Max age: 26
Median age: 24
Average age: 22.8
07      */  



