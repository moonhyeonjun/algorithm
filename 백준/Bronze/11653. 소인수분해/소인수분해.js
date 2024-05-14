const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

let n = parseInt(input);

let factorization = [];

for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
        factorization.push(i);
        n /= i;
    }
}

factorization.forEach((element) => {
    console.log(element);
});