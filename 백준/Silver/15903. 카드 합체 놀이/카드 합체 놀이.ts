// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

/**
 * 최소 힙 클래스 구현 (index = 1부터 시작)
 */
class MinHeap {
    private heap: bigint[];

    constructor() {
        this.heap = [BigInt(0)]; // 더미 노드 (heap[0]은 사용하지 않음)
    }

    // 자식 노드가 존재하고, 현재 노드가 자식보다 큰 경우 true 반환
    private isBiggerThanChildren(idx: number): boolean {
        if (this.heap[2 * idx]) {
            return (
                this.heap[idx] > this.heap[2 * idx] ||
                this.heap[idx] > this.heap[2 * idx + 1]
            );
        }
        return false;
    }

    // 두 인덱스의 값을 교환
    private swap(idx1: number, idx2: number): void {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    // 힙에 값 추가
    insert(value: bigint): void {
        this.heap.push(value);
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);

        // 최소 힙 조건 유지 (상향식)
        while (currentIdx > 1 && this.heap[currentIdx] < this.heap[parentIdx]) {
            this.swap(currentIdx, parentIdx);
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx / 2);
        }
    }

    // 힙에서 최소값 제거 후 반환
    remove(): bigint | null {
        if (this.heap.length <= 1) return null;
        if (this.heap.length === 2) return this.heap.pop()!;

        const removed = this.heap[1];
        this.heap[1] = this.heap.pop()!;
        let currentIdx = 1;

        // 최소 힙 조건 유지 (하향식)
        while (this.isBiggerThanChildren(currentIdx)) {
            // 오른쪽 자식이 더 작고, 현재 노드보다 작으면 오른쪽과 교환
            if (this.heap[2 * currentIdx + 1] < this.heap[2 * currentIdx]) {
                if (this.heap[2 * currentIdx + 1] < this.heap[currentIdx]) {
                    this.swap(2 * currentIdx + 1, currentIdx);
                    currentIdx = 2 * currentIdx + 1;
                }
            } else {
                // 왼쪽 자식이 현재 노드보다 작으면 왼쪽과 교환
                if (this.heap[2 * currentIdx] < this.heap[currentIdx]) {
                    this.swap(2 * currentIdx, currentIdx);
                    currentIdx = 2 * currentIdx;
                }
            }
        }

        return removed;
    }

    // 힙에 남은 모든 숫자의 합을 반환
    sum(): bigint {
        return this.heap.reduce((acc, val) => acc + val, BigInt(0));
    }
}

// 입력 파싱
let [n, m] = input.shift().split(" ").map(Number);
let cards = input.shift().split(" ").map(BigInt);

// 최소 힙에 카드 값 삽입
const heap = new MinHeap();
for (const card of cards) {
    heap.insert(card);
}

// m번 합체 작업 수행
while (m-- > 0) {
    const first = heap.remove()!;
    const second = heap.remove()!;
    const merged = first + second;
    heap.insert(merged);
    heap.insert(merged);
}

// 결과 출력
console.log(heap.sum().toString());