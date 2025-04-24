import java.util.ArrayList;

class Solution {
    public int[] solution(int n) {
        ArrayList<Integer> nums = new ArrayList<>();
        
        while (n>=1) {
            nums.add(n);
            if (n==1) break;
            if (n%2==0) n/=2;
            else n=3*n+1;
        }
        
        int[] answer = new int[nums.size()];
        for (int i=0; i<nums.size(); i++) {
            answer[i] = nums.get(i);
        }
        return answer;
    }
}