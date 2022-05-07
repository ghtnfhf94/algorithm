function solution(w, h) {
  var answer = 1;
  const total = w * h;
  const long = w < h ? h : w;
  const short = w < h ? w : h;
  const num = Math.ceil(long / short);
  const cutNum = short * num;
  return total - cutNum;

  //   return answer;
}

function gcd(w, h) {
  const mod = w % h;
  if (mod === 0) {
    return h;
  }
  return gcd(h, mod);
}

function solution2(w, h) {
  const gcdVal = gcd(w, h);
  return w * h - (w + h - gcdVal);
}

// solution(10,11);
// solution2(10,11);

function diff() {
  for (let i = 1; i < 100; i++) {
    for (let j = 1; j < 100; j++) {
      if (solution(i, j) == solution2(i, j)) {
        continue;
      } else {
        console.log(`i : ${i} || j : ${j}`);
        console.log(`1 : ${solution(i, j)} || 2 : ${solution2(i, j)}`);
        break;
      }
    }
  }
}

diff();
