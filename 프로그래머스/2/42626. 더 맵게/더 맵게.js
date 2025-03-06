class MinHeap {
	constructor() {
		this.heap = [];
	}
	
	getParentIndex(index) {
		return Math.floor((index-1) / 2);
	}
	
	swap(index1, index2) {
		const temp = this.heap[index1];
		this.heap[index1] = this.heap[index2];
		this.heap[index2] = temp;
	}
	
	isEmpty() {
		return this.heap.length === 0;
	}
	
	push(value) {
		this.heap.push(value);
		let currentIdx = this.heap.length - 1;
		let parentIdx = this.getParentIndex(currentIdx);
		
		// 삽입된 요소가 루트 노드가 아니고,
		// 부모 노드의 값이 삽입된 요소의 값보다 크다면 교환
		// 교환 후에는 currentIdx를 parentIdx로 업데이트하고
		// parentIdx를 다시 구함
		while (currentIdx>0 && this.heap[parentIdx]>value) {
			this.swap(currentIdx, parentIdx);
			currentIdx = parentIdx;
			parentIdx = this.getParentIndex(currentIdx);
		}
		// 이 과정을 반복하여 힙의 속성 유지
	}
	
	pop() {
		if (this.isEmpty()) return null;
		if (this.heap.length === 1) return this.heap.pop();
		
		// 루트 노드 값을 root 변수에 저장하고,
		// 힙의 마지막 요소를 루트 노드로 이동
		const root = this.heap[0];
		this.heap[0] = this.heap.pop();
		
		let currentIdx = 0;
		let leftChildIdx = 1;
		let rightChildIdx = 2;
		
		// 현재 노드 값이 왼쪽/오른쪽 자식보다 크다면 교환
		while (
			this.heap[currentIdx] > this.heap[leftChildIdx] ||
			this.heap[currentIdx] > this.heap[rightChildIdx]
		) {
			// 왼쪽/오른쪽 자식 중 더 작은 값을 가진 노드와 교환
			const smallerChildIdx =
				rightChildIdx >= this.heap.length ||
				this.heap[leftChildIdx] < this.heap[rightChildIdx]
				? leftChildIdx : rightChildIdx;
			this.swap(currentIdx, smallerChildIdx);
			
			// 교환 후 currentIdx를 교환한 자식 노드의 인덱스로 업데이트
			currentIdx = smallerChildIdx;
			// 루트 노드가 제거되어도 null이 남아있으므로
			// index*2+1 - 1 => index*2가 된 상태
			leftChildIdx = 2*currentIdx + 1;
			rightChildIdx = 2*currentIdx + 2;
			// 이 과정을 반복하여 힙의 속성 유지
		}
		
		return root;
	}
}

function solution(scoville, K) {
	const minHeap = new MinHeap();
	let count = 0;
	
	scoville.forEach(el => minHeap.push(el));
	
	while (minHeap.heap[0] < K) {
		if (minHeap.heap.length === 1) return -1;
		
		const first = minHeap.pop();
		const second = minHeap.pop();
		const mixed = first + second * 2;
		minHeap.push(mixed);
		count++;
	}
	
	return count;
}