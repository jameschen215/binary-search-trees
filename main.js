import { Tree } from './tree.js';
import { prettyPrint } from './utils.js';

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

tree.insertIterative(40);
tree.insert(18);
tree.insert(15);
tree.insert(2);
tree.insert(10);
tree.insert(5);
tree.insert(7);
tree.insert(12);
tree.insert(20);
prettyPrint(tree.root);
// prettyPrint(tree.find(23));
// // console.log(tree.height(tree.find(23)));
// console.log(tree.depth(tree.find(15)));
// console.log(tree.depth(tree.root));

// console.log(tree.isBalanced());

console.log(tree.height());
tree.rebalance();

prettyPrint(tree.root);
console.log(tree.height());
