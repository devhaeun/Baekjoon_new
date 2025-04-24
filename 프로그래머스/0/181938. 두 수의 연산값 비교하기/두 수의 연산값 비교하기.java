class Solution {
    public int solution(int a, int b) {
        int ab = Integer.valueOf(Integer.toString(a) + Integer.toString(b));
        if (ab > 2*a*b)
            return ab;
        else
            return 2*a*b;
    }
}