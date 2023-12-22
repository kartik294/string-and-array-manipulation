// Given an array containing numbers from 1 to N, with one number missing, find the missing number.
function MissingNumber(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum - arrSum;
}

console.log(MissingNumber([1, 2, 3, 5]));
