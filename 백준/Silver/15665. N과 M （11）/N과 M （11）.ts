// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = Array.from(new Set(input[1].split(" ").map(Number))).sort((a, b) => a - b); // 중복 제거 후 정렬
const seq: number[] = []; // 현재 수열
const output: string[] = []; // 결과 저장

function dfs(depth: number) {
  if (depth === M) {
    output.push(seq.join(" "));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    seq.push(nums[i]);
    dfs(depth + 1);
    seq.pop(); // 백트래킹
  }
}

dfs(0);
console.log(output.join("\n"));