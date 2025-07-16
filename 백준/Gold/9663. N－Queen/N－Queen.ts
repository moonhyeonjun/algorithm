const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim();

const n = Number(input);
let cnt = 0;

const solve = (r: number, col: boolean[], diag1: boolean[], diag2: boolean[]) => {
  if (r === n) {
    cnt++;
    return;
  }

  for (let c = 0; c < n; c++) {
    const d1 = r + c;
    const d2 = r - c + n - 1;
    if (col[c] || diag1[d1] || diag2[d2]) continue;

    col[c] = diag1[d1] = diag2[d2] = true;
    solve(r + 1, col, diag1, diag2);
    col[c] = diag1[d1] = diag2[d2] = false;
  }
};

solve(0, Array(n).fill(false), Array(2 * n - 1).fill(false), Array(2 * n - 1).fill(false));
console.log(cnt);