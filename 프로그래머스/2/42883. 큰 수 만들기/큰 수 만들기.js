function solution(number, k) {
    const stack = [];
    
    for (const num of number) {
        while (k>0 && num > stack[stack.length-1]) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    
    stack.splice(stack.length-k, k);
    
    return stack.join("");
}