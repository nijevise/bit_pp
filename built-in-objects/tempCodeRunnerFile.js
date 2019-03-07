
var number = [3, 4, 6, 7, 2, 9, 0]


for (var i = 0; i < number.length; i++) {
    var newPosition = Math.round(Math.random() * (number.length - 1))

    var tmp = number[newPosition];
    number[newPosition] = number[i];
    number[i] = tmp
}


console.log(number)
