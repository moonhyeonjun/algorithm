// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: number = parseInt(require("fs").readFileSync(filePath).toString().trim());

// dp 배열과 이전 값 추적을 위한 배열
const dp: number[] = new Array(input + 1).fill(0);
const prev: number[] = new Array(input + 1).fill(0);

// 동적 계획법을 이용하여 최소 연산 횟수 구하기
for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;
    prev[i] = i - 1;

    if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
        dp[i] = dp[i / 2] + 1;
        prev[i] = i / 2;
    }

    if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
        dp[i] = dp[i / 3] + 1;
        prev[i] = i / 3;
    }
}

// 연산 횟수 출력
console.log(dp[input]);

// 역추적을 통해 경로 출력
let path: number[] = [];
let current = input;
while (current !== 0) {
    path.push(current);
    current = prev[current];
}

console.log(path.join(" "));