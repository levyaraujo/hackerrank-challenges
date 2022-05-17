/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.s*/

function plusMinus(arr) {
  let zero = 0;
  let positive = 0;
  let negative = 0;
  for (let i of arr) {
    if (Math.sign(i) == 0) {
      zero++;
    } else if (Math.sign(i) == 1) {
      positive++;
    } else {
      negative++;
    }
  }

  console.log((positive / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
