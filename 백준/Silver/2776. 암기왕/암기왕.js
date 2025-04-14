// 파일 입력 처리
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let line = 0;
const T = Number(input[line++]); // 테스트케이스 수

for (let t = 0; t < T; t++) {
  const n = Number(input[line++]); // 수첩1 숫자 수
  const note1 = input[line++].split(" ").map(Number); // 수첩1 숫자 목록
  const m = Number(input[line++]); // 수첩2 숫자 수
  const note2 = input[line++].split(" ").map(Number); // 수첩2 숫자 목록

  // Set을 사용하여 note1의 숫자를 저장
  const noteSet = new Set(note1);

  // note2에 있는 숫자가 noteSet에 존재하는지 여부를 확인
  const result = note2.map((num) => (noteSet.has(num) ? "1" : "0"));

  // 결과 출력
  console.log(result.join("\n"));
}