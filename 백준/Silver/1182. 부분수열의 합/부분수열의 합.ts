// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 줄에서 N과 S 값 추출
const [N, S] = input[0].split(" ").map(Number);

// 두 번째 줄에서 수열 배열 추출
const numbers: number[] = input[1].split(" ").map(Number);

// 결과를 저장할 변수
let count: number = 0;

// 재귀 함수로 부분수열을 탐색
function findSubsequences(index: number, currentSum: number) {
    // 기저 조건: 마지막 원소까지 탐색했을 경우
    if (index === N) {
        // 부분수열이 공집합이 아닌 경우에만 확인
        if (currentSum === S) {
            count++;
        }
        return;
    }

    // 현재 index의 숫자를 포함하지 않는 경우
    findSubsequences(index + 1, currentSum);

    // 현재 index의 숫자를 포함하는 경우
    findSubsequences(index + 1, currentSum + numbers[index]);
}

// 공집합을 제외하고 카운트하기 위해 S가 0일 때는 공집합을 제외
if (S === 0) {
    count--;
}

// 부분수열 탐색 시작
findSubsequences(0, 0);

// 결과 출력
console.log(count);