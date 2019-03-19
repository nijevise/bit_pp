// Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: 'hello', 'there', 'ES', 6
// Output: 'Hello', 'There', 'ES'
const transform = (...allArguments) => {
    allArguments
        .filter(element => typeof element === 'string')
        .map(element => `${element[0].toUpperCase()}${element.slice(1)}`
}
const res = transform('es', 'there', 'hello', 6);
console.log(res)
