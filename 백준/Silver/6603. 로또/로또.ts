// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");


// 6개의 수를 선택하여 조합을 생성하는 함수
function generateCombinations(arr: number[], start: number, combination: number[]) {
    // 조합이 6개가 된 경우 출력
    if (combination.length === 6) {
        console.log(combination.join(" "));
        return;
    }

    // 주어진 범위 내에서 숫자를 선택하여 조합을 만든다
    for (let i = start; i < arr.length; i++) {
        combination.push(arr[i]);
        generateCombinations(arr, i + 1, combination);
        combination.pop(); // 백트래킹
    }
}

// 테스트 케이스 처리
let firstTestCase = true;

input.forEach(line => {
    const numbers = line.split(" ").map(Number);
    const k = numbers[0];

    // 0이 입력된 경우 종료
    if (k === 0) return;

    const S = numbers.slice(1); // S 집합을 가져옴

    if (!firstTestCase) {
        console.log(""); // 각 테스트 케이스 사이에 빈 줄 출력
    }

    // 조합 생성 및 출력
    generateCombinations(S, 0, []);
    firstTestCase = false;
});