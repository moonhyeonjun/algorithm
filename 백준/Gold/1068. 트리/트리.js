// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]); // 노드 수
const parent = input[1].split(" ").map(Number); // 각 노드의 부모 정보
const deleteNode = Number(input[2]); // 삭제할 노드

// 각 노드의 자식을 저장할 배열 (트리 구조)
const tree = Array.from({ length: N }, () => []);

// 루트 노드를 저장할 변수
let root = -1;

// 트리 구성
for (let i = 0; i < N; i++) {
  const p = parent[i];
  if (p === -1) {
    root = i;
  } else {
    tree[p].push(i);
  }
}

// 삭제 여부를 저장하는 배열
const isDeleted = Array(N).fill(false);

// 삭제할 노드와 그 하위 노드들 삭제 처리 (DFS)
function deleteSubtree(node) {
  isDeleted[node] = true;
  for (const child of tree[node]) {
    deleteSubtree(child);
  }
}

// 삭제 시작
deleteSubtree(deleteNode);

// 리프 노드 개수 카운트
let leafCount = 0;

function countLeaves(node) {
  if (isDeleted[node]) return;

  // 삭제되지 않은 자식만 필터링
  const children = tree[node].filter(child => !isDeleted[child]);

  // 자식이 없다면 리프 노드
  if (children.length === 0) {
    leafCount++;
    return;
  }

  // 자식 노드들에 대해 재귀 탐색
  for (const child of children) {
    countLeaves(child);
  }
}

// 루트 노드가 삭제된 경우 예외 처리
if (!isDeleted[root]) {
  countLeaves(root);
}

console.log(leafCount);