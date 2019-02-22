/* 1. Write a program that checks if a given element e is in the array a.
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  element = 3, arrayCheck = [5, -4.2, 18, 7]
Output: no
*/
function checkElement(arrayCheck, element) {


    for (var i = 0; i < arrayCheck.length; i++) {

        if (element === arrayCheck[i]) {
            return console.log("Yes");
        }
    } return console.log("no")
};
checkElement([5, -4.2, 3, 7], 6);
/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
function tracePositive(arrayMash) {
    for (var i = 0; i < arrayMash.length; i++) {
        if (arrayMash[i] > 0) {
            arrayMash[i] = arrayMash[i] * 2;
        }
    } return arrayMash;
}
console.log(tracePositive([-3, 11, 5, 3.4, -8]));
/* 3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
function traceMin(arrayMin) {
    var min = arrayMin[0];
    var index;
    for (var i = 1; i < arrayMin.length; i++) {

        if (arrayMin[i + 1] < arrayMin[i]) {
            min = arrayMin[i + 1]
            index = i + 1;
        }
    } return console.log(min + "," + index);
};
traceMin([4, 2, 2, -1, 6]);