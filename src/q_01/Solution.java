package q_01;

import java.util.ArrayList;
import java.util.List;

public class Solution {
	public static void main(String[] args) {
        int n = 6;
        int k = 3;
        List<Integer> list = new ArrayList<Integer>();
        for (int i = 1; i <= n; i++) {
	        if (n % i == 0) {
		        list.add(i);
	        }
        }
		
        if (list.size() >= k) {
	        System.out.println(list.get(k - 1));
        } else {
	        System.out.println(0);
        }
    }
}

