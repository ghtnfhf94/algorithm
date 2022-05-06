function solution(numbers, hand) {
  let answer = "";
  const lArr = [1, 4, 7];
  const rArr = [3, 6, 9];

  let lPosition = 10;
  let rPosition = 12;

  numbers.forEach((num, index) => {
    const target = num == 0 ? 11 : num;
    if (lArr.includes(target)) {
      lPosition = target;
      answer += "L";
    } else if (rArr.includes(target)) {
      rPosition = target;
      answer += "R";
    } else {
      const leftLen = getLen(lPosition, target, "left");
      const rightLen = getLen(rPosition, target, "right");

      if (leftLen == rightLen) {
        hand == "right" ? (rPosition = target) : (lPosition = target);
        answer += hand == "right" ? "R" : "L";
      } else if (leftLen < rightLen) {
        lPosition = target;
        answer += "L";
      } else {
        rPosition = target;
        answer += "R";
      }
    }
  });

  console.log(answer);
}

function getLen(position, num, hand) {
  if (position % 3 == 2) {
    return Math.abs(position - num) / 3;
  } else {
    if (hand == "left") {
      return Math.abs(position + 1 - num) / 3 + 1;
    } else {
      return Math.abs(position - 1 - num) / 3 + 1;
    }
  }
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
