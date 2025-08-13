const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const a = fs.readFileSync(path, "utf8").trim().split(/\s+/).map(Number);

let p = 0;
const k = a[p++];
const ans: string[] = [];

for (let t = 0; t < k; t++) {
  const v = a[p++], e = a[p++];
  const g: number[][] = Array.from({ length: v + 1 }, () => []);
  for (let i = 0; i < e; i++) {
    const u = a[p++], w = a[p++];
    g[u].push(w);
    g[w].push(u);
  }
  const c = new Int8Array(v + 1);
  let ok = true;

  for (let i = 1; i <= v && ok; i++) {
    if (c[i]) continue;
    c[i] = 1;
    const q: number[] = [i];
    let h = 0;
    while (h < q.length && ok) {
      const x = q[h++];
      for (const y of g[x]) {
        if (!c[y]) {
          c[y] = -c[x];
          q.push(y);
        } else if (c[y] === c[x]) {
          ok = false;
          break;
        }
      }
    }
  }
  ans.push(ok ? "YES" : "NO");
}

console.log(ans.join("\n"));