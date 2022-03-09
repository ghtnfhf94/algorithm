function solution(lottos, win_nums) {
    var answer = [];
    let zeroNum = 0;
    let equalNum = 0;
    lottos.forEach((item) => {
        if(item == 0) {
            zeroNum++;
        } else if (win_nums.includes(item)) {
            equalNum++;
        }
    })
    answer = [getResult(equalNum + zeroNum), getResult(equalNum)];
    console.log(answer);
}

const getResult = (target) => {
    if(target == 6) return 1;
    else if(target == 5) return 2;
    else if(target == 4) return 3;
    else if(target == 3) return 4;
    else if(target == 2) return 5;
    else return 6;
}