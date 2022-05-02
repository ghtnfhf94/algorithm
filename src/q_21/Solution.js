function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const num = numbers[i] + numbers[j];
      answer.indexOf(num) == -1 && answer.push(num);
    }
  }

  const a = answer.sort((a, b) => {
    return a - b;
  });

  console.log(a);
}

function solution2(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const num = numbers[i] + numbers[j];
      answer.push(num);
    }
  }

  const a = [...new Set(answer)];

  console.log(a.sort((a, b) => a - b));
}

solution([5, 0, 2, 7]);
solution2([5, 0, 2, 7]);
