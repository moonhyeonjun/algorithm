// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 개수
const T: number = Number(input[0]);

// 결과를 저장할 배열
const results: number[] = [];

for (let i = 1; i <= T; i++) {
    let [M, N, x, y] = input[i].split(" ").map(Number);

    let found: boolean = false;

    // x를 기준으로 탐색 (x는 x, x+M, x+2M, ... 형태로 증가)
    for (let k = x; k <= M * N; k += M) {
        // k년에서 y가 일치하는지 확인
        if ((k - 1) % N + 1 === y) {
            results.push(k);
            found = true;
            break;
        }
    }

    // 유효한 k를 찾지 못한 경우
    if (!found) results.push(-1);
}

// 결과 출력
console.log(results.join("\n"));