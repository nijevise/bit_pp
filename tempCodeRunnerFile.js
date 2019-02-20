var myString = "My random string";
function convertStringToArray(inputString) {
    newArrayLetters = [];
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === ' ') {
            newArrayLetters[newArrayLetters.length] = null;
        } else {
            newArrayLetters[newArrayLetters.length] = inputString[i]
        }

    }
    return newArrayLetters;
};
console.log(convertStringToArray(myString));