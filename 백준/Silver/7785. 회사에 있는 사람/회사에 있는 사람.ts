// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄은 출입 기록의 수이므로 제거
input.shift();

// 회사에 남아있는 사람을 저장할 Map
let company = new Map();

// 각 출입 기록 처리
input.forEach((log) => {
    const [name, action] = log.split(" ");
    if (action === "enter") {
        company.set(name, true);  // 출근한 경우 Map에 추가
    } else if (action === "leave") {
        company.delete(name);     // 퇴근한 경우 Map에서 제거
    }
});

// 회사에 남아있는 사람들을 사전 역순으로 정렬
let result = Array.from(company.keys()).sort().reverse();

// 결과 출력
console.log(result.join("\n"));