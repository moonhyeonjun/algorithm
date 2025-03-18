// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 후보자 수 (N)
const N: number = Number(input[0]);

// 기호 1번(다솜)의 초기 득표 수
let dasom: number = Number(input[1]);

// 다른 후보들의 득표 수 배열
const votes: number[] = input.slice(2).map(Number);

// 매수해야 할 최소 인원
let bribes = 0;

// 우선순위 큐(최대 힙)
votes.sort((a, b) => b - a); // 내림차순 정렬

// 다솜이가 최다 득표자가 될 때까지 반복
while (votes.length > 0 && votes[0] >= dasom) {
  // 가장 많은 표를 가진 후보의 표를 하나 빼앗음
  votes[0]--;
  dasom++;
  bribes++;

  // 다시 정렬 (최대값을 유지하기 위함)
  votes.sort((a, b) => b - a);
}

// 결과 출력
console.log(bribes);