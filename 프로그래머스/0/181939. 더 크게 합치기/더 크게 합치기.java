class Solution {
    public int solution(int a, int b) {
        int ab = Integer.valueOf(Integer.toString(a)+Integer.toString(b));
        int ba = Integer.valueOf(Integer.toString(b)+Integer.toString(a));
        if (ab>=ba)
            return ab;
        else
            return ba;
    }
}