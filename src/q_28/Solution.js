function solution(s) {
  var answer = -1;
  let str = s;

  while (true) {
    str = repeat(str);
    if (str == 1) {
      answer = 1;
      break;
    } else if (str == 0) {
      answer = 0;
      break;
    }
  }
  console.log(answer);
}

function repeat(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) == str.charAt(i + 1)) {
      const target = str.charAt(i) + str.charAt(i + 1);
      str = str.replaceAll(target, "");
      if (str == "") {
        return 1;
      } else {
        return str;
      }
    }
  }
  return 0;
}

class Stack {
  constructor() {
    this.arr = [];
  }
  push(item) {
    return this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
}

solution("cdcd");
