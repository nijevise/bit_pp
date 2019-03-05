/* 1. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/

function cleanArr(arrMix){
    var j = 0;
    var newArray = [];
    for(var i = 0; i < arrMix.length; i++){
              
        if (typeof arrMix[i] == 'string') {
            newArray[j] = parseFloat(arrMix[i]);
            j++
        }
    } return newArray;
}
var arrMix = ["1", "21", undefined, "42", "1e+3", Infinity];
var newArray = cleanArr(arrMix);
console.log(newArray);

/* 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
*/
 /*function skipArr(a) {
     var str = ''
     for (var i = 0; i < a.length; i++) {
         if (a[i] !== undefined && a[i] !== null && a[i] !== Infinity && !isNaN(a[i])) {
             str += a[i] + ' '
         }
     } 
      return str
 }
 var res = skipArr(input)
 console.log(res)
*/
function joinArr(arrBegin){
    var newString = '';
    for( var i = 0; i < arrBegin.length; i++){
        if( arrBegin[i] !== undefined && arrBegin[i] !== null && !isNaN(arrBegin[i]) && isFinite(arrBegin[i])){
            newString = newString + arrBegin[i];
        }
    } return newString
}
var inputArr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var newArray = joinArr(inputArr);
console.log(newArray);
/* 3.Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]

 var input = [NaN, 0, 15, false, -22, '', undefined, 47, null]

 function falsyArr(a) {
     var arr = []
     for (var i = 0; i < a.length; i++) {
         if (a[i]) {
             arr[arr.length] = a[i]
         }
     } 
     return arr
 }
 var res = falsyArr(input)
 console.log(res)
*/
function makeTruefly(arrWrong){
    var arrTrue = [];
    for( var i = 0; i < arrWrong.length; i++){
        if (arrWrong[i]){
            arrTrue[arrTrue.length] = arrWrong[i];
        }
    }return arrTrue
};
var arrMixAndMach = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var arrTrue = makeTruefly(arrMixAndMach);
console.log(arrTrue);
/* 4.Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3

 var input = 12345

 function revNum(a) {
    var str = ''
     str += a
     var newStr = ''
     var newNum
     for (var i = str.length - 1; i >= 0; i--) {
         newStr += str[i]
         newNum = parseInt(newStr)
     }
     return newNum
 }
 var res = revNum(input)
 console.log(res)

var input = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
function countInteger(bigStr){
    var smallStr = '';
    var numberInteger;
    for (var i = 0; i < bigStr.length; i++){
      smallStr += bigStr[i] ;
      numberInteger = parseInt(smallStr);
       
    } return numberInteger
};
var res = countInteger(input);
console.log(countInteger(res));
*/
function numberOfIntegers(array){
    var i;
    var integerValue;
    var counter = 0;
 
    for (i = 0; i < array.length; i++) {
        integerValue = parseInt(array[i]);
        if (isNaN(integerValue) == false && integerValue == array[i]) {
            counter++;
        }
    }
 
    return counter;
 
 }
 
 
 var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
 var integerCounter;
 integerCounter = numberOfIntegers(array);
 console.log(integerCounter);
 5.
 var input = [7, 9, 0, -2]

 function lastEl(a, n) {
     var el = a[a.length - n]
     return el
 }
 var res = lastEl(input, 3)
 console.log(res)

 6.
 function specNum(n, a) {
     var arr = []
     if (arguments[1] === undefined) {
         for (var i = 0; i < n; i++) {
             arr[arr.length] = null
         }
     } else {
         for (var i = 0; i < n; i++) {
             arr[arr.length] = a
         }
     }
     return arr
 }

 var res = specNum(3, 'wgdhqg')
 console.log(res)

 7.

function perfNum(n) {
    if ((n / 2) + (n / 4) + {

    }
}







