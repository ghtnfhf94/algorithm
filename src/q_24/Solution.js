function solution(sizes) {
  var answer = 0;

  let w = 0;
  let h = 0;

  let newArr = sizes.sort((arr1, arr2) => {
    return arr2.sort((a, b) => b - a)[0] - arr1.sort((a, b) => b - a)[0];
  });

  w = newArr[0][0];
  h = newArr[0][1];

  newArr.forEach((item) => {
    if (h < item[1]) {
      h = item[1];
    }
  });

  console.log(w * h);
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
