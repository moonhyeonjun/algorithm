const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = input.shift();
let result = '';

for (let i = 0; i < testCase; i++) {
    const [h, w, n] = input[i].split(' ').map(Number);
    
    let floor = n % h;
    let room = Math.floor(n / h) + 1;

    if (floor === 0) {
        floor = h;
        room -= 1;
    };

    result += `${floor}${room < 10 ? '0' + room : room}\n`;
};

console.log(result);