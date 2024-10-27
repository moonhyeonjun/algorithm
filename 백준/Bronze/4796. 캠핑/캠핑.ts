// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let result = "";
let caseCount = 1;

// 각 테스트 케이스를 순회하면서 최대 캠핑장 사용 일수를 계산
for (let i = 0; i < input.length; i++) {
  // L, P, V 값을 숫자형으로 변환하여 가져오기
  const [L, P, V] = input[i].split(" ").map(Number);

  // 마지막 종료 조건인 "0 0 0"이 나오면 반복을 멈춤
  if (L === 0 && P === 0 && V === 0) break;

  // 최대 캠핑장 사용 일수 계산
  const fullPeriods = Math.floor(V / P);  // V일 중 P일 단위로 나눔
  const remainingDays = V % P;            // 남는 일수 계산

  // 캠핑장 사용 가능 일수 계산
  const maxCampingDays = (fullPeriods * L) + Math.min(remainingDays, L);

  // 결과 문자열에 포맷에 맞춰 추가
  result += `Case ${caseCount}: ${maxCampingDays}\n`;
  caseCount++;
}

// 결과 출력
console.log(result.trim());