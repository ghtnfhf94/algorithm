package q_16;

import java.util.ArrayList;
import java.util.List;

public class Solution {

	public static void main(String[] args) {
		List<Integer> list = new ArrayList<Integer>();
		int start = 60;
		int end = 100;
		int sum = 0;
		for (int i = start; i <= end; i++) {
			if (i != 1 && checkDecimal(i)) {
				list.add(i);
				sum += i;
			}
		}
		if (list.size() == 0) {
			System.out.println(-1);
		} else {
			System.out.println(sum);
			System.out.println(list.get(0));
		}
	}

	static boolean checkDecimal(int num) {
		for (int i = 2; i <= Math.sqrt(num); i++) {
			if (num % i == 0) {
				return false;
			}
		}
		return true;
	}

}
