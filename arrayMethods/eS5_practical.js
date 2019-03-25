// 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: 'hello', 'there', 'ES', 6
// Output: 'Hello', 'There', 'ES'
// const transform = (...allArguments) => {
//    const strings = allArguments.filter(element => typeof element === 'string');
//    const upper = strings.map(element => (`${element.chartAt(0).toUpperCase()}${element.slice(1)}`));
//     // console.log(strings);
//     console.log(upper);
//         // .map(element => `${element[0].toUpperCase()}${element.slice(1)}`
// };
// const res = transform('es', 'there', 'hello', 6);
// console.log(res)

// -----------------------
// function capitalize(arr) {

//      let word = '';
//      arr.forEach((item, index) => {
//          if (typeof item == 'string') {
//              let a = item[0].toUpperCase();
//              let b = item.substring(1);
//              word += a + b + ' ';
//          }
//      });
//      return word;
//  }

//  console.log(capitalize(["hello", "there", "ES", 6]));


// 2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// Input: 120
// Output: 24

// const findTax = price => price *0.2
// findTax(120);
// ---------------------
// {
//      const texRate = 0.2;
//       let saleTax = price * texRate;
//     return saleTax;
// };  
// ------------------------
// console.log(findTax(120));

// ----------------
// ((price) => {
//      const tax = 0.2;
//      let c = price * tax;
//      console.log(c);
//  })(100);

// 3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]
// function increseArr(arr, n = 1){
//      let newArr = [];

//      arr.forEach((item) => {
//           newArr.push(item + n);
//      });

//      return newArr;

//      };


// console.log(increseArr([4, 6, 11, -9, 2.1], 2))

// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

// function filterEven(arr){
//      let newArr = arr.filter((n) => {
//           return n % 2 ===0;
//      });
//      return newArr

// };
// console.log(filterEven([6, 11, 9, 0, 3]));

// 5.Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// Output: ['babel.js, 'JS standard']

// function filterString(arr){
//      let newArr = arr.filter((args) => {
//           return args.includes('js') + args.includes('JS');
//      })
//      return newArr;
// }
// console.log(filterString(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));

// 6. Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]
// function filterInteger(arr){
//      let newArr = arr.filter((num) => {
//           return Number.isInteger(num);
//      })     
//      return newArr;
// }
// console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));
// 7. Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// Output: [45, 553]

function filterFive(arr) {
     let newArray = arr.filter(e => e.toString().includes('5'));

     return newArray
};
console.log(filterFive([23, 11.5, 9, 'abc', 45, 28, 553]));

// 8.Write a function that returns indexes of the elements greater than 10. 
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: 1, 2, 5

function filterGreater(arr) {

     let newArrayNow = [];
     arr.forEach((item, index) => {
          if (item > 10) {
               newArrayNow += arr.indexOf(item);
          }
     });
     return newArrayNow.split('') + '';
};
console.log(filterGreater([1.6, 11.34, 29.23, 7, 3.11, 18]));
// 9.a.Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals.
// b.Write a function that prints out the names of persons older than 25. 
// c.Write a function that check if there is a person older than 40.
// d.Write a function that checks if all persons are older than 20. 


// 10.Write a function that checks if the given array is an array of positive integer values. 
// Input: [3, 11, 9, 5, 6]
// Output: yes

// Input: [3, -12, 4, 11]
// Output: no 


// 11.Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48

// 12.Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8
