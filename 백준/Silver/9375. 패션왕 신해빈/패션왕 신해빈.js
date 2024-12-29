const fs = require("fs");

// 파일 입력 및 초기 데이터 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

// 테스트 케이스의 개수
const testCaseCount = Number(input[0]);

// 결과 저장을 위한 배열
const results = [];

// 입력 데이터 처리
let index = 1;
for (let t = 0; t < testCaseCount; t++) {
  const n = Number(input[index]); // 의상의 수
  index++;

  const clothingMap = new Map();

  // 의상 데이터 처리
  for (let i = 0; i < n; i++) {
    const [name, category] = input[index].split(" ");
    index++;

    // 의상 종류별 카운트를 증가
    clothingMap.set(category, (clothingMap.get(category) || 0) + 1);
  }

  // 조합 계산
  let combinations = 1; // 최소 1가지 경우 (각 종류의 의상을 입지 않는 경우 포함)
  for (const count of clothingMap.values()) {
    combinations *= (count + 1); // 각 종류에서 '입지 않음'을 추가로 고려
  }

  results.push(combinations - 1); // 알몸인 경우를 제외
}

// 결과 출력
console.log(results.join("\n"));