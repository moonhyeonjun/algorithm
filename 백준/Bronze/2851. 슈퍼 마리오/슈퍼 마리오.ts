// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: number[] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

// 변수 선언
let sum = 0; // 현재까지의 점수 누적합
let closestSum = 0; // 100에 가장 가까운 누적합 저장

// 버섯 점수들을 순서대로 누적하며 합산
for (let i = 0; i < input.length; i++) {
    sum += input[i]; // 현재 버섯 점수를 누적

    // 100에 가까운 점수를 선택하기 위해 현재 누적합과 이전 가장 가까운 값을 비교
    if (Math.abs(100 - sum) <= Math.abs(100 - closestSum)) {
        closestSum = sum; // 더 가까운 값으로 업데이트
    }

    // 누적합이 100을 넘기면 반복문 종료 가능
    if (sum >= 100) break;
}

// 결과 출력
console.log(closestSum);