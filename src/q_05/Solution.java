package q_05;

import java.util.Scanner;

public class Solution {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int sum = 0;
		int max = 0;
		for (int i=0; i<10; i++) {
			int out = sc.nextInt();
			int in = sc.nextInt();
			sum -= out;
			if(sum < 0) {
				sum = 0;
			}
			sum += in;
			if(sum > 10000) {
				sum = 10000;
			}
			if(max < sum) {
				max = sum;
			}
		}
		System.out.println(max);
	}

}
