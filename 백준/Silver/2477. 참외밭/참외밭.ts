// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 1m²당 참외 개수
const K = Number(input[0]);

// 육각형 경계 정보 [방향, 길이]로 이루어진 배열
const border = input.slice(1).map(line => {
  const [dir, len] = line.split(" ").map(Number);
  return { dir, len };
});

/**
 * 육각형을 큰 직사각형 - 작은 직사각형으로 나누기
 * 1. 가장 긴 가로와 세로 길이를 찾아 큰 직사각형의 넓이를 구함
 * 2. 그 인접한 두 변을 이용해 작은 직사각형의 넓이를 구함
 */

// 최대 가로, 세로 길이를 저장할 변수
let maxWidth = 0, maxHeight = 0;
let maxWidthIdx = -1, maxHeightIdx = -1;

for (let i = 0; i < 6; i++) {
  const { dir, len } = border[i];
  if ((dir === 1 || dir === 2) && len > maxWidth) {
    maxWidth = len;
    maxWidthIdx = i;
  }
  if ((dir === 3 || dir === 4) && len > maxHeight) {
    maxHeight = len;
    maxHeightIdx = i;
  }
}

// 작은 사각형의 너비와 높이는 큰 사각형 인접 두 변의 다음에서 두 칸 뒤에 위치
const smallWidthIdx = (maxWidthIdx + 3) % 6;
const smallHeightIdx = (maxHeightIdx + 3) % 6;

const smallWidth = border[smallWidthIdx].len;
const smallHeight = border[smallHeightIdx].len;

// 넓이 계산
const bigArea = maxWidth * maxHeight;
const smallArea = smallWidth * smallHeight;
const realArea = bigArea - smallArea;

// 참외 개수 출력
console.log(realArea * K);