const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();
class Node {
        constructor(item) {
                this.item = item;
                this.next = null;
        }
}

class Stack {
        constructor() {
                this.topOfStack = null;
                this.length = 0;
        }

        push(item) {
                const node = new Node(item);
                if (this.topOfStack != null) {
                        node.next = this.topOfStack;
                }
                this.topOfStack = node;
                this.length += 1;
        }

        pop() {
                if (this.length == 0) return '';
                const popItem = this.topOfStack;
                this.topOfStack = popItem.next;
                this.length -= 1;

                return popItem.item;
        }

        size() {
                return this.length;
        }

        empty() {
                if (this.length == 0) return true;
                else return false;
        }

        top() {
                if (this.length == 0) return false;
                return this.topOfStack.item;
        }

        print() {
                const test = [];
                let pointer = this.topOfStack;
                while (pointer != null) {
                        test.unshift(pointer.item);
                        pointer = pointer.next;
                }
                console.log(test.join(''));
        }

        calc() {
                let answer = 0;
                while (!this.empty()) {
                        const value = this.pop();
                        if (typeof value != 'number') {
                                console.log(0);
                                process.exit();
                        }
                        answer += value;
                }
                return answer;
        }
}
let answer = 0;
const stack = new Stack();
for (let i = 0; i < input.length; i++) {
        const b = input[i];
        switch (b) {
                case '(':
                        stack.push(b);
                        break;
                case ')':
                        {
                                const nums = [];
                                while (true) {
                                        const top = stack.top();
                                        if (top == '(') {
                                                stack.pop();
                                                if (nums.length == 0) {
                                                        stack.push(2);
                                                } else {
                                                        stack.push(2 * nums.reduce((r, v) => r + v, 0));
                                                }
                                                break;
                                        } else if (typeof top === 'number') {
                                                nums.push(stack.pop());
                                        } else {
                                                console.log(0);
                                                process.exit();
                                        }

                                        if (stack.empty()) {
                                                console.log(0);
                                                process.exit();
                                        }
                                }
                        }
                        break;
                case '[':
                        stack.push(b);
                        break;
                case ']':
                        {
                                const nums = [];
                                while (true) {
                                        const top = stack.top();
                                        if (top == '[') {
                                                stack.pop();
                                                break;
                                        } else if (typeof top === 'number') {
                                                nums.push(stack.pop());
                                        } else {
                                                console.log(0);
                                                process.exit();
                                        }

                                        if (stack.empty()) {
                                                console.log(0);
                                                process.exit();
                                        }
                                }

                                if (nums.length == 0) {
                                        stack.push(3);
                                } else {
                                        stack.push(3 * nums.reduce((r, v) => r + v, 0));
                                }
                        }
                        break;
        }
}
console.log(stack.calc());