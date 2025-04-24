class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        String answer = "";
        int my_len = my_string.length();
        int over_len = overwrite_string.length();
        answer = my_string.substring(0,s)+overwrite_string+my_string.substring(s+over_len,my_len);
        return answer;
    }
}