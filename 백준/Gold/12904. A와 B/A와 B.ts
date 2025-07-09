const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const S = input[0];
let T = input[1];

// T를 S로 만들 수 있는지 역방향으로 줄여나가는 방식
while (T.length > S.length) {
  const last = T[T.length - 1];

  if (last === 'A') {
    // A면 그냥 제거
    T = T.slice(0, -1);
  } else if (last === 'B') {
    // B면 제거하고 문자열을 뒤집음
    T = T.slice(0, -1).split('').reverse().join('');
  }
}

// 최종 결과가 S와 같으면 1, 아니면 0
console.log(T === S ? 1 : 0);