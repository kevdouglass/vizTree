// import { Node } from 'lib'
import { Node } from "./node.js";
// n = new Node
// export class Node {
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        // create a new node
        let node = new Node(data);

        // if root is null then insert node to tree
        if(this.root == null){
            // this.root = cur;
            this.root = new Node(data);
        }
        else{
            this.insertNode(this.root, data);    
        }
        
    }

    insertNode(cur, data){ 

         if(data < cur.data){ // insert to the LHS
            if(cur.left == null){
                // cur.left = data; 
                cur.left = new Node(data);
            }
            else{ // if left is not null, rucursion to the right until it is empty for insertion
                this.insertNode(cur.left, cur);
            }
        }
        else if(data > cur.data){ // insert to the RHS
            if(cur.right == null){
                cur.right = new Node(data);; 
            }
            else{
                this.insertNode(cur.right, cur);
            }
        }
    }
}

console.log("Hello modules!")
let cur = new Node(21);
cur.left = new Node(5);
cur.right = new Node(99);

console.log(cur.data);
console.log(cur.left.data);

console.log(cur.right.data);