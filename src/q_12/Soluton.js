function solution(a, b) {
  console.log(a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0));
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
