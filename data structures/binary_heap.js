class BinHeap {
  constructor() {
    this.heapList = [0];
    this.size = 0;
  }

  buildHeap(list) {
    // concat the list onto the heapList, technically an O(n) operation but could refactor heapList to be 0-indexed to fix
    this.heapList = [0, ...list];
    // set the size to be the length of the input list
    this.size = list.length;
    // loop down from halfway index to 1 and percolate down each node
    for (let i = Math.floor(list.length); i > 0; i -= 1) {
      this.percDown(i);
    }
  }

  percUp(i) {
    while (Math.floor(i / 2) > 0) {
      const parentIndex = Math.floor(i / 2);
      if (this.heapList[i] < this.heapList[parentIndex]) {
        const temp = this.heapList[parentIndex];
        this.heapList[parentIndex] = this.heapList[i];
        this.heapList[i] = temp;
      }
      i = parentIndex;
    }
  }

  percDown(i) {
    while (this.heapList[i * 2] !== undefined) {
      const mc = this.minChildIndex(i);
      if (this.heapList[i] > this.heapList[mc]) {
        const temp = this.heapList[mc];
        this.heapList[mc] = this.heapList[i];
        this.heapList[i] = temp;
      }
      i = mc;
    }
  }

  minChildIndex(i) {
    if (!this.heapList[(i * 2) + 1] || this.heapList[i * 2] < this.heapList[(i * 2) + 1]) return i * 2;
    return (i * 2) + 1;
  }

  insert(value) {
    this.heapList.push(value);
    this.size++;
    this.percUp(this.size);
  }

  delMin() {
    // save return value
    const retVal = this.heapList[1];
    // swap first with last
    this.heapList[1] = this.heapList[this.size];
    // reduce size
    this.size--;
    // pop last
    this.heapList.pop();
    // percDown from 1
    this.percDown(1);
    return retVal;
  }
}

// const example = [1, 4, 2, 3, 5, 7];
const example = [7, 5, 4, 3, 2, 1];

const b = new BinHeap();
b.buildHeap(example);

function heapSort(array) {
  const sorted = [];
  const heap = new BinHeap();
  heap.buildHeap(array); // O(log n)
  while (heap.size) { // O(n)
    sorted.push(heap.delMin());
  }
  return sorted;
}

console.log(heapSort([4,2,3,6,7,1,5]));