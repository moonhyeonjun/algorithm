const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);

let result: number[] = [];
let visited: boolean[] = new Array(N).fill(false);

const dfs = (cnt: number, idx: number): void => {
  if (cnt === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = idx; i < N; i++) {
    result[cnt] = i + 1;
    dfs(cnt + 1, i);
  }
};

dfs(0, 0);