#include <stdio.h>
 
int main() {
 
    int n, a;
    int cnt = 0, cnt1 = 0;
 
    scanf("%d", &n);
 
 
    for (int i = 0; i < n; i++) {
        scanf("%d", &a);
        if (a == 1)
            cnt++;
        else if (a == 0)
            cnt1++;
 
 
    }
    if (cnt > cnt1)printf("Junhee is cute!");
    else printf("Junhee is not cute!");
 
}