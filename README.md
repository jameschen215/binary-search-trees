# Project: Binary Search Trees

## Introduction

You have learned about [binary search trees](http://en.wikipedia.org/wiki/Binary_search_tree), where you take a group of data items and turn them into a tree full of nodes, with each left node being “lower” than each right node. The tree starts with the “root node” and any node with no children is called a “leaf node”. You have also learned about tree traversal algorithms like breadth-first and depth-first.

Now, let’s take a look at balanced binary search trees (BST). A BST allows fast operations for lookup, insertion, and deletion of data items. Read this [article on building balanced BSTs](https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/). Here is a [video on building balanced BSTs](https://youtu.be/VCTP81Ij-EM) as well. Although the last resource does not use JavaScript, you should understand it well enough to develop your own pseudocode.

## Assignment

You’ll build a balanced BST in this assignment. Do not use duplicate values because they make it more complicated and result in trees that are much harder to balance. Therefore, be sure to always remove duplicate values or check for an existing value before inserting.

1. Build a `Node` class/factory. It should have an attribute for the data it stores as well as its left and right children.

2. Build a `Tree` class/factory which accepts an array when initialized. The `Tree` class should have a `root` attribute, which uses the return value of `buildTree` which you’ll write next.

3. Write a `buildTree(array)` function that takes an array of data (e.g., `[1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]`) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The `buildTree` function should return the level-0 root node.

> **Tip:** If you would like to visualize your binary search tree, here is a `prettyPrint()` function that will `console.log` your tree in a structured format. This function will expect to receive the root of your tree as the value for the `node` parameter.

```JavaScript
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
```

4. Write `insert(value)` and `deleteItem(value)` functions that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not. If you need additional resources, check out these two articles on inserting and deleting, or this video on BST inserting/removing with several visual examples.

5. Write a `find(value)` function that returns the node with the given value.

6. Write a `levelOrder(callback)` function that accepts a callback function as its parameter. `levelOrder` should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how `Array.prototype.forEach `might work for arrays. `levelOrder` may be implemented using either iteration or recursion (try implementing both!). If no callback function is provided, [throw an Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) reporting that a callback is required.
   **Tip:** You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list ([video on level order traversal](https://www.youtube.com/watch?v=86g8jAQug04)).

7. Write `inOrder(callback)`, `preOrder(callback)`, and `postOrder(callback)` functions that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with `levelOrder`.

8. Write a `height(node)` function that returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.

9. Write a `depth(node)` function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.

10. Write an `isBalanced` function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.

11. Write a `rebalance` function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the `buildTree` function.

### Tie it all together

Write a driver script that does the following:

1. Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.

2. Confirm that the tree is balanced by calling `isBalanced`.

3. Print out all elements in level, pre, post, and in order.

4. Unbalance the tree by adding several numbers > 100.

5. Confirm that the tree is unbalanced by calling `isBalanced`.

6. Balance the tree by calling `rebalance`.

7. Confirm that the tree is balanced by calling `isBalanced`.

8. Print out all elements in level, pre, post, and in order.
