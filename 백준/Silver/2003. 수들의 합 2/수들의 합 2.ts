// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫째 줄에서 N과 M을 가져옴
const [N, M] = input[0].split(' ').map(Number);
// 둘째 줄에서 수열 A를 가져옴
const A = input[1].split(' ').map(Number);

// 두 포인터 및 합, 경우의 수 초기화
let start = 0;
let end = 0;
let sum = 0;
let count = 0;

// 투 포인터를 사용하여 합이 M이 되는 경우를 찾음
while (end <= N) {
    if (sum >= M) {
        // 현재 부분 합이 M 이상이면 start 포인터를 이동시키며 합을 줄임
        sum -= A[start];
        start++;
    } else if (end < N) {
        // 부분 합이 M보다 작으면 end 포인터를 이동시키며 합을 키움
        sum += A[end];
        end++;
    } else {
        // end 포인터가 N에 도달했을 경우 종료
        break;
    }

    // 부분 합이 정확히 M일 때 경우의 수를 증가
    if (sum === M) {
        count++;
    }
}

// 결과 출력
console.log(count);