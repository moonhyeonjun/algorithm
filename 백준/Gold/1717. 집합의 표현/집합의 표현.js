const readline = require("readline");

// readline 인터페이스 설정
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

// 입력 라인마다 저장
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});

function solution(input) {
    const [N, M] = input.shift().split(" ").map(Number); // N: 원소 개수, M: 연산 개수
    const queries = input.map(line => line.split(" ").map(Number)); // 연산 목록

    // 부모 노드를 저장하는 배열 (초기에는 -1로 모두 자기 자신이 루트)
    const parents = new Array(N + 1).fill(-1);

    /**
     * 특정 원소의 대표(루트)를 찾는 함수
     * - 경로 압축을 사용하여 효율적으로 처리
     */
    function find(x) {
        if (parents[x] < 0) return x;
        parents[x] = find(parents[x]); // 재귀적으로 루트를 찾아 경로 압축
        return parents[x];
    }

    /**
     * 두 원소가 속한 집합을 합치는 함수
     */
    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parents[rootX] = rootY; // rootX를 rootY에 연결
        }
    }

    const answer = [];

    // 연산 처리
    queries.forEach(([type, a, b]) => {
        if (type === 0) {
            union(a, b); // 합집합 연산
        } else {
            // 같은 집합인지 확인
            answer.push(find(a) === find(b) ? "YES" : "NO");
        }
    });

    // 결과 출력
    console.log(answer.join("\n"));
}