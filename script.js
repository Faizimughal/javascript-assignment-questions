//assigment questions

//question 1

// --------------------arrays-----------------------------------

// Write a function that takes an array of integers and returns a new array that is the reverse of the input array.

// let a = [1, 2, 3, 4, 5];
// let b = a.reverse();
// document.write(b);

// Find the Maximum: Write a function that finds the maximum number in an array of integers.

// let numbers = [5, 3, 8, 1, 9];
// let maxNumber = Math.max(...numbers);
// document.write(maxNumber);

// Create a function that removes duplicate values from an array and returns a new array with unique values.

// let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// let uniqueArr = [...new Set(arr)];
// document.write(uniqueArr);

// --------------------strings-----------------------------------

// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

// let str = "madam";
// let reverseStr = str.split("").reverse().join("");
// if (str === reverseStr) {
//   document.write("It is a palindrome");
// } else {
//   document.write("It is not a palindrome");
// }

// Create a function that counts the number of vowels in a given string.

// let str = "hello";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i] === "a" ||
//     str[i] === "e" ||
//     str[i] === "i" ||
//     str[i] === "o" ||
//     str[i] === "u"
//   ) {
//     count++;
//   }
// }
// document.write(count);

// Write a function that checks if two strings are anagrams of each other (contain the same characters in a different order)

// let str1 = "listen";
// let str2 = "silent";
// let str1Arr = str1.split("").sort();
// let str2Arr = str2.split("").sort();
// if (str1Arr === str2Arr) {
//   document.write("It is an anagram");
// } else {
//   document.write("It is not an anagram");
// }

// -----------------------------objects--------------------------

// Write a function that merges two objects into one. If there are duplicate keys, the values should be combined into an array.

// let obj1 = { a: 1, b: 2 };

// let obj2 = { b: 3, c: 4 };

// let mergedObj = { ...obj1, ...obj2 };

// for (let key in mergedObj) {
//   if (Array.isArray(mergedObj[key])) {
//     mergedObj[key] = [...mergedObj[key]];
//   }
// }
// document.write(JSON.stringify(mergedObj));

// Create a function that counts the number of properties (keys) in an object.

// let obj = { a: 1, b: 2, c: 3 };

// let count = 0;

// for (let key in obj) {
//   count++;
// }

// document.write(count);

// Write a function that creates a deep clone of an object.

// let obj = { a: 1, b: { c: 2 } };

// let clonedObj = JSON.parse(JSON.stringify(obj));

// document.write(JSON.stringify(clonedObj));

// ------------------------------------maps--------------------

// Write a function that takes an array and returns a map where the keys are the unique elements and the values are their counts.

// let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// let map = new Map();

// arr.forEach((num) => {
//   if (map.has(num)) {
//     map.set(num, map.get(num) + 1);
//   } else {
//     map.set(num, 1);
//   }
// });

// document.write(JSON.stringify([...map]));

// Create a function that inverts a given map, swapping keys and values.

// let map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);

// let invertedMap = new Map();

// for (let [key, value] of map) {
//   invertedMap.set(value, key);
// }

// document.write(JSON.stringify([...invertedMap]));

// ---------------------------------------------if-else--------------

// Write a function that takes a numeric score and returns the corresponding letter grade (A, B, C, D, F) using if..else statements.

// let score = 85;

// if (score >= 90) {
//   document.write("A");
// } else if (score >= 80) {
//   document.write("B");
// } else if (score >= 70) {
//   document.write("C");
// } else if (score >= 60) {
//   document.write("D");
// } else {
//   document.write("F");
// }

// Create a function that takes a number (1-7) and returns the corresponding day of the week using a switch statement.

// let day = prompt("Enter a number (1-7)");

// switch (day) {
//   case "1":
//     document.write("Monday");
//     break;
//   case "2":
//     document.write("Tuesday");
//     break;
//   case "3":
//     document.write("Wednesday");
//     break;
//   case "4":
//     document.write("Thursday");
//     break;
//   case "5":
//     document.write("Friday");
//     break;
//   case "6":
//     document.write("Saturday");
//     break;
//   case "7":
//     document.write("Sunday");
//     break;
//   default:
//     document.write("Invalid day number");
// }

// 2.Find the largest and smallest number in an array.

// let numbers = [3, 6, 8, 12, 15, 21, 28];
// let largestNum, smallestNum;
// largestNum = Math.max(...numbers);
// smallestNum = Math.min(...numbers);
// console.log("Largest Number: " + largestNum);
// console.log("Smallest Number: " + smallestNum);

// 3.Reverse an array without using .reverse().

// let numbers = [3, 6, 8, 12, 15, 21, 28];
// let reverseStr = [];
// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i];
//   reverseStr.unshift(num);
// }
// console.log(reverseStr.toString());

// 4.Count how many times a specific number appears in an array.
// let numbers = [12, 10, 13, 10, 14, 14, 14, 15, 2, 12];
// let result = {};

// numbers.forEach((num) => {
//   if (result[num]) {
//     result[num]++; // agar number pehle se hai to count badhao
//   } else {
//     result[num] = 1; // pehli dafa aaye to 1 set karo
//   }
// });

// console.log(result);

// 5.Remove duplicates from an array.
// let numbers = [12, 10, 13, 10, 14, 14, 14, 15, 2, 12];
// let uniqueArray = [...new Set(numbers)];
// console.log(uniqueArray);

// 6.Check if an array is palindrome (e.g. [1,2,3,2,1]).
// let arr = [1, 2, 3, 2, 1];
// let reversedArr = [...arr].reverse();
// if (JSON.stringify(arr) === JSON.stringify(reversedArr)) {
//   console.log("It is a palindrome");
// } else {
//   console.log("It is not a palindrome");
// }

// 7.Merge two arrays and remove duplicates.
//method 1
// let numbers = [10, 12, 13, 14, 15, 16];
// let newNumbers = [10, 12, 13, 13, 14, 18, 19];
// let mergeArr = numbers.concat(newNumbers);
// let uniqueArr = [...new Set(mergeArr)];
// console.log(uniqueArr);

//method2
// let numbers = [10, 12, 13, 14, 15, 16];
// let newNumbers = [10, 12, 13, 13, 14, 18, 19];
// let uniqueArr = [...new Set([...numbers, ...newNumbers])];
// console.log(uniqueArr);

// 8.Find the second largest number in an array.

// let numbers = [10, 12, 13, 14, 15, 16];
// let largestNum = Math.max(...numbers);
// let secondLargestNum = Math.max(...numbers.filter((num) => num !== largestNum));
// console.log(secondLargestNum);

// 9.Rotate an array by 1 position (e.g. [1,2,3,4] → [4,1,2,3]).

// let numbers = [10, 12, 13, 14, 15, 16];
// let shiftedNum = numbers.pop();
// numbers.unshift(shiftedNum);
// console.log(numbers);
