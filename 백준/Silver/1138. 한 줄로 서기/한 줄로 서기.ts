// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const N = Number(input[0]);
const tallerCounts = input[1].split(" ").map(Number);

// 줄을 서는 최종 결과를 저장할 배열
const line: number[] = [];

// 키가 1부터 N까지 사람을 하나씩 넣으며 줄을 구성
for (let height = 1; height <= N; height++) {
  const count = tallerCounts[height - 1]; // 자신보다 키 큰 사람이 왼쪽에 몇 명 있었는지

  /**
   * 배열에서 count만큼의 빈 자리를 지나서 삽입 위치를 결정한다.
   * 그 위치에 현재 사람의 키를 삽입.
   */
  let inserted = false;
  let pos = 0;
  let skip = count;

  while (!inserted) {
    // 아직 아무도 없는 자리거나, 비어있는 자리일 경우
    if (line[pos] === undefined) {
      if (skip === 0) {
        line[pos] = height;
        inserted = true;
      } else {
        skip--;
      }
    }
    pos++;
  }
}

// 결과 출력
console.log(line.join(" "));