// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 개수
const T = Number(input[0]);

// 결과 저장용 배열
const results: string[] = [];

let line = 1;

for (let t = 0; t < T; t++) {
  const p = input[line++];
  const n = Number(input[line++]);
  const arrStr = input[line++];

  // 입력 배열 파싱
  let arr: number[] = [];
  if (n > 0) {
    arr = JSON.parse(arrStr);
  }

  let isReversed = false; // R 명령에 따라 뒤집혔는지 여부
  let front = 0;          // 배열의 앞 인덱스
  let back = n - 1;       // 배열의 뒤 인덱스
  let isError = false;

  for (const cmd of p) {
    if (cmd === 'R') {
      isReversed = !isReversed; // 방향 전환
    } else if (cmd === 'D') {
      if (front > back) {
        isError = true;
        break;
      }
      isReversed ? back-- : front++;
    }
  }

  if (isError) {
    results.push("error");
  } else {
    const sliced = arr.slice(front, back + 1);
    const finalArr = isReversed ? sliced.reverse() : sliced;
    results.push(`[${finalArr.join(",")}]`);
  }
}

// 결과 출력
console.log(results.join("\n"));