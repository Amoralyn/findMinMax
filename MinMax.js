function findMinMax (num){
    var min = num[0];
    var max = num[0];
    
for (var i = 1; i <num.length; i++){
    if (min > num[i]){
           min = num[i];
    }else if (max < num[i]){
        max = num[i];
        
    }
    }   
    
    if (min === max){
          return [min];
      }else{
          return [min, max];
              }
      }
      var num =[4, 66, 6, 44, 7, 78, 8, 68, 2];
console.log(findMinMax(num));