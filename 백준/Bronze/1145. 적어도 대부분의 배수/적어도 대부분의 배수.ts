// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: number[] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

// 숫자 배열 초기화
const numbers: number[] = input;

// 최소값 탐색 함수
function findLeastCommonMultiple(nums: number[]): number {
    // 가장 작은 숫자부터 증가시키며 조건 만족 여부 확인
    for (let candidate = Math.min(...nums); ; candidate++) {
        // 나누어떨어지는 숫자의 개수 계산
        const divisibleCount = nums.filter(num => candidate % num === 0).length;
        // 적어도 3개로 나누어 떨어지는 경우 반환
        if (divisibleCount >= 3) {
            return candidate;
        }
    }
}

// 결과 출력
console.log(findLeastCommonMultiple(numbers));