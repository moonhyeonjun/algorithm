// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number); // 첫 번째 줄에서 N과 M 추출
const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b); // 두 번째 줄에서 숫자 배열 추출 및 정렬

const result: number[][] = []; // 결과를 저장할 배열

// 백트래킹 함수 정의
const backtrack = (start: number, path: number[]) => {
  // 종료 조건: path의 길이가 M이면 결과에 추가
  if (path.length === M) {
    result.push([...path]);
    return;
  }

  // start부터 순회하며 백트래킹 수행
  for (let i = start; i < N; i++) {
    path.push(numbers[i]); // 현재 숫자를 path에 추가
    backtrack(i + 1, path); // 다음 인덱스로 이동하여 재귀 호출
    path.pop(); // 재귀 호출 후 현재 숫자를 제거하여 상태 복원
  }
};

// 백트래킹 시작
backtrack(0, []);

// 결과 출력
console.log(result.map(seq => seq.join(" ")).join("\n"));