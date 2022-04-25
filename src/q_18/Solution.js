function Solution(numbers, target) {
  let arr = init(numbers[0], numbers[1]);

  if (numbers.length > 2) {
    for (let i = 2; i < numbers.length; i++) {
      arr = getAllCalc(arr, numbers[i]);
    }
  }

  const result = arr.filter((item) => item == target);
  console.log(result.length);
}

function init(num1, num2) {
  return [num1 + num2, num1 - num2, -num1 + num2, -num1 - num2];
}

function getAllCalc(arr, num2) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + num2);
  }
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] - num2);
  }
  return newArr;
}

Solution([4, 1, 2, 1], 4);
