// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 처리
const switchCount: number = parseInt(input[0]); // 스위치 개수
let switches: number[] = input[1].split(" ").map(Number); // 스위치 상태 배열
const studentCount: number = parseInt(input[2]); // 학생 수
const students: [number, number][] = input.slice(3).map(line => {
  const [gender, number] = line.split(" ").map(Number);
  return [gender, number];
});

// 스위치 상태를 변경하는 함수
const toggleSwitch = (index: number): void => {
  switches[index] = switches[index] === 0 ? 1 : 0;
};

// 남학생의 작업 처리
const handleMale = (number: number): void => {
  for (let i = number - 1; i < switchCount; i += number) {
    toggleSwitch(i);
  }
};

// 여학생의 작업 처리
const handleFemale = (number: number): void => {
  const center = number - 1; // 여학생이 받은 스위치의 인덱스
  let left = center - 1;
  let right = center + 1;

  // 좌우 대칭 검사
  while (left >= 0 && right < switchCount && switches[left] === switches[right]) {
    left--;
    right++;
  }

  // 대칭 구간에 포함된 모든 스위치 상태 변경
  for (let i = left + 1; i < right; i++) {
    toggleSwitch(i);
  }
};

// 학생별 작업 수행
for (const [gender, number] of students) {
  if (gender === 1) {
    handleMale(number); // 남학생 처리
  } else if (gender === 2) {
    handleFemale(number); // 여학생 처리
  }
}

// 출력 형식에 맞게 결과 출력
const output: string[] = [];
for (let i = 0; i < switches.length; i += 20) {
  output.push(switches.slice(i, i + 20).join(" "));
}
console.log(output.join("\n"));