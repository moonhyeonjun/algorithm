// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 줄은 라운드 수
const N: number = parseInt(input[0]);

// 결과를 저장할 배열
const results: string[] = [];

// 각 라운드를 처리
for (let i = 0; i < N; i++) {
  // A의 딱지 정보
  const aInfo = input[2 * i + 1].split(" ").map(Number);
  const aCount = aInfo.slice(1); // 첫 값은 개수, 이후 값이 딱지 모양

  // B의 딱지 정보
  const bInfo = input[2 * i + 2].split(" ").map(Number);
  const bCount = bInfo.slice(1);

  // 모양별 개수를 저장 (4:★, 3:●, 2:■, 1:▲)
  const aShapes = [0, 0, 0, 0, 0];
  const bShapes = [0, 0, 0, 0, 0];

  // A의 딱지 카운트
  for (const shape of aCount) {
    aShapes[shape]++;
  }

  // B의 딱지 카운트
  for (const shape of bCount) {
    bShapes[shape]++;
  }

  // 딱지 비교 (4 > 3 > 2 > 1)
  let result = "D"; // 기본값은 무승부
  for (let j = 4; j >= 1; j--) {
    if (aShapes[j] > bShapes[j]) {
      result = "A";
      break;
    } else if (aShapes[j] < bShapes[j]) {
      result = "B";
      break;
    }
  }

  // 결과 저장
  results.push(result);
}

// 결과 출력
console.log(results.join("\n"));