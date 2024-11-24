// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터를 처리
const N: number = parseInt(input[0]); // 높이의 개수
const heights: number[] = input[1].split(" ").map(Number); // 높이 배열

// 가장 큰 오르막길 크기를 저장할 변수
let maxUphill: number = 0; // 초기값은 0
let currentUphill: number = 0; // 현재 오르막길의 크기를 저장

// 높이 배열을 순회하며 오르막길 크기 계산
for (let i = 1; i < N; i++) {
    if (heights[i] > heights[i - 1]) {
        // 높이가 이전보다 증가하면 오르막길 크기를 누적
        currentUphill += heights[i] - heights[i - 1];
    } else {
        // 높이가 감소하거나 같아지면, 현재 오르막길 크기 비교 및 초기화
        maxUphill = Math.max(maxUphill, currentUphill);
        currentUphill = 0; // 초기화
    }
}

// 마지막 오르막길까지 고려하여 최대값 갱신
maxUphill = Math.max(maxUphill, currentUphill);

// 결과 출력
console.log(maxUphill);