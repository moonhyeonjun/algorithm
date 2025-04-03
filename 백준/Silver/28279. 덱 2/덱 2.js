// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  pushFront(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.count++;
  }

  pushBack(value) {
    const node = new Node(value);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  popFront() {
    if (!this.head) return -1;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.count--;
    return value;
  }

  popBack() {
    if (!this.tail) return -1;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.count--;
    return value;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0 ? 1 : 0;
  }

  front() {
    return this.head ? this.head.value : -1;
  }

  back() {
    return this.tail ? this.tail.value : -1;
  }
}

const N = Number(input[0]);
const deque = new Deque();
const output = [];

for (let i = 1; i <= N; i++) {
  const command = input[i].split(" ");

  switch (command[0]) {
    case "1":
      deque.pushFront(Number(command[1]));
      break;
    case "2":
      deque.pushBack(Number(command[1]));
      break;
    case "3":
      output.push(deque.popFront());
      break;
    case "4":
      output.push(deque.popBack());
      break;
    case "5":
      output.push(deque.size());
      break;
    case "6":
      output.push(deque.isEmpty());
      break;
    case "7":
      output.push(deque.front());
      break;
    case "8":
      output.push(deque.back());
      break;
  }
}

// 결과 한 번에 출력
console.log(output.join("\n"));