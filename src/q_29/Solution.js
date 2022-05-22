function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const bridge = Array(bridge_length).fill(0);

  while (truck_weights.length != 0) {
    answer++;
    bridge.shift();
    const currentNum = bridge.filter((val) => val != 0).length;
    if (currentNum == bridge_length) {
      bridge.push(0);
      continue;
    }

    const currentSum = bridge.reduce((acc, curr) => acc + curr);
    if (currentSum + truck_weights[0] <= weight) {
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  answer += bridge_length;
  console.log(answer);
}

solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
