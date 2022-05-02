function solution(n) {
  var target = 3;

  let answer = 0;

  while (target++) {
    if (n % target == 1) {
      answer = target;
      break;
    }
  }

  console.log(answer);

  //   return answer;
}

solution(10);
