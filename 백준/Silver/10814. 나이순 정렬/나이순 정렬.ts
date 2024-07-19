const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N: number = parseInt(input[0]);
const members: string[] = input.slice(1);

interface Member {
  age: number;
  name: string;
}

const membersList: Member[] = members.map((member) => {
  const [age, name] = member.split(" ");
  return { age: parseInt(age), name };
});

membersList.sort((a, b) => {
  if (a.age === b.age) {
    return 0;
  }
  return a.age - b.age;
});

membersList.forEach((member) => {
  console.log(`${member.age} ${member.name}`);
});