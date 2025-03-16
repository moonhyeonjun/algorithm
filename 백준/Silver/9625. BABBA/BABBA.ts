// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const N: number = parseInt(input);

function babba(k: number): void {
  let a = 0,
    b = 1; // 초기값 설정 (K=1일 때)

  for (let i = 1; i < k; i++) {
    const temp = b; // 기존 B 값을 저장
    b = a + b; // 새로운 B는 이전 A + B
    a = temp; // 새로운 A는 이전 B 값
  }

  console.log(`${a} ${b}`);
}

babba(N);