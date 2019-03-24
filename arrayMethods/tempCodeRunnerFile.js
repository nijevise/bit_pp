function filterGreater(arr){

     let newArrayNow = [];
     arr.forEach((item,index) => {
          if(item > 10){
               newArrayNow += arr.indexOf(item);
          }
     });
     return newArrayNow.split('')+ '';
};
console.log(filterGreater([1.6, 11.34, 29.23, 7, 3.11, 18]));