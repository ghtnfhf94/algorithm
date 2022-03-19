const leftArr = [1, 4, 7];
const rightArr = [3, 6, 9];
const center = [2, 5, 8, 0];

function Solution(numbers, hand) {
  let answer = "";
  let lPosition, rPosition;
  numbers.forEach((number) => {
    const realNumber = number == 0 ? 11 : number;
    if (leftArr.includes(number)) {
      lPosition = number;
      answer += "L";
    } else if (rightArr.includes(number)) {
      rPosition = number;
      answer += "R";
    } else {
      const res = getDist(realNumber, lPosition, rPosition, hand);
      if (res == "L") {
        lPosition = realNumber;
      } else if (res == "R") {
        rPosition = realNumber;
      }
      answer += res;
    }
  });
  console.log(answer);
}

function getDist(number, lp, rp, hand) {
  const left = Math.abs(number - lp);
  const right = Math.abs(number - rp);
  if (left == right) {
    return getHandResult(hand);
  } else {
    return compareLen(number, lp, rp, hand);
  }
}

function compareLen(num, lp, rp, hand) {
  const left = getLen(lp, num, hand);
  const right = getLen(rp, num, hand);
  if (left > right) {
    return "R";
  } else if (left < right) {
    return "L";
  } else {
    return getHandResult(hand);
  }
}

function getLen(loca, num, hand) {
  if (center.includes(loca)) {
    return Math.abs(loca - num) / 3;
  } else {
    return Math.sqrt(1 + Math.pow(getHeight(loca, num, hand), 2));
  }
}

function getHeight(location, target, hand) {
  if (hand === "left") {
    return Math.abs((target - 1) / 3 - location / 3);
  } else if (hand === "right") {
    return Math.abs((target + 1) / 3 - location / 3);
  }
}

function getHandResult(hand) {
  return hand == "left" ? "L" : "R";
}

Solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
