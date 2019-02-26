/* 1.Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/
function switchPlace(arrInput) {
    var min = arrInput[0];
    var max = arrInput[0];
    for (var i = 1; i < arrInput.length; i++) {
        if (arrInput[i] > max) {
            max = arrInput[i];

        } if (arrInput[i] < min) {
            min = arrInput[i];
        }
    } return arrInput;
};
console.log(switchPlace([3, 500, 12, 149, 53, 414, 1, 19]));

/* 2.Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/
function divadeThanAdd(arrToChange) {
    var newArrBig = [];
    for (var i = 0; i < arrToChange.length; i++) {
        if (arrToChange[i] == 0) {
            arrToChange[i] = 20;
            newArrBig = arrToChange;
        } else {
            arrToChange[i] = ((arrToChange[i] / 2) + 5);
            newArrBig = arrToChange;
        }
    } return newArrBig;
};
console.log(divadeThanAdd([3, 500, -10, 149, 53, 414, 1, 0]));

/* 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/
function findGrade(arrName, arrMark) {
    var arrNameAndGrade = [];
    for (var i = 0; i < arrName.length; i++) {
        arrNameAndGrade[arrNameAndGrade.length] = arrName[i];
        arrNameAndGrade[arrNameAndGrade.length] = arrMark[i];
        if (arrMark[i] < 50) {
            console.log(arrName[i] + ' failed to complete the exam');
        } else if (arrMark[i] < 60) {
            console.log(arrName[i] + ' aquired ' + arrMark[i] + " and earned: 6")
        } else if (arrMark[i] < 70) {
            console.log(arrName[i] + ' aquired ' + arrMark[i] + " and earned: 7")
        } else if (arrMark[i] < 80) {
            console.log(arrName[i] + ' aquired ' + arrMark[i] + " and earned: 8")
        } else if (arrMark[i] < 90) {
            console.log(arrName[i] + ' aquired ' + arrMark[i] + " and earned: 9")
        } else if (arrMark[i] <= 100) {
            console.log(arrName[i] + ' aquired ' + arrMark[i] + " and earned: 10")
        }
    } return arrNameAndGrade;
};
findGrade(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]);
/*4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/
function doubleArr(arrFirst) {
    var arrDuble = [];
    for (var i = 0; i < arrFirst.length; i++) {
        arrDuble[arrDuble.length] = arrFirst[i] * 2;
    } return arrDuble;
};
function rearrangeArr(arrNum) {
    var incrisArr = doubleArr(arrNum);
    var minNumber;
    for (var i = 0; i < incrisArr.length - 1; i++) {
        for (var j = i + 1; j < incrisArr.length; j++) {
            if (incrisArr[i] > incrisArr[j]) {
                minNumber = incrisArr[j];
                incrisArr[j] = incrisArr[i];
                incrisArr[i] = minNumber;
            }
        }

    }
    return incrisArr;
}
console.log(rearrangeArr([13, 11, 15, 5, 6, 1, 8, 12]));



/* 5. (skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/
function descendArr(arrStart) {
    var arrFinal = arrStart;
    var tmp;
    for (var i = 0; i < arrFinal.length - 1; i++) {
        for (var j = i + 1; j < arrFinal.length; j++) {
            if (arrFinal[i] < arrFinal[j]) {
                tmp = arrFinal[j];
                arrFinal[j] = arrFinal[i];
                arrFinal[i] = tmp;
            }
        }
    } return arrFinal;
};
console.log(descendArr([13, 11, 15, 5, 6, 1, 8, 12]));

/* 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/
function sumEvenOde(arrZumHundert) {
    arrEven = [];
    var sum = 0;
    for (var i = 1; i < 1000; i++) {
        if (arrZumHundert[i] % 2 === 0) {
            arrEven[arrEven.length] = arrZumHundert[i];
            sum = arrEven[arrEven.length]++;
        }
    } return sum;
};
console.log(sumEvenOde());

/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/
function pickLetter(arrLong) {
    var arrTwo = '';
    var tmp;
    for (var i = 0; i < arrLong.length; i++) {
        if (arrLong[i].length >= 2 && typeof (arrLong[i]) === "string") {
            tmp = arrLong[i];
            arrTwo = arrTwo + tmp[0] + tmp[1];
        }
        else {
            continue;
        }
    } return arrTwo;
}
console.log(pickLetter(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));
/* 9.Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/
function combineNum(num1, num2) {
    finalArray = [];
    additionArray = [];
    for (var i = num1; i < num2; i++) {
        for (var j = i + 1; j < num2 + 1; j++) {
            if (i !== j) {
                additionArray[additionArray.length] = i;
                additionArray[additionArray.length] = j;
                finalArray[finalArray.length] = additionArray;
                additionArray = [];

                additionArray[additionArray.length] = j;
                additionArray[additionArray.length] = i;
                finalArray[finalArray.length] = additionArray;
                additionArray = [];
            }
        }
    }
    return finalArray;
}
console.log(combineNum(1, 7));
/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
*/
function findPrime(num) {
    var result = true;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return !result;
        }
    } return result;
};
console.log(findPrime(73));
/* 11.
Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/
function findPalidrom(input) {
    var words = true;
    var spacesOut = function (sentence) {
        var letters = "";
        for (var i = 0; i < sentence.length; i++) {
            if (sentence[i] === " ") {
                continue;
            }
            else {
                letters += sentence[i];
            }
        } return letters;
    }
    var finalArray = spacesOut(input);
    for (var i = 0, j = finalArray.length - 1; i < finalArray.length / 2; i++ , j--) {
        if (finalArray[i] === finalArray[j]) {
            continue;
        }
        else {
            return !words;
        }
    } return words;
};
console.log(findPalidrom('eye'));
console.log(findPalidrom('Geek'));
console.log(findPalidrom('a nut for a jar of tuna'));
/* 12. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/
function findGdivisor(num1, num2) {
    var tmp;
    for (var i = 0; i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            tmp = i;
        }
    } return tmp;
};
console.log(findGdivisor(81, 9));