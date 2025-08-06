class MinHeap {
  heap: number[] = [];

  push(val: number) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p] <= val) break;
      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      i = p;
    }
  }

  pop(): number | undefined {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    let i = 0;
    while (true) {
      const l = 2 * i + 1, r = 2 * i + 2;
      let min = i;

      if (l < this.heap.length && this.heap[l] < this.heap[min]) min = l;
      if (r < this.heap.length && this.heap[r] < this.heap[min]) min = r;

      if (min === i) break;
      [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
      i = min;
    }
    return top;
  }

  size() {
    return this.heap.length;
  }
}

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number);
const [n, ...cards] = input;

const heap = new MinHeap();
for (const c of cards) heap.push(c);

let total = 0;
while (heap.size() > 1) {
  const sum = heap.pop()! + heap.pop()!;
  total += sum;
  heap.push(sum);
}

console.log(total);