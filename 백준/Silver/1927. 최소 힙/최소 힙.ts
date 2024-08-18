const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N: number = +input[0];
const heap: number[] = [];
let result: string = "";

for (let i = 1; i <= N; i++) {
  const x: number = +input[i];

  if (x === 0) {
    if (heap.length === 0) {
      result += "0\n";
    } else {
      result += `${heap[0]}\n`;
      heap[0] = heap[heap.length - 1];
      heap.pop();

      let parent: number = 0;
      let child: number = 1;

      while (child < heap.length) {
        if (child + 1 < heap.length && heap[child] > heap[child + 1]) {
          child += 1;
        }

        if (heap[parent] < heap[child]) {
          break;
        }

        const temp: number = heap[parent];
        heap[parent] = heap[child];
        heap[child] = temp;

        parent = child;
        child = parent * 2 + 1;
      }
    }
  } else {
    heap.push(x);

    let child: number = heap.length - 1;
    let parent: number = Math.floor((child - 1) / 2);

    while (child > 0 && heap[parent] > heap[child]) {
      const temp: number = heap[parent];
      heap[parent] = heap[child];
      heap[child] = temp;

      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
  }
}

console.log(result);