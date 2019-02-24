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
/* 4.Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/
function traceSecMin(arraySecMin){
    var min = arraySecMin[0];
    var secMin;
    for(var i=0; i< arraySecMin.length;i++){
        if((arraySecMin[i+1]<arraySecMin[i]) && (arraySecMin[i+1] > min)) {
            secMin = arraySecMin[i+1];
         }
    }return console.log(secMin);
};
traceSecMin([4, 2, 2, -1, 1]);
/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sumPositive(arrayDiffrent){
    var arrayPositiv = [];
    var sum =0;
    for(var i = 0;i < arrayDiffrent.length;i++){
        if(arrayDiffrent[i]>0) {
            arrayPositiv= arrayDiffrent[i];
            sum = sum + arrayPositiv;
            
      }
    }console.log(sum);
};
sumPositive([3, 11, -5, -3, 1]);
/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.
*/
function findSymmetric (arrayDontKnowIfSymm){
    
    for(var i = 0 , j = arrayDontKnowIfSymm.length-1; i < j; i++, j--){
         if(arrayDontKnowIfSymm[i]=== arrayDontKnowIfSymm[j]) {
            return console.log("Array is symmetrical")
       } else {
        return console.log("Array is not symmetric")
       }
    } 
}; 
findSymmetric ([8,5,2,5,8]);
/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
function interwineArrays (arrayF,arrayS){
    newArray=[];
    for(var i = 0; i <  arrayF.length; i++){
        newArray[newArray.length]= arrayF[i];
        newArray[newArray.length] = arrayS[i];
        
    }return console.log(newArray);
};
interwineArrays([4, 5, 6, 2], [3, 8, 11, 9]);
/* 8. Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
function concateArrays (arrayA,arrayB){
    arrayConcate=arrayA;
    for(var i = 0; i<arrayB.length; i++){
        arrayConcate[arrayConcate.length]=arrayB[i];
    }return arrayConcate;
};
console.log(concateArrays([4, 5, 6, 2], [3, 8, 11, 9]));
/* 9.Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/
function delElement(arrSetUp,element){
    for( var i = 0; i< arrSetUp.length;i++){
        if(arrSetUp[i]===element){
             delete arrSetUp[i];
             
        }
    }return arrSetUp;
};
console.log(delElement([4, 6, 2, 8, 2, 2],2));
/* 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
var arrInserted=[];
var index = 3;
if(index < arrGive.length){
    function insertElement (arrGive,element){
        var element = 78;
         for (var i =0; i < arrGive.length; i++){
        if(i = index){
            arrInserted[arrInserted.length]= element;
            arrInserted[arrInserted.length]=arrGive[i];
        } else{
            arrInserted[arrInserted.length]=arrGive[i];}
                }   
    } return console.log(arrInserted);
    } else {
        console.log("Error, position of value is greater than the array length.")
    };
    
console.log(insertElement([2, -2, 33, 12, 5, 8],78));
