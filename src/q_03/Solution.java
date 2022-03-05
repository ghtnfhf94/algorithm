package q_03;

import java.util.Scanner;

public class Solution {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = 5;
		int[] arr = new int[] { 20, 10, 35, 30, 7 };
		int min = 0, max = 0, tmp;
		for (int i = 0; i < N; i++) {
			// tmp = sc.nextInt();
			tmp = arr[i];
			if (i == 0) {
				min = tmp;
				max = tmp;
				continue;
			}
			System.out.println("tmp : "+ tmp);
			if (min > tmp) {
				System.out.println("min : " + tmp);
				min = tmp;
			} else if (max < tmp) {
				System.out.println("max : " + tmp);
				max = tmp;
			}
		}
		System.out.println(min + " " + max);
	}
}
