// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

// 수업 수
const N = Number(input[0]);

// 수업 시작, 종료 시간 추출 후 시작 시간 기준 정렬
const lectures: [number, number][] = input
  .slice(1)
  .map(line => line.split(" ").map(Number) as [number, number])
  .sort((a, b) => a[0] - b[0]);

/**
 * MinHeap 클래스 구현
 * 가장 빨리 끝나는 수업 종료 시간을 관리하기 위한 최소 힙
 */
class MinHeap {
  heap: number[] = [];

  insert(value: number) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // 최소값 반환 및 제거
  extractMin(): number | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length !== 0 && end !== undefined) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return min;
  }

  // 현재 최소값 확인
  peek(): number | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  private bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];
      if (parent <= element) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  private sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx: number | null = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx] < element) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swapIdx === null && this.heap[rightIdx] < element) ||
          (swapIdx !== null && this.heap[rightIdx] < this.heap[swapIdx])
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;
      this.heap[idx] = this.heap[swapIdx];
      this.heap[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

// 최소 힙 선언
const roomHeap = new MinHeap();

// 수업 순회하며 강의실 배정
for (const [start, end] of lectures) {
  // 기존 수업 중 종료된 수업이 있다면 해당 강의실 재사용
  if (roomHeap.size() > 0 && (roomHeap.peek() ?? Infinity) <= start) {
    roomHeap.extractMin();
  }

  // 현재 수업 종료 시간 추가 (새 강의실이든 기존이든)
  roomHeap.insert(end);
}

// 필요한 강의실 수 출력
console.log(roomHeap.size());