const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n: number = +input[0];
const points: number[][] = input.slice(1).map((point) => point.split(' ').map((num) => +num));

points.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
});

let result: string = '';

points.forEach((point) => {
    result += point.join(' ') + '\n';
});

console.log(result);