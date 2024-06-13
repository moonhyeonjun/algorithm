const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().split('\n');

for (const line of input) {
    if (line.trim() === "") continue;
    const results = line.split(' ').map(Number);
    const countZero = results.filter((x: number) => x === 0).length;
    switch (countZero) {
        case 0:
            console.log('E');
            break;
        case 1:
            console.log('A');
            break;
        case 2:
            console.log('B');   
            break;
        case 3:
            console.log('C');
            break;
        case 4:
            console.log('D');
            break;
    }
}