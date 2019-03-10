import MinHeap from './minheap.js';

class HuffmanNode { 
    constructor(freq, char) {
        this.freq = freq; 
        this.char = char; 
    }
}

const huffmanEncode = (arr, freq) => {
    const priorityQueue = new MinHeap(arr.length, (a, b) => a.freq < b.freq);
       
    // build min heap
    for (let i = 0; i < arr.length; i++) { 
        const node = new HuffmanNode(freq[i], arr[i]); 
        priorityQueue.insertKey(node); 
    } 
    
    // build huffman tree
    while (priorityQueue.size > 1) { 

        const x = priorityQueue.extractMin(); 
        const y = priorityQueue.extractMin(); 
        
        const z = new HuffmanNode(x.freq + y.freq, null); 
        z.left = x;
        z.right = y;
        priorityQueue.insertKey(z);        
    } 
    printCode(priorityQueue.getMin(), ""); 
};
  
const printCode = (root, s) => { 
    if (root.char) { 
        console.log(root.char + ":" + s); 
    } else {
        printCode(root.left, s + "0"); 
        printCode(root.right, s + "1"); 
    }
}; 

// "a:0"
// "c:100"
// "b:101"
// "f:1100"
// "e:1101"
// "d:111"
huffmanEncode(['a', 'b', 'c', 'd', 'e', 'f'], [45, 13, 12, 16, 9, 5]);


