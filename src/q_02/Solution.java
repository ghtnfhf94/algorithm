package q_02;

import java.util.Scanner;

public class Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		// int n = sc.nextInt();
		// int K = sc.nextInt();
		int n = 1;
		int K = 13;
		char e = '1';
		for (int i = 0; i < n; i++) {
			String target = Integer.toBinaryString(K);
			int len = target.length() - 1;
			StringBuffer sb = new StringBuffer();
			for (int j = 0; j <= len; j++) {
				if (target.charAt(len - j) == e) {
					sb.append(j + " ");
				}
			}
			System.out.println(sb.toString().substring(0, sb.toString().length() - 1));
		}
	}
}
