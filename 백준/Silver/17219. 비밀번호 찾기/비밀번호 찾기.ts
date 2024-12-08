// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const [n, m] = input[0].split(" ").map(Number); // N: 저장된 사이트 수, M: 찾으려는 사이트 수
const sitePasswordMap = new Map<string, string>();

// N개의 사이트와 비밀번호 입력 저장
for (let i = 1; i <= n; i++) {
  const [site, password] = input[i].split(" ");
  sitePasswordMap.set(site, password);
}

// M개의 사이트 주소에 대한 비밀번호 출력
const results: string[] = [];
for (let i = n + 1; i < n + 1 + m; i++) {
  const site = input[i];
  results.push(sitePasswordMap.get(site) as string); // 반드시 존재하는 사이트이므로 null 검사 불필요
}

// 결과 출력
console.log(results.join("\n"));