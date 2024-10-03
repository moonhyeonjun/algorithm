// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// N과 M 값 추출
const [N, M] = input[0].split(' ').map(Number);

// 집합 S에 포함된 문자열을 Set으로 저장
const setS = new Set<string>();

for (let i = 1; i <= N; i++) {
    setS.add(input[i]);
}

// 검사할 문자열 중에 집합 S에 포함된 문자열의 개수 확인
let count = 0;
for (let i = N + 1; i <= N + M; i++) {
    if (setS.has(input[i])) {
        count++;
    }
}

// 결과 출력
console.log(count);