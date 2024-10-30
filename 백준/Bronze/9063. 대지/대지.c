#include <stdio.h>

int main(void) {

  struct coma { // 점을 표현하기 위해 구조체 사용
    int x;
    int y;
  };

  int n = 0;
  struct coma a[100001]; // n값이 최대 100000임
  struct coma rst; // 결과값을 나타내는 점
  struct coma max; // 제일 큰 max값에 해당하는 점을 담는 변수
  struct coma min; // 제일 작은 min값에 해당하는 점을 담는 변수
  max.x = -10001; // 최솟값
  max.y = -10001; // 최솟값
  min.x = 10001; // 최댓값
  min.y = 10001; // 최댓값

  scanf("%d", &n); // n 값 입력받기 
  for (int i = 0; i < n; i++) { // x,y 값 구조체 변수에 입력
    scanf("%d %d", &a[i].x, &a[i].y);
  }

  for (int i = 0; i < n ; i++) {
    if (max.x < a[i].x) {
      max.x = a[i].x; // max 변수의 x 값에 x 좌표들 중 max값 넣기
    }

    if (min.x > a[i].x) {
      min.x = a[i].x; // min 변수의 x 값에 min 값 넣기
    }

    if (max.y < a[i].y) {
      max.y = a[i].y; // max 변수의 y 값에 max값 넣기
    }

    if (min.y > a[i].y) {
      min.y = a[i].y; // min 변수의 y 값에 min값 넣기
    }
  }

  rst.x = max.x - min.x; // x축 방향 길이
  rst.y = max.y - min.y; // y축 방향 길이

  int result = rst.x*rst.y; // 직사각형 넓이 구하기

  printf("%d\n",result); // 출력

  return 0;
}