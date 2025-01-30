const fs = require("fs");

// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

// N과 M 할당
const N = input[0];
const M = input[1];
const numbers = input.slice(2).sort((a, b) => a - b);

const visited = Array(N).fill(false);
let ans = "";

// 백트래킹 함수
const bt = (selected) => {
  if (selected.length === M) {
    ans += selected.join(" ") + "\n";
    return;
  }

  let preNumber = -1;
  for (let i = 0; i < N; i++) {
    if (!visited[i] && preNumber !== numbers[i]) {
      visited[i] = true;
      bt([...selected, numbers[i]]);
      visited[i] = false;
      preNumber = numbers[i];
    }
  }
};

// 백트래킹 실행
bt([]);

// 결과 출력
console.log(ans);