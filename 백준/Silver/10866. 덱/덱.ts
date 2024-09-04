const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

class Deque {
  deque: number[] = [];

  push_front = (x: number): void => {
    this.deque.unshift(x);
  };

  push_back = (x: number): void => {
    this.deque.push(x);
  };

  pop_front = (): number | undefined => {
    return this.deque.length === 0 ? -1 : this.deque.shift();
  };

  pop_back = (): number | undefined => {
    return this.deque.length === 0 ? -1 : this.deque.pop();
  };

  size = (): number => {
    return this.deque.length;
  };

  empty = (): number => {
    return this.deque.length === 0 ? 1 : 0;
  };

  front = (): number => {
    return this.deque.length === 0 ? -1 : this.deque[0];
  };

  back = (): number => {
    return this.deque.length === 0 ? -1 : this.deque[this.deque.length - 1];
  };
}

const deque = new Deque();
let result: string = "";

for (let i = 1; i < input.length; i++) {
  const [command, num] = input[i].split(" ");
  switch (command) {
    case "push_front":
      deque.push_front(+num);
      break;
    case "push_back":
      deque.push_back(+num);
      break;
    case "pop_front":
      result += deque.pop_front() + "\n";
      break;
    case "pop_back":
      result += deque.pop_back() + "\n";
      break;
    case "size":
      result += deque.size() + "\n";
      break;
    case "empty":
      result += deque.empty() + "\n";
      break;
    case "front":
      result += deque.front() + "\n";
      break;
    case "back":
      result += deque.back() + "\n";
      break;
  }
}

console.log(result);