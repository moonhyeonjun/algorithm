const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [people, room] = input[0].split(' ').map(num => Number(num));
const total_people = people * room;

const particles = input[1].split(' ').map(num => Number(num));

let result = '';

particles.forEach((particle) => {
    result += particle - total_people + ' ';
});

console.log(result);