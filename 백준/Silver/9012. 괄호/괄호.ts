const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
let result = '';

for (let i = 1; i <= T; i++) {
    const stack: string[] = [];
    const ps = input[i].split('');

    for (let j = 0; j < ps.length; j++) {
        if (ps[j] === '(') {
            stack.push(ps[j]);
        } else {
            if (stack.length === 0) {
                stack.push(ps[j]);
                break;
            }
            stack.pop();
        }
    }

    if (stack.length === 0) {
        result += 'YES\n';
    } else {
        result += 'NO\n';
    }
}

console.log(result);