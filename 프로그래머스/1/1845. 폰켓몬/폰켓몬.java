import java.util.Set;
import java.util.HashSet;
class Solution {
    public int solution(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int i=0; i<nums.length; i++) {
            if (!set.contains(nums[i]))
                set.add(nums[i]);
        }
        
        int answer = 0;
        return answer = set.size()>nums.length/2 ? nums.length/2 : set.size();
    }
}