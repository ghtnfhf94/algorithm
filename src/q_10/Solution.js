function solution(numbers) {
  var answer = -1;
  const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(
    tmp
      .filter((num) => !numbers.includes(num))
      .reduce((prev, curr) => prev + curr, 0)
  );
}

solution([1, 2, 3]);
