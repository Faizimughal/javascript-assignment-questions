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

// 10.Count even and odd numbers in an array.

// let numbers = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let evenNumbers = [];
// let oddNumbers = [];
// numbers.forEach((num) => {
//   if (num % 2 == 0) evenNumbers.push(num);
//   else oddNumbers.push(num);
// });
// console.log(
//   "even numbers in an array:",
//   evenNumbers.length,
//   "oddNumbers in an array:",
//   oddNumbers.length
// );
// console.log(evenNumbers);
// console.log(oddNumbers);

// 2.Flatten a nested array (e.g. [1,[2,3],[4,[5]]] → [1,2,3,4,5]).

// let arr = [1, [2, 3], [4, [5]]];
// let flattenArr = arr.flat(Infinity);
// console.log(flattenArr);

// 3.Find the missing number in an array (e.g. [1,2,3,5] → 4).

// let numbers = [1, 2, 3, 4, 5, 8, 9, 10, 11, 20];
// let min = Math.min(...numbers);
// let max = Math.max(...numbers);
// for (let i = min; i <= max; i++) {
//   if (!numbers.includes(i)) {
//     let missingNumbers = [];
//     missingNumbers.push(i);
//     console.log("Missing number is: " + missingNumbers);
//   }
// }

// 4.Find the intersection of two arrays (common elements).

// let Arr1 = ["apple", "mango", "banana", "pineapple", "orange", "grapes"];
// let Arr2 = ["apple", "mango", "banana", "orange", "melon", "watermelon"];
// let fruits = Arr1.filter((fruit) => Arr2.includes(fruit));
// console.log(fruits);

// let Arr1 = ["apple", "mango", "banana", "pineapple", "orange", "grapes"];
// let Arr2 = ["apple", "mango", "banana", "orange", "melon", "watermelon"];

// let set2 = new Set(Arr2); // {"apple","mango","banana","orange","melon","watermelon"}

// let fruits = Arr1.filter((fruit) => set2.has(fruit));
// console.log(fruits);

// 5.Find the union of two arrays.

// let Arr1 = ["apple", "mango", "banana", "pineapple", "orange", "grapes"];
// let Arr2 = ["apple", "mango", "banana", "orange", "melon", "watermelon"];
// let unionFruits = [...new Set([...Arr1, ...Arr2])];
// console.log(unionFruits);

// 6.Check if two arrays are equal (same elements, any order).

// let Arr1 = [1, 2, 3, 4, 5];
// let Arr2 = [5, 4, 2, 1, 3];
// if (Arr1.sort().toString() === Arr2.sort().toString())
//   console.log("both are same");
// else console.log("both are not same");

// 7.Move all zeros to the end of an array (e.g. [0,1,0,3,12] → [1,3,12,0,0]).

// let arr = [0, 1, 0, 3, 12];
// let nonZeroArr = arr.filter((num) => num !== 0);
// let zeroArr = arr.filter((num) => num === 0);
// console.log(nonZeroArr.concat(zeroArr));

// 8.Find the longest increasing subarray.

// let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
// let longestSubArr = [];
// let tempArr = [arr[0]];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[i - 1]) {
//     tempArr.push(arr[i]);
//   } else {
//     if (tempArr.length > longestSubArr.length) {
//       longestSubArr = tempArr;
//     }
//     tempArr = [arr[i]];
//   }
// }
// if (tempArr.length > longestSubArr.length) {
//   longestSubArr = tempArr;
// }
// console.log(longestSubArr);

// 9. Find the pairs in an array whose sum is equal to a target.
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let target = 10; // example target
// let seen = new Set();
// let found = false;

// for (let num of arr) {
//   let complement = target - num;
//   // check if complement already exists in set
//   if (seen.has(complement)) {
//     console.log(`Pair found: (${num}, ${complement})`);
//     found = true;
//   }
//   // add current number in set for future checking
//   seen.add(num);
// }

// if (!found) {
//   console.log("No pair found");
// }

// ======================strings==========================

// 1.Write a function to check if a string is a palindrome.

// function isPalindrome(str) {
//   let cleanStr = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
//   let reverseStr = cleanStr.split("").reverse().join("");
//   if (cleanStr === reverseStr) document.writeln("Given string is a palindrome");
//   else document.writeln("Given string is not a palindrome");
// }
// isPalindrome("Madam");

// 2.Write a function to capitalize the first letter of each word in a sentence.

// let str = "hello world! this is a test.";
// let capitalizeStr = str
//   .split(" ")
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");
// console.log(capitalizeStr);

// 3.Write a function to find the longest word in a sentence.

// let str = "The quick brown fox jumped over the lazy dog.";
// let words = str.split(" ");
// let longestWord = "";
// words.forEach((word) => {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// });
// console.log(longestWord);

// 4.Write a function to remove duplicate characters from a string.

// let str = "programming, programming,programming";
// let uniqueStr = str.split(",").map((word) => [...new Set(word)].join(""));
// console.log(uniqueStr);

// 5.Write a function to check if two strings are anagrams.

// let str1 = "listen";
// let str2 = "silent";
// if (str1.split("").sort().join("") === str2.split("").sort().join(""))
//   console.log(`${str1} and ${str2} both have same characters`);
// else console.log("both have different characters");

// 6.Write a function to reverse words in a sentence ("hello world" → "world hello").
// let str = "hello world";
// let reverseStr = str.split(" ").reverse().join(" ");
// console.log(reverseStr);

// 7.Write a function to count vowels and consonants in a string.

// let str = "my  name is faizan mehmood";
// let vowelStr = str.split(" ");
// let countVowel = 0;
// let countConsonant = 0;
// vowelStr.forEach((word) => {
//   for (let i = 0; i < word.length; i++) {
//     if (
//       word[i] === "a" ||
//       word[i] === "e" ||
//       word[i] === "i" ||
//       word[i] === "o" ||
//       word[i] === "u" ||
//       word[i] === "A" ||
//       word[i] === "E" ||
//       word[i] === "I" ||
//       word[i] === "O" ||
//       word[i] === "U"
//     ) {
//       countVowel++;
//     } else {
//       countConsonant++;
//     }
//   }
// });
// console.log(`Number of vowels:${countVowel}`);
// console.log(`Number of consonants:${countConsonant}`);

//method2

// let str = "my  name is faizan mehmood";

// let countVowel = 0;
// let countConsonant = 0;

// for (let char of str) {
//   if (/[aeiou]/i.test(char)) {
//     countVowel++;
//   } else if (/[a-z]/i.test(char)) {
//     countConsonant++;
//   }
// }

// console.log(`Number of vowels: ${countVowel}`);
// console.log(`Number of consonants: ${countConsonant}`);

// 8.Write a function to compress a string ("aaabbc" → "a3b2c1").

// let str = "my name is faizan mehmood";
// let charCount = {};
// for (let char of str) {
//   if (char !== " ") {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
// }
// console.log(charCount);

// 1.Reverse a string
// Input: "hello" → Output: "olleh"

// let str = "hello";
// let reverseStr = str.split("").reverse().join("");
// console.log(reverseStr);

// 4.Find the first non-repeating character
// Input: "aabbcde" → Output: "c"

// let str = "aabbcde";
// let charCount = {};
// for (let char of str) {
//   if (char !== " ") {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
// }
// for (let char in charCount) {
//   if (charCount[char] === 1) {
//     console.log(char);
//     break;
//   }
// }

// 9.Check if a string contains only digits
// Input: "12345" → Output: true
// Input: "123a5" → Output: false

// let str = "123ababa45";
// let isOnlyDigits = /^\d+$/.test(str);
// console.log(isOnlyDigits);

// 9.Extract numbers from a string
// Input: "Order number: 12345" → Output: 12345

// let str = "Order number: 12345";
// let numbers = str.match(/\d+/g).map(Number);
// console.log(numbers);

// 2.Find the most frequent character
// Input: "hello world" → Output: "l"

// let str = "hello world";
// let charCount = {};
// for (let char of str) {
//   if (char !== " ") {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
// }
// let maxCount = 0;
// let mostFrequentChar;
// for (let char in charCount) {
//   if (charCount[char] > maxCount) {
//     maxCount = charCount[char];
//     mostFrequentChar = char;
//   }
// }
// console.log(mostFrequentChar);

// 4.Remove all whitespaces
// Input: " hello world " → Output: "helloworld"

// let str = "hello world  my name    is faizan";
// let trimStr = str.split(" ").join("");
// console.log(trimStr);

// 5.Check if a string contains only alphabets
// Input: "HelloWorld" → Output: true

// let str = "hello world";
// let isAlphabets = /^[A-Za-z ]+$/.test(str);
// console.log(isAlphabets);

// 6.Compress a string (Run-length encoding)
// Input: "aaabbcddd" → Output: "a3b2c1d3"

// let str = "aaabbcddd";
// let charCount = {};
// let compressedStr = "";
// for (let char of str) {
//   if (char !== " ") {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
// }
// for (let char in charCount) {
//   compressedStr += char + charCount[char];
// }
// console.log(compressedStr);

// 3.Mask a credit card number
// Input: "1234567812345678" → Output: "************5678"

// let str = "1234567812345678";
// let maskedStr = str.slice(-4).padStart(str.length, "*");
// console.log(maskedStr);

// 8.Find all substrings of a string
// Input: "abc" → Output: ["a", "b", "c", "ab", "bc", "abc"]

// let str = "abc";
// let substrings = [];
// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j <= str.length; j++) {
//     substrings.push(str.slice(i, j));
//   }
// }
// console.log(substrings);

// 10.Check if a string ends with another string without using .endsWith()
// Input: "JavaScript", "Script" → Output: true

// function isEndsWith(str, target) {
//   return str.slice(-target.length) === target;
// }

// console.log(isEndsWith("JavaScript", "Script"));
// console.log(isEndsWith("JavaScript", "Java"));

// 9.Convert snake_case to camelCase
// Input: "hello_world_js" → Output: "helloWorldJs"

// let str = "hello_world_js";
// let camelCaseStr = str
//   .split("_")
//   .map((word, index) =>
//     index === 0
//       ? word.toLowerCase()
//       : word.charAt(0).toUpperCase() + word.slice(1)
//   )
//   .join("");
// console.log(camelCaseStr);

// =========================Object methods===========================

// 1. Ek object banao jisme `name`, `age`, aur `city` ho. Uske keys aur values print karo.

// let person = {
//   name: "faizan",
//   age: 24,
//   city: "faisalabad",
//   country: "Pakistan",
//   cell_no: "0317-7687726",
// };
// console.log(person);

// 2. Ek object ka size (number of properties) find karo.

// let person = {
//   name: "faizan",
//   age: 24,
//   city: "faisalabad",
//   country: "Pakistan",
//   cell_no: "0317-7687726",
// };
// console.log(Object.keys(person).length);

// 3. Kaise check karoge ki ek property object me exist karti hai ya nahi?

// let person = {
//   name: "faizan",
//   age: 24,
//   city: "faisalabad",
//   country: "Pakistan",
//   cell_no: "0317-7687726",
// };
// console.log(Object.hasOwn(person, "name"));

// 4. Difference explain karo shallow copy aur deep copy me. Code likh kar dikhana.

// Shallow Copy: Ek shallow copy me, agar original object ke andar koi nested object hai, to wo nested object reference ke through copy hota hai. Iska matlab hai ki agar nested object me koi change karoge to wo original object me bhi reflect hoga.

// let person = {
//   name: "faizan",
//   age: 24,
//   address: {
//     city: "faisalabad",
//     country: "Pakistan",
//   },
// };

// let shallowCopy = Object.assign({}, person);
// shallowCopy.address.city = "lahore";

// console.log(person.address.city);

// Deep Copy

// let person = {
//   name: "faizan",
//   age: 24,
//   address: {
//     city: "faisalabad",
//     country: "Pakistan",
//   },
// };

// let deepCopy = JSON.parse(JSON.stringify(person));

// deepCopy.address.city = "lahore";
// console.log(person.address.city);

// 5. `Object.assign` aur spread operator `{...obj}` use karke object copy karo.

// let person = {
//   name: "faizan",
//   age: 24,
//   address: { city: "faisalabad", country: "Pakistan" },
// };

// let newObj = Object.assign({}, person);
// newObj.address.city = "lahore";
// console.log(person.address.city);

// let newObj2 = { ...person };
// newObj2.address.city = "lahore";
// console.log(person.address.city);

// 6. Ek nested object ko deep clone karne ka tareeqa likho (without library).

// let person = {
//   name: "faizan",
//   age: 24,
//   address: {
//     city: "faisalabad",
//     zip: 38000,
//     country: "Pakistan",
//   },
// };

// let deepClone = JSON.parse(JSON.stringify(person));
// deepClone.address.city = "lahore";
// console.log(person.address.city);

// 7. Ek object ko `freeze` karo aur usme property add/update/delete karke dikhao.
// let person = {
//   name: "faizan",
//   age: 24,
//   address: {
//     city: "faisalabad",
//     country: "Pakistan",
//   },
// };
// Object.freeze(person);
// person.name = "ahmed"; // update
// delete person.address.city; // delete
// person.country = "India"; // add
// console.log(person);

// 8. Ek object ko `seal` karo aur usme property add/update/delete karke dikhao.

// let person = {
//   name: "faizan",
//   age: 24,
//   address: {
//     city: "faisalabad",
//     country: "Pakistan",
//   },
// };
// Object.seal(person);
// person.name = "ahmed"; // update
// delete person.address.city; // delete
// person.country = "India"; // add
// console.log(person);

// 9. Interviewer puchta hai: `freeze` aur `seal` me exact difference kya hai? Example se samjhao.

// 10. Ek property ko read-only banane ke liye `Object.defineProperty` ka use karo.

// let person = {
//   name: "faizan",
//   age: 24,
//   address: {
//     city: "faisalabad",
//     country: "Pakistan",
//   },
// };

// console.log(
//   Object.defineProperty(person, "name", { enumerable: false, writable: false })
// );
// console.log(Object.getOwnPropertyDescriptor(person, "name"));

// 11. `Object.getOwnPropertyDescriptor` ka use karke ek property ka descriptor print karo.

// let person = {
//   name: "faizan",
//   age: 24,
//   address: {
//     city: "faisalabad",
//     country: "Pakistan",
//   },
// };
// console.log(Object.getOwnPropertyDescriptor(person, "name"));

// 12. Ek property ko non-enumerable banao aur dikhao ki loop me wo nahi aa raha.

// let person = {
//   name: "faizan",
//   age: 24,
//   address: {
//     city: "faisalabad",
//     country: "Pakistan",
//   },
// };
// Object.defineProperty(person, "name", { enumerable: false });

// 13. Ek object ko dusre object ka prototype banao using `Object.create`.

// let person = {
//   name: "faizan",
//   age: 24,
//   address: { city: "faisalabad", zip: 38000, country: "pakistan" },
// };

// let newObj = Object.create(person);
// newObj.cell_no = "03177687726";
// console.log(newObj.address);

// 14. `getPrototypeOf` aur `setPrototypeOf` ka use karke prototype chain ko modify karo.

// let person = {
//   name: "faizan",
//   age: 24,
//   city: "faisalabad",
// };
// let skills = {
//   language: ["javaScript", "TypeScript"],
//   tech: ["MERN", "MEAN"],
// };
// Object.setPrototypeOf(person, skills);
// console.log(person.language);

// console.log(Object.getPrototypeOf(person));

// 16. Ek object banao aur `hasOwn` aur `hasOwnProperty` se property check karo.

// let person = {
//   name: "faizan",
//   age: 24,
//   city: "faisalabad",
// };
// console.log(Object.hasOwn(person, "name"));
// console.log(person.hasOwnProperty("name"));

// 18. Ek function likho jo check kare ki diya gaya input object hai ya nahi.

// function isObject(value) {
//   return value !== null && typeof value === "object" && !Array.isArray(value);
// }

// console.log(isObject({ name: "Faizan" })); // true
// console.log(isObject([1, 2, 3])); // false
// console.log(isObject(null)); // false
// console.log(isObject("hello")); // false

// 19. Ek function likho jo object ke andar sabse bada number return kare.

// let numbers = { a: 928, b: 67, c: 17, d: 98, e: 9 };
// console.log(Math.max(...Object.values(numbers)));

// 20. Ek object ko key-value pair array me convert karo aur wapas object me banao (using `entries` + `fromEntries`).

// let person = {
//   name: "faizan",
//   age: 24,
//   city: "faisalabad",
// };
// let arr = Object.entries(person);
// console.log(arr.flat(2));

// console.log(Object.fromEntries(arr));

// 21. Ek function likho jo object ke andar nested properties ko safely access kare (like optional chaining).

// let person = {
//   firstname: "faizan",
//   lastname: "mehmood",
//   age: 23,
//   city: "faisalabad",
//   country: "pakistan",
//   address: {
//     street: "abc road",
//     zip: 38000,
//   },
// };

// // Normal access
// console.log(person.firstname); // "faizan"

// // Nested safe access
// console.log(person.address?.street); // "abc road"
// console.log(person.address?.city); // undefined (no error)
// console.log(person.contact?.phone); // undefined (safe)

// 22. Interviewer favourite: "Kaise check karoge ki ek object empty hai ya nahi?"

// 📌 1. Object.keys() / Object.entries() use karke
// let obj = {};
// console.log(Object.keys(obj).length === 0); // true
// console.log(Object.entries(obj).length === 0); // true

// 📌 3. JSON.stringify() trick
// let obj = {};
// console.log(JSON.stringify(obj) === "{}"); // true
