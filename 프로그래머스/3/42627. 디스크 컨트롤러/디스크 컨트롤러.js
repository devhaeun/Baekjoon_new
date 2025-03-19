class MinHeap {
    constructor () {
        this.heap = [null];
    }
    
    push (value) {
        this.heap.push(value);
        
        let currentIdx = this.heap.length-1;
        let parentIdx = Math.floor(currentIdx/2);
        
        while (parentIdx!==0 && this.heap[parentIdx]?.length>value.length) {
            const temp = this.heap[parentIdx];
            this.heap[parentIdx] = value;
            this.heap[currentIdx] = temp;
            
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx/2);
        }
    }
    
    pop () {
        if (this.heap.length===1) return null;
        if (this.heap.length===2) return this.heap.pop();
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        
        while (this.heap[currentIdx]?.length > this.heap[leftIdx]?.length || this.heap[currentIdx]?.length > this.heap[rightIdx]?.length) {
            if (this.heap[leftIdx]?.length > this.heap[rightIdx]?.length) {
                const temp = this.heap[rightIdx];
                this.heap[rightIdx] = this.heap[currentIdx];
                this.heap[currentIdx] = temp;
                currentIdx = rightIdx;
            } else {
                const temp = this.heap[leftIdx];
                this.heap[leftIdx] = this.heap[currentIdx];
                this.heap[currentIdx] = temp;
                currentIdx = leftIdx;
            }
            
            leftIdx = currentIdx*2;
            rightIdx = currentIdx*2+1;
        }
        
        return returnValue;
    }
}

function solution(jobs) {
    const heap = new MinHeap();
    const jobLen = jobs.length;
    
    jobs.sort((a,b) => a[0]-b[0]);
    let count=0, answer=0, complete=0;
    
    while (jobs.length || heap.heap.length-1) {
        while (jobs.length) {
            if (jobs[0][0]===count) {
                const finish = jobs.shift();
                heap.push({time:finish[0], length:finish[1]});
            } else break;
        }
    
        if (heap.heap.length-1 && count>=complete) {
            const task = heap.pop();
            complete = task.length+count;
            answer += (complete-task.time);
        }
        count++;
    }
    
    return Math.floor(answer/jobLen);
}