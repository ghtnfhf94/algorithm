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
  answer = arr.reduce((acc, val) => acc + val);
  return money < answer ? answer - money : 0;
}

solution(3, 20, 4);
