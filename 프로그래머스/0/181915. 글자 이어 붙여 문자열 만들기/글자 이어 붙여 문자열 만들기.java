class Solution {
    public String solution(String my_string, int[] index_list) {
        String[] my_strlst = my_string.split("");
        String answer = "";
        for (int i=0; i<index_list.length; i++) {
            answer += my_strlst[index_list[i]];
        }
        return answer;
    }
}