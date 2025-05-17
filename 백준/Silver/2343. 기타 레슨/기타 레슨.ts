// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const [N, M] = input[0].split(" ").map(Number); // N: 강의 수, M: 블루레이 수
const lectures = input[1].split(" ").map(Number); // 강의 길이 배열

/**
 * 블루레이 크기(capacity)를 주었을 때
 * 주어진 강의들을 M개 이하의 블루레이로 나눌 수 있는지를 확인
 */
function isPossible(capacity: number): boolean {
    let count = 1; // 현재 블루레이 수 (최소 1개는 필요)
    let sum = 0;   // 현재 블루레이에 녹화된 강의의 총 시간

    for (const len of lectures) {
        // 한 강의가 블루레이 용량을 초과하면 불가능
        if (len > capacity) return false;

        if (sum + len > capacity) {
            // 현재 블루레이에 넣을 수 없다면 새 블루레이 시작
            count++;
            sum = len;
        } else {
            sum += len;
        }
    }

    return count <= M;
}

/**
 * 이분 탐색으로 가능한 최소 블루레이 크기 찾기
 */
function findMinCapacity(): number {
    let left = Math.max(...lectures);         // 최소 블루레이 크기 (가장 긴 강의)
    let right = lectures.reduce((a, b) => a + b, 0); // 최대 블루레이 크기 (전체 강의 합)

    let answer = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (isPossible(mid)) {
            answer = mid;        // 가능한 경우 저장하고 더 작은 값 탐색
            right = mid - 1;
        } else {
            left = mid + 1;      // 불가능한 경우 더 큰 값 탐색
        }
    }

    return answer;
}

// 결과 출력
console.log(findMinCapacity());