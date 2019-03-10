import MinHeap from './minheap.js';

class HuffmanNode { 
    constructor(char, freq) {
        this.char = char; 
        this.freq = freq;         
    }
}

const huffmanEncode = (data) => {
    const priorityQueue = new MinHeap(data.length, (a, b) => a.freq < b.freq);

    // build min heap
    for (const entry of data) { 
        const node = new HuffmanNode(entry[0], entry[1]); 
        priorityQueue.insertKey(node); 
    } 

    // build huffman tree
    while (priorityQueue.size > 1) { 

        const x = priorityQueue.extractMin(); 
        const y = priorityQueue.extractMin(); 
        
        const z = new HuffmanNode(null, x.freq + y.freq); 
        z.left = x;
        z.right = y;
        priorityQueue.insertKey(z);        
    } 
    
    printCode(priorityQueue.getMin(), ""); 
};
  
const printCode = (root, s) => { 
    if (root.char) { 
        console.log(root.char + " : " + s); 
    } else {
        printCode(root.left, s + "0"); 
        printCode(root.right, s + "1"); 
    }
}; 

const table = [
    ['a' , 45], ['b' , 13], ['c', 12], ['d' , 16], ['e' , 9], ['f' , 5]
]

huffmanEncode(table);


