function Solution() {
  const id_list = ["muzi", "frodo", "apeach", "neo"];
  const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ];
  const k = 2;

  var answer = new Array(id_list.length).fill(0);
  const reportIdArr = new Array(id_list.length).fill(new Array());
  let reportNumArr = new Array(id_list.length).fill(0);

  const arr = new Set(report);

  for (let item of arr) {
    const split = item.split(" ");

    reportIdArr[id_list.indexOf(split[0])] = [
      ...reportIdArr[id_list.indexOf(split[0])],
      split[1],
    ];
    reportNumArr[id_list.indexOf(split[1])] += 1;
  }

  const targetArr = id_list.filter((_, index) => reportNumArr[index] >= k);

  answer = reportIdArr.map((item) => {
    let num = 0;
    for (let i = 0; i < targetArr.length; i++) {
      if (item.includes(targetArr[i])) {
        num++;
      }
    }
    return num;
  });

  console.log(answer);
}

Solution();
