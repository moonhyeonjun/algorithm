const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const [sum, diff] = input;

if ((sum + diff) % 2 !== 0 || (sum - diff) % 2 !== 0) {
    console.log(-1);
} else {
    let team1 = (sum + diff) / 2;
    let team2 = sum - team1;
    if (team1 < 0 || team2 < 0) {
        console.log(-1);
    } else {
        console.log(`${Math.max(team1, team2)} ${Math.min(team1, team2)}`);
    }
}