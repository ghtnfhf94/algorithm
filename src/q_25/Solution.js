function solution(nums) {
  const arr = [];
  const num = nums.length / 2;

  const set = new Set(nums);

  console.log(set.size < num ? set.size : num);

  //   return answer;
}

solution([3, 3, 3, 2, 2, 2]);
