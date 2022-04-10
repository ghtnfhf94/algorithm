package q_15;

import java.util.ArrayList;
import java.util.List;

public class Solution {

	public static void main(String[] args) {
		int result = 0;
		int start = 3;
		int end = 7;
		int cnt = 0;
		int index = 0;
		List<Integer> list = new ArrayList<Integer>();
		while (cnt < end) {
			for (int i = 0; i < index; i++) {
				list.add(index);
				cnt++;
				if(cnt >= start && cnt <= end) {
					result += index;
				}
			}
			index++;
		}
		System.out.println(result);
	}

}
