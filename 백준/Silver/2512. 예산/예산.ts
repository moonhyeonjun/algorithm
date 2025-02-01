// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 파싱
const N: number = Number(input[0]);  // 지방 수
const budgets: number[] = input[1].split(" ").map(Number);  // 요청 예산 리스트
const M: number = Number(input[2]);  // 총 예산

// 이분 탐색을 위한 범위 설정
let left = 1;
let right = Math.max(...budgets);
let answer = 0;

// 이분 탐색 수행
while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // 현재 mid를 상한선으로 했을 때 배정된 예산 총합 계산
    const totalAllocated = budgets.reduce((sum, budget) => sum + Math.min(budget, mid), 0);

    if (totalAllocated <= M) {
        answer = mid;  // 가능한 상한액 갱신
        left = mid + 1;  // 더 큰 값 탐색
    } else {
        right = mid - 1;  // 더 작은 값 탐색
    }
}

// 최적 상한액 출력
console.log(answer);