const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((i) => +i);
const pokemons: string[] = input.slice(1, n + 1);
const questions: string[] = input.slice(n + 1);

const pokemonMap: Map<string, number> = new Map();
const pokemonMap2: Map<number, string> = new Map();

for (let i = 0; i < n; i++) {
  pokemonMap.set(pokemons[i], i + 1);
  pokemonMap2.set(i + 1, pokemons[i]);
}

let answer: string = "";

for (let i = 0; i < m; i++) {
  if (isNaN(+questions[i])) {
    answer += `${pokemonMap.get(questions[i])}\n`;
  } else {
    answer += `${pokemonMap2.get(+questions[i])}\n`;
  }
}

console.log(answer);