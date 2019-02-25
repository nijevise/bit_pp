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