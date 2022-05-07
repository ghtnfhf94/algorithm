function solution(w, h) {
  var answer = 1;
  const total = w * h;
  const long = w < h ? h : w;
  const short = w < h ? w : h;
  const num = Math.ceil(long / short);
  const cutNum = short * num;
  console.log(total - cutNum);

  //   return answer;
}

solution(3,2);
