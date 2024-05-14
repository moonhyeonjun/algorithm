const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const [startH, startM, startS, endH, endM, endS] = input[i].split(' ').map(Number);
    let totalH = endH - startH;
    let totalM = endM - startM;
    let totalS = endS - startS;

    if (totalS < 0) {
        totalS += 60;
        totalM--;
    } 
    if (totalM < 0) {
        totalM += 60;
        totalH--;
    }

    console.log(totalH, totalM, totalS);
 }