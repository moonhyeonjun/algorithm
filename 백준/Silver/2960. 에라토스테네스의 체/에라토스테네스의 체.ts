// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

// N과 K 값 초기화
const N: number = parseInt(input[0]);
const K: number = parseInt(input[1]);

// 배열 초기화 및 소수 판별
const numbers: boolean[] = new Array(N + 1).fill(true); // true면 아직 지워지지 않은 상태
numbers[0] = numbers[1] = false; // 0과 1은 소수가 아님

let count: number = 0; // 지워진 수를 카운트
let result: number = -1; // K번째 지워진 수를 저장할 변수

// 에라토스테네스의 체 알고리즘 실행
for (let i = 2; i <= N; i++) {
  if (numbers[i]) {
    for (let j = i; j <= N; j += i) {
      if (numbers[j]) {
        numbers[j] = false; // 수를 지움
        count++;
        if (count === K) {
          result = j; // K번째로 지워진 수를 저장
          break;
        }
      }
    }
  }
  if (count === K) break; // K번째 수를 찾으면 종료
}

console.log(result);