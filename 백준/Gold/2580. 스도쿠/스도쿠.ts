const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "run/input.txt", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.trim().split(/\s+/).map(Number));

const N = 9;
const grid: number[][] = Array.from({ length: N }, (_, r) => input[r].slice());
const rowMask: number[] = Array(N).fill(0);
const colMask: number[] = Array(N).fill(0);
const boxMask: number[] = Array(N).fill(0);

const bit = (v: number) => 1 << v;

type Pos = { r: number; c: number };
const empties: Pos[] = [];

const boxIndex = (r: number, c: number) => Math.floor(r / 3) * 3 + Math.floor(c / 3);

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    const v = grid[r][c];
    if (v === 0) {
      empties.push({ r, c });
    } else {
      const b = boxIndex(r, c);
      rowMask[r] |= bit(v);
      colMask[c] |= bit(v);
      boxMask[b] |= bit(v);
    }
  }
}

const FULL_MASK = 0x3fe;

const lowbit = (x: number) => x & -x;

function selectNextIndex(): { idx: number; candidates: number } {
  let bestIdx = -1;
  let bestCount = 10;
  let bestMask = 0;
  for (let i = 0; i < empties.length; i++) {
    const { r, c } = empties[i];
    if (grid[r][c] !== 0) continue;
    const mask = FULL_MASK & ~(rowMask[r] | colMask[c] | boxMask[boxIndex(r, c)]);
    if (mask === 0) return { idx: i, candidates: 0 };
    const cnt = popcount(mask);
    if (cnt < bestCount) {
      bestCount = cnt;
      bestIdx = i;
      bestMask = mask;
      if (cnt === 1) break;
    }
  }
  return { idx: bestIdx, candidates: bestMask };
}

function popcount(x: number): number {
  x = x - ((x >>> 1) & 0x55555555);
  x = (x & 0x33333333) + ((x >>> 2) & 0x33333333);
  return (((x + (x >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24;
}

function dfs(remaining: number): boolean {
  if (remaining === 0) return true;
  const { idx, candidates } = selectNextIndex();
  if (idx === -1) return false;
  if (candidates === 0) return false;
  const { r, c } = empties[idx];
  const b = boxIndex(r, c);
  let choiceMask = candidates;
  while (choiceMask) {
    const pickBit = lowbit(choiceMask);
    choiceMask -= pickBit;
    const val = bitToValue(pickBit);
    grid[r][c] = val;
    rowMask[r] |= pickBit;
    colMask[c] |= pickBit;
    boxMask[b] |= pickBit;
    if (dfs(remaining - 1)) return true;
    grid[r][c] = 0;
    rowMask[r] &= ~pickBit;
    colMask[c] &= ~pickBit;
    boxMask[b] &= ~pickBit;
  }
  return false;
}

function bitToValue(bitMask: number): number {
  let v = 0;
  while (bitMask > 1) {
    bitMask >>= 1;
    v++;
  }
  return v;
}

const remaining = empties.length;
dfs(remaining);
const out = grid.map((row) => row.join(" ")).join("\n");
console.log(out);