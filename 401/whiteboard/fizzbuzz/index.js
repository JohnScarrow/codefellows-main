'use strict';

for(var i = 1; i < 100; i ++){
  if (Number.isInteger(i / 15)) {
    var answer = 'fuzzbuzz';
  }else  if (Number.isInteger(i / 3)){
    var answer = 'fuzz';
  } else if(Number.isInteger(i / 5)){
    var answer = 'buzz';
  }else{
    var answer = i;
  };
  console.log(answer);
}