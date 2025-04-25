import java.util.PriorityQueue;
class Solution {
    public int solution(int[] scoville, int K) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int s:scoville) {
            pq.offer(s);
        }
        
        int cnt = 0;
        while (pq.peek()<K && pq.size()>1) {
            int s1 = pq.poll();
            int s2 = pq.poll();
            pq.offer(s1+s2*2);
            cnt++;
        }
        
        return pq.peek()<K ? -1 : cnt;
    }
}