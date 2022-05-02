function solution(price, money, count) {
  var answer = -1;
  var arr = [];
  for (let i = 1; i <= count; i++) {
    if (i == 1) {
      arr.push(price);
    } else {
      arr.push(price * i);
    }
  }
  console.log(arr);

  console.log(arr.reduce((acc, val) => acc + val));

  return answer;
}

solution(3, 20, 4);
