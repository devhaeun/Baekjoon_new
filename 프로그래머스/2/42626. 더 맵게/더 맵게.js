class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    poll() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
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
        let leftIdx = index*2 + 1;
        let rightIdx = index*2 + 2;
        
        while (
            (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[index] ||
            this.heap[rightIdx] && this.heap[rightIdx] < this.heap[index])
        ) {
            let smallerIdx = leftIdx;
            if (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[smallerIdx]) {
                smallerIdx = rightIdx;
            }
            
            this.swap(index, smallerIdx);
            index = smallerIdx;
            leftIdx = index*2 + 1;
            rightIdx = index*2 + 2;
        }
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    
    for (let scov of scoville) {
        heap.add(scov);
    }
    
    let count = 0;
    while (heap.size()>1 && heap.heap[0]<K) {
        const scov1 = heap.poll();
        const scov2 = heap.poll();
        
        heap.add(scov1 + scov2*2);
        count++;
    }
    
    return heap.heap[0] >= K ? count : -1;
}