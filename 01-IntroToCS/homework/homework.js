'use strict'
//Binario a Decimal
function BinarioADecimal(num) {
  // tu codigo aca
let sum = 0;
  for( let i = 0; i < num.length; i++ ) {
  sum += num[i] * 2  ** (num.length - 1 - i);
}
return sum ;

}
console.log(BinarioADecimal('10'));
console.log(BinarioADecimal('111'));


//Decimal a Binario
function DecimalABinario(num) {
  // tu codigo aca
  let result = '';
  let current = num;

  while (current){
    result += current % 2;
    current = Math.floor(current / 2);
  }
  
  return result.split('').reverse().join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}