import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] mountainTop = new int[n];

        for (int i = 0; i < n; i++) {
            mountainTop[i] = Integer.parseInt(st.nextToken());
        }

        int max = 0, kills = 0;
        int maxTop = mountainTop[0];

        for (int i = 1; i < n; i++) {
            if (mountainTop[i] < maxTop) {
                kills++;
            } else {
                maxTop = mountainTop[i];
                kills = 0;
            }
            max = Math.max(max, kills);
        }
        System.out.println(max);
    }
}