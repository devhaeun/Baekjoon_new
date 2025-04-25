import java.util.Arrays;

class Solution {
    public String solution(int[] numbers) {
        // 1. int[] -> String[]
        String[] strNums = Arrays.stream(numbers)
            .mapToObj(String::valueOf)
            .toArray(String[]::new);
        
        // 2. 아스키 순으로 정렬
        Arrays.sort(strNums, (a,b)->(b+a).compareTo(a+b));
        
        if (strNums[0].equals("0")) return "0";
        
        // 3. String[] -> StringBuilder
        StringBuilder sb = new StringBuilder();
        Arrays.stream(strNums).forEach(sb::append);
        
        return sb.toString();
    }
}