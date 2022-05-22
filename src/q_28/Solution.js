function solution(s) {
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (stack.peek() == s.charAt(i)) {
      stack.pop();
      continue;
    }
    stack.push(s.charAt(i));
  }
  const result = stack.toString() == "" ? 1 : 0;
  console.log(stack.toString());
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
  toString() {
    return this.arr.join("");
  }
}

solution("cdcd");
