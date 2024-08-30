const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

function checkPerfectNumber(n: number): string {
    let divisors: number[] = [];
    let sum = 0;

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            divisors.push(i);
            if (i !== 1 && i !== n / i) {
                sum += n / i;
                divisors.push(n / i);
            }
        }
    }

    if (sum === n) {
        divisors.sort((a, b) => a - b);
        return `${n} = ${divisors.filter(d => d !== n).join(" + ")}`;
    } else {
        return `${n} is NOT perfect.`;
    }
}

for (const line of input) {
    const n = parseInt(line.trim());
    if (n === -1) break;
    console.log(checkPerfectNumber(n));
}