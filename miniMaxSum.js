/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/

function miniMaxSum(arr) {
  if (arr.length > 5) {
    console.log(
      `O máximo são 5 elementos. Exclua ${arr.length - 5} elementos.`
    );
    return;
  }
  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  let mini = 0;
  let max = 0;

  for (let counter = 0; counter < arr.length - 1; counter++) {
    mini += arr[counter];
  }

  for (let counter = arr.length - 1; counter >= 1; counter--) {
    max += arr[counter];
  }

  console.log(`${mini} ${max}`);
}

miniMaxSum([1, 3, 5, 7, 9]);
