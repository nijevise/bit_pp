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