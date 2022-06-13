function solution(numbers) {
  let answer = 0;
  const arr = numbers.split("");
    
  return answer;
}

const checkDecimal = (num) => {
  if (num <= 1) {
    return false;
  } else if (num == 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
};

solution("17");
