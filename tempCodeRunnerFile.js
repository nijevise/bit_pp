function sumEvenOde(arrZumHundert){
    arrEven = [];
    var sum = 0;
    for(var i = 1; i< 1000; i++){
        if(arrZumHundert[i]%2===0){
            arrEven[arrEven.length] = arrZumHundert [i];
            sum = arrEven[arrEven.length]++;
        }
    }return sum;
};
console.log(sumEvenOde());