class Solution {
    public String solution(String my_string, int[][] queries) {
        StringBuilder sb = new StringBuilder(my_string);
        
        for (int i=0; i<queries.length; i++) {
            int s=queries[i][0], e=queries[i][1];
            String substr = sb.substring(s,e+1);
            StringBuilder reversed = new StringBuilder(substr).reverse();
            sb.replace(s,e+1,reversed.toString());
        }
        
        return sb.toString();
    }
}