// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 만남의 수 N
const N: number = parseInt(input[0]);

// 댄스를 추는 사람들을 저장할 Set (중복 허용 안함, 빠른 조회)
const dancers: Set<string> = new Set(["ChongChong"]); // 시작은 ChongChong 혼자

// 입력된 만남 기록을 순차적으로 처리
for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(" ");

  // 둘 중 하나라도 댄스를 추고 있다면, 상대도 감염됨
  if (dancers.has(A) || dancers.has(B)) {
    dancers.add(A);
    dancers.add(B);
  }
}

// 결과 출력: 무지개 댄스를 추는 사람의 수
console.log(dancers.size);