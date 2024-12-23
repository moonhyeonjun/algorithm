// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 값 파싱
const N: number = parseInt(input[0]); // 재료의 개수
const M: number = parseInt(input[1]); // 갑옷을 만드는데 필요한 합
const materials: number[] = input[2].split(" ").map(Number); // 재료들의 고유 번호

// 재료 배열 정렬 (오름차순)
materials.sort((a, b) => a - b);

// 두 포인터 초기화
let left: number = 0;
let right: number = N - 1;
let count: number = 0;

// 두 포인터 탐색
while (left < right) {
  const sum = materials[left] + materials[right];

  if (sum === M) {
    // 갑옷을 만들 수 있는 경우
    count++;
    left++;
    right--;
  } else if (sum < M) {
    // 합이 작으면 왼쪽 포인터를 오른쪽으로 이동
    left++;
  } else {
    // 합이 크면 오른쪽 포인터를 왼쪽으로 이동
    right--;
  }
}

// 결과 출력
console.log(count);