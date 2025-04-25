class Solution {
    boolean solution(String s) {
        int par = 0;
        for (int i=0; i<s.length(); i++) {
            if (s.charAt(i)=='(') par+=1;
            else {
                par-=1;
                if (par<0) return false;
            }
        }
        return par==0 ? true : false;
    }
}