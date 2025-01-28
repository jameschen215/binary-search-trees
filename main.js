import { Tree } from './tree.js';
import { getRandomArray, prettyPrint } from './helper.js';

// const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const tree = new Tree(getRandomArray());

prettyPrint(tree.root);

tree.insert(123);
tree.insert(234);
tree.insert(335);
prettyPrint(tree.root);

console.log(tree.isBalanced());

tree.rebalance();
prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.inOrder((node) => console.log(node.data));
console.log('---------');
tree.preOrder((node) => console.log(node.data));
console.log('----------');
tree.postOrder((node) => console.log(node.data));
console.log('----------');
tree.levelOrderRecursive((node) => console.log(node.data));
