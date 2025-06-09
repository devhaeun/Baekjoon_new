class MinHeap {
    constructor () {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    poll() {
        if (this.heap.length===1) return this.heap.pop();
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    bubbleUp() {
        let index = this.heap.length-1;
        let parentIdx = Math.floor((index-1)/2);
        while (
            this.heap[parentIdx] &&
            this.heap[index] < this.heap[parentIdx]
        ) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index-1)/2);
        }
    }
    
    bubbleDown() {
        let index = 0;
        let leftIdx = index*2+1;
        let rightIdx = index*2+2;
        
        while (
            (this.heap[leftIdx] && this.heap[leftIdx]<this.heap[index]) ||
            (this.heap[rightIdx] && this.heap[rightIdx]<this.heap[index])
        ) {
            let smallerIdx = leftIdx;
            if (
                this.heap[rightIdx] &&
                this.heap[rightIdx] < this.heap[smallerIdx]
            ) smallerIdx = rightIdx;
            this.swap(index, smallerIdx);
            index = smallerIdx;
            leftIdx = index*2+1;
            rightIdx = index*2+2;
        }
    }
}

function solution(n, works) {
    const heap = new MinHeap();
    for (i of works) {
        heap.add(-i);
    }
    
    let flag = false;
    
    for (let i=0; i<n; i++) {
        let thismax = -heap.poll();
        if (thismax-1>0) heap.add(-(thismax-1));
        if (heap.size()==0) {
            flag = true;
            break;
        }
    }
    
    if (flag) {
        return 0;
    }
    
    let answer = 0;
    for (let i=0; i<heap.size(); i++) {
        answer += heap.heap[i]**2;
    }
    return answer;
}