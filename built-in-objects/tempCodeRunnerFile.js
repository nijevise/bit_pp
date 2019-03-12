function spliceString(stringPad, stringNoPadding, side) {
    var newNumber = "";
    if (stringPad.length > stringNoPadding.length) {
        if (side === "l") {
            newNumber += stringPad.splice(1, stringNoPadding.length, stringNoPadding);
            console.log(newNumber);
        }

    } return newNumber;
}
console.log(spliceString('0000', 123, 'l'));