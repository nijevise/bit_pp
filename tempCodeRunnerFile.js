var input = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
function countInteger(bigStr){
    var smallStr = '';
    var numberInteger;
    for (var i = 0; i < bigStr.length; i++){
      smallStr += bigStr[i] ;
      numberInteger = parseInt(smallStr);
       
    } return numberInteger
};
var res = countInteger(input);
console.log(countInteger(res));