import java.util.HashMap;
import java.util.Map;
class Solution {
    public int solution(String[][] clothes) {
        HashMap<String,Integer> hm = new HashMap<>();
        for (int i=0; i<clothes.length; i++) {
            if (hm.containsKey(clothes[i][1])) {
                hm.put(clothes[i][1], hm.get(clothes[i][1])+1);
            } else hm.put(clothes[i][1], 1);
        }
        
        int answer = 1;
        for (Map.Entry<String,Integer> entry:hm.entrySet()) {
            answer *= entry.getValue()+1;
        }
        
        return answer-1;
    }
}