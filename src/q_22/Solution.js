function solution(n) {
  var target = 3;

  let answer = 0;

  while (answer == 0) {
    if (n % target == 1) {
      answer = target;
      break;
    } else {
      target++;
    }
  }

  console.log(answer);

  //   return answer;
}

solution(10);
