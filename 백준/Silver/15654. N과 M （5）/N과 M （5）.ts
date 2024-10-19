// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// N, M 입력받기
const [N, M]: number[] = input[0].split(" ").map(Number);

// N개의 자연수를 입력받아 정렬
const numbers: number[] = input[1].split(" ").map(Number).sort((a, b) => a - b);

// 결과를 저장할 배열
const result: string[] = [];
// 방문 여부를 기록할 배열
const visited: boolean[] = new Array(N).fill(false);
// 수열을 저장할 배열
const selected: number[] = [];

// 백트래킹 함수 정의
function backtrack(depth: number) {
    // M개의 수열을 모두 선택했다면 결과에 추가
    if (depth === M) {
        result.push(selected.join(" "));
        return;
    }

    // 모든 숫자를 확인하며 선택
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            // 방문 체크
            visited[i] = true;
            selected.push(numbers[i]);

            // 재귀 호출을 통해 다음 숫자를 선택
            backtrack(depth + 1);

            // 백트래킹을 위해 상태 복원
            selected.pop();
            visited[i] = false;
        }
    }
}

// 백트래킹 시작
backtrack(0);

// 결과 출력
console.log(result.join("\n"));