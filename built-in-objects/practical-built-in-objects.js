// Try to solve all assignments on a separate branch. Keep in mind that you should try to use built-in objects and their methods, solo or combined. You should use loops only for the 4 and 10 assignment, all others can be solved using built-in object methods.

// 1. Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

// 'ff', 16, 8 -> 377


// 2. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
// 	12345 -> 54321

// function reverseNumber(num) {
//     var numArray;
//     var stringNum;
//     stringNum = "" + num;
//     numArray = stringNum.split("");
//     var finalNum = numArray.reverse();
//     var spliceNumber = finalNum.join(",");
//     spliceNumber = finalNum.join("");
//     console.log(spliceNumber);
// }
// reverseNumber(12345);

// // 3. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// // Note: Assume punctuation, numbers and symbols are not included in the passed string.

// // “Webmaster” -> “abeemrstw”
// function findAlphabeticOrder(words) {
//     var orderString = words.toLowerCase();
//     var splitStringArray = orderString.split("");
//     splitStringArray.sort();
//     var final = splitStringArray.join("");
//     return final;
// }
// console.log(findAlphabeticOrder("Webmaster"));

// 4. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
// function makeAlphabet(text) {
//     var alphaString;
//     var newOrder = "";
//     var middleWord = "";
//     var joinWord;
//     alphaString = text.split(" ");
//         for (var i = 0; i < alphaString.length; i++) {
//         middleWord = alphaString[i].split("");
//         middleWord.sort();
//         joinWord = middleWord.join("");
//         newOrder += joinWord + " ";
//         joinWord = "";
//     } return newOrder;

// }
// console.log(makeAlphabet("Republic Of Serbia"));



// 5. 
// Write a function to split a string and convert it into an array of words.
// "John Snow" -> [ 'John', 'Snow' ]

// function splitAString(stringName) {
//     return stringName.split(" ");

// };
// console.log(splitAString("John Snow"));


// 6.   
// Write a function to convert a string to its abbreviated form. 
// 	"John Snow" -> 	"John S."
// function abbrevateName(stringFullName) {
//     var lastName = "";
//     var separeteNames = stringFullName.split(" ");
//     lastName = separeteNames[0] + ' ' + separeteNames[1][0] + '.';
//     return lastName;
// }
// console.log(abbrevateName("John Snow"));
// 7.
// Write a function that can pad (left, right) a string to get to a determined length.
// 	'0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000
// function spliceString(stringPad, stringNoPadding, side) {
//     var newNumber = "";
//     var oduzimanje = stringPad.length - ((stringNoPadding.toString()).length);
//     var additionalElement = stringPad.slice(0, oduzimanje);
//     if (side === "l") {
//         //var additionalElement = stringPad.slice(0, oduzimanje);
//         //newNumber += stringNoPadding.splice(0, 0, additionalElement);
//         newNumber = stringPad.slice(0, oduzimanje) + stringNoPadding;

//     }
//     else {

//         //newNumber += stringNoPadding.splice(stringNoPadding, 0, additionalElement);
//         newNumber = stringNoPadding + additionalElement;
//     }
//     return newNumber;
// }
// //console.log("123".slice(0, 2));

// console.log(spliceString('0000', 123, 'l'));
// console.log(spliceString('00000000', 123, 'r'));

// 8.
// Write a function to capitalize the first letter of a string and returns modified string.
// "js string exercises" -> "Js string exercises"
// function capitalizeLetter(string) {
//     var stringArr = string.split("");

//     stringArr[0] = stringArr[0].toUpperCase();
//     var newString = stringArr.join(" ")
//     return newString;
// }
// console.log(capitalizeLetter("js string exercises"));

// 9.
// Write a function to hide email addresses to protect them from unauthorized users.
// 	"somerandomaddress@example.com" -> "somerand...@example.com"
// function hideEmail(stringUrl) {

//     var num = stringUrl.indexOf("@") - 9;
//     var strArr = stringUrl.split("")
//     strArr.splice(num, 9, "...")
//     var newStr = strArr.join("")
//     console.log(newStr);
// }
// hideEmail("somerandomaddress@example.com");

// 10.
// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.


// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
// function swopString(input) {
//     var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var LOWER = 'abcdefghijklmnopqrstuvwxyz';
//     var newString = "";
//     for (var i = 0; i < input.length; i++) {
//         if (UPPER.includes(input[i])) {
//             newString = newString + input[i].toLowerCase();
//         }
//         else {
//             newString = newString + input[i].toUpperCase();
//         }
//     }
//     return newString;
// }
// console.log(swopString("The Quick Brown Fox"));
// var str = new String("Potato head");
// console.log(str.slice(1, 8));
// console.log(str.lastIndexOf("a"));
var str = "Potato head";//'The quick brown fox jumps over the lazy dog.';
console.log(str.split());
//console.log(str.slice(31));
// expected output: "the lazy dog."

//console.log(str.slice(4, 19));
// expected output: "quick brown fox"

//console.log(str.slice(-4));
// expected output: "dog."

// console.log(str.substring(2, 3));
// var a2 = new Array();
// console.log(a2);
// var b;
// console.log(b);