function solution(n) {
  console.log(parseInt(n.toString(3).split("").reverse().join(""), 3));
  console.log(parseInt([...n.toString(3)].reverse().join(""), 3));
}

solution(125);
