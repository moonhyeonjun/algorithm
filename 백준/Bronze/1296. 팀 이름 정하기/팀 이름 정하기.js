// 파일 입력 처리
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const yeonduName = input[0];  // 연두의 이름
const N = Number(input[1]);   // 팀 이름 후보 개수
const teamNames = input.slice(2, 2 + N); // 팀 이름 목록

// 특정 문자 개수를 세는 함수
function countChar(str, char) {
    return [...str].filter(c => c === char).length;
}

// 확률 계산 함수
function calcWinRate(name, team) {
    const fullName = name + team;
    const L = countChar(fullName, "L");
    const O = countChar(fullName, "O");
    const V = countChar(fullName, "V");
    const E = countChar(fullName, "E");

    return ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;
}

// 우승 확률이 가장 높은 팀 찾기
const bestTeam = teamNames
    .map(team => ({ team, rate: calcWinRate(yeonduName, team) })) // 팀별 확률 계산
    .sort((a, b) => b.rate - a.rate || a.team.localeCompare(b.team)) // 확률 높은 순 정렬, 동률이면 사전순
    [0].team;

console.log(bestTeam);