package q_08;

import java.util.Scanner;

public class Solution {

	public static void main(String[] args) {
		int n = 10;
		/*
		 * int prev = 0; int now = 1; int sum = 0; // Scanner sc = new
		 * Scanner(System.in); for (int i = 0; i < n - 1; i++) { sum = now + prev; prev
		 * = now; now = sum; } System.out.println(sum);
		 */
		System.out.println(fibo(10));
	}

	static int fibo(int n) {
		if (n == 0) {
			return 0;
		} else if (n == 1) {
			return 1;
		} else {
			return (fibo(n - 1) + fibo(n - 2));
		}
	}

}
