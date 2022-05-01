function solution(record) {
  const map = {};
  const mapping = (map) => (id, name) => (map[id] = name);
  const change = mapping(map);

  record.forEach((item) => {
    const { method, id, name } = parsing(item);
    if (method == "Change" || method == "Enter") {
      change(id, name);
    }
  });

  record.forEach((item) => {
    const { method, id, name } = parsing(item);
    if (method == "Enter") {
      console.log(map[id] + "님이 들어왔습니다.");
    } else if (method == "Leave") {
      console.log(map[id] + "님이 나갔습니다.");
    }
  });
}

function parsing(item) {
  const arr = item.split(" ");
  return { method: arr[0], id: arr[1], name: arr[2] };
}

function idCheck(map, id, name) {
  if (map.hasOwnProperty(id)) {
    if (!(map[id] == name)) {
      map[id] = name;
    }
  } else {
    map[id] = name;
  }
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
