import java.util.HashMap;
import java.util.Map;

class Solution {
    public String solution(String[] participant, String[] completion) {
        HashMap<String,Integer> hm = new HashMap<>();
        for (int i=0; i<participant.length; i++) {
            String key = participant[i];
            if (hm.containsKey(key))
                hm.put(key, hm.get(key)+1);
            else
                hm.put(key,1);
        }
        for (int i=0; i<completion.length; i++) {
            String key = completion[i];
            hm.put(key, hm.get(key)-1);
        }
        
        String name = "";
        for (Map.Entry<String,Integer> entry: hm.entrySet()) {
            if (entry.getValue()==1) {
                name = entry.getKey();
                break;
            }
        }
        return name;
    }
}