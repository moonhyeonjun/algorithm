const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N: number = +input[0];
const edges: string[] = input.slice(1);

const graph: number[][] = Array.from(new Array(N + 1), () => new Array<number>());
const checked: boolean[] = new Array(N + 1).fill(false);
const parentNodes: (number | null)[] = new Array(N + 1).fill(null);

edges.forEach((edge) => {
  const [start, end] = edge.split(" ").map(Number);

  graph[start].push(end);
  graph[end].push(start);
});

const dfsSearchForParent = (vertex: number): void => {
  if (checked[vertex]) return;

  checked[vertex] = true;

  graph[vertex].forEach((child) => {
    if (!checked[child]) parentNodes[child] = vertex;

    dfsSearchForParent(child);
  });
};

dfsSearchForParent(1);

let answer = "";

for (let i = 2; i < parentNodes.length; i++) {
  if (parentNodes[i] !== null) {
    answer += parentNodes[i] + "\n";
  }
}

console.log(answer);