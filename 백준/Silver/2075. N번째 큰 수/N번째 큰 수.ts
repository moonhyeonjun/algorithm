import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 최소 힙 클래스 정의
class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [null as unknown as number]; // 첫 번째 인덱스는 사용 안 함
    }

    push(item: number): void {
        let cur = this.heap.length;
        while (cur > 1) {
            let parent = Math.floor(cur / 2);
            if (item < this.heap[parent]) {
                this.heap[cur] = this.heap[parent];
                cur = parent;
            } else break;
        }
        this.heap[cur] = item;
    }

    pop(): number | null {
        if (this.heap.length === 1) return null;

        const minItem = this.heap[1];

        if (this.heap.length > 2) {
            this.heap[1] = this.heap.pop()!;
            let cur = 1;
            let leftChild = cur * 2;
            let rightChild = cur * 2 + 1;

            while (this.heap[leftChild]) {
                let compareChild = leftChild;
                if (this.heap[rightChild] && this.heap[leftChild] > this.heap[rightChild]) {
                    compareChild = rightChild;
                }
                if (this.heap[compareChild] < this.heap[cur]) {
                    [this.heap[compareChild], this.heap[cur]] = [this.heap[cur], this.heap[compareChild]];
                    cur = compareChild;
                } else break;
                leftChild = cur * 2;
                rightChild = cur * 2 + 1;
            }
        } else if (this.heap.length === 2) {
            this.heap.pop();
        }

        return minItem;
    }

    size(): number {
        return this.heap.length - 1;
    }
}

// 힙 생성
const minHeap = new MinHeap();
let N = -1;

rl.on("line", (line: string) => {
    if (N === -1) {
        N = parseInt(line);
        return;
    }

    line.split(" ").map(Number).forEach((value) => {
        minHeap.push(value);
        if (minHeap.size() > N) minHeap.pop();
    });

    N--;

    if (N === 0) rl.close();
}).on("close", () => {
    console.log(minHeap.pop());
    process.exit();
});