const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const a = fs.readFileSync(path, "utf8").trim().split(/\s+/).map(Number);

const n = a[0];
const g: [number, number][][] = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < a.length; i += 3) {
  const [p, c, w] = [a[i], a[i + 1], a[i + 2]];
  g[p].push([c, w]);
  g[c].push([p, w]);
}

const dfs = (s: number): [number, number] => {
  const v = Array(n + 1).fill(false);
  let far = s,
    dist = 0;
  const stk: [number, number][] = [[s, 0]];

  while (stk.length) {
    const [cur, d] = stk.pop()!;
    if (v[cur]) continue;
    v[cur] = true;
    if (d > dist) {
      dist = d;
      far = cur;
    }
    for (const [nx, w] of g[cur]) {
      if (!v[nx]) stk.push([nx, d + w]);
    }
  }
  return [far, dist];
};

const [f1] = dfs(1);
const [, ans] = dfs(f1);
console.log(ans);