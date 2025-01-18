function solution(nums) {
    const n = nums.length/2;
    const set = new Set(nums);
    
    return set.size>n ? n : set.size
}