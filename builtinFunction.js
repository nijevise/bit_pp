/*1. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/
var arr1 = ["1", "21", undefined, "42", "1e+3", Infinity];
function justNumber(numbers) {
    var help = [];
    for (var k = 0; k < numbers.length; k++) {
        var number = parseFloat(numbers[k]);

        if (!isNaN(number) && (isFinite(number))) {
            help[help.length] = number;
        }
    }
    console.log(help);
}
justNumber(arr1);
/*2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
*/
var arr2 = [NaN, 0, 15, false, -22, '', undefined, 47, null];
funktion skkipElement (m){
    var only = '';
    for (var i=0; i < m.length; i++){
        var number = parseInt(m[i]);
        if 
    }
}
 