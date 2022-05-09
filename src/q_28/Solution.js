function solution(s) {
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (i != 0) {
      if (s.charAt(i) == stack.peek()) {
        stack.pop();
        continue;
      }
    }
    stack.push(s.charAt(i));
  }
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
  size() {
    return this.arr.length;
  }
  toString() {
    return this.arr.join("");
  }
}

solution("cdcd");
