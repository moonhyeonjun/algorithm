// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T: number = parseInt(input[0]);
const cases: string[] = input.slice(1);

// 팰린드롬 여부 확인 및 호출 횟수 계산 함수
function recursion(s: string, l: number, r: number, counter: { count: number }): number {
    counter.count += 1;
    if (l >= r) return 1;
    else if (s[l] !== s[r]) return 0;
    else return recursion(s, l + 1, r - 1, counter);
}

function isPalindrome(s: string): [number, number] {
    const counter = { count: 0 };
    const result = recursion(s, 0, s.length - 1, counter);
    return [result, counter.count];
}

// 결과 출력
const output: string[] = cases.map(testCase => {
    const [result, callCount] = isPalindrome(testCase);
    return `${result} ${callCount}`;
});

console.log(output.join("\n"));