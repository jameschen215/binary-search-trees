import { buildTree, prettyPrint } from './utils.js';
import { Node } from './node.js';

export class Tree {
	constructor(array) {
		this.root = buildTree(array);
	}

	insertIterative(data) {
		console.log('Inserting data ...');

		const temp = new Node(data);

		// If tree is empty
		if (this.root === null) return temp;

		// Find the node who is going to have the new node temp as its child
		let parent = null;
		let current = this.root;

		while (current !== null) {
			// current exists, make it the parent of the new node temp
			parent = current;

			// If new value is less than parent's value, try parent's left
			if (data < current.data) current = current.left;
			// If new value is greater than parent's value, try parent's right
			else if (data > current.data) current = current.right;
			// If new value is equal to parent's value, same value, do nothing
			else return;
		}

		// Now, current is null, and parent is the lowest node,
		// If x is smaller than parent, make it left child, else right child
		if (data < parent.data) {
			parent.left = temp;
		} else {
			parent.right = temp;
		}
	}

	// Recursive insert
	insert(data, root = this.root) {
		// If current root is null, that's where to add new node with new value
		if (root === null) {
			root = new Node(data);
			return root;
		}

		// Searching for which road to find the lowest space for new value node,
		// according to the difference between new value and root value
		if (data < root.data) {
			root.left = this.insert(data, root.left);
		} else if (data > root.data) {
			root.right = this.insert(data, root.right);
		}

		return root;
	}

	find(data, root = this.root) {
		// Base Cases: root is null or value found at root
		if (root === null || root.data === data) return root;

		// Value is greater than root's value, search left
		if (root.data > data) {
			return this.find(data, root.left);
		}

		// Value is smaller than root's value, search right
		return this.find(data, root.right);
	}

	deleteItem(data) {}

	levelOrder(callback) {}

	inOrder(callback) {}

	preOrder(callback) {}

	postOrder(callback) {}

	height(node = this.root, height = 0) {
		if (node === null) return height;

		height += 1;

		return Math.max(
			this.height(node.left, height),
			this.height(node.right, height)
		);
	}

	depth(node, root = this.root, depth = 0) {
		if (node === root) return depth;

		depth += 1;

		if (root.data > node.data) {
			return this.depth(node, root.left, depth);
		}

		return this.depth(node, root.right, depth);
	}

	isBalanced() {
		const leftHeight = this.height(this.root.left);
		const rightHeight = this.height(this.root.right);

		return Math.abs(leftHeight - rightHeight) <= 1;
	}

	rebalance() {
		if (this.isBalanced()) return;

		this.root = buildTree(this.getAllData());
	}

	getAllData(root = this.root, allData = []) {
		if (root === null) return allData;
		allData.push(root.data);

		this.getAllData(root.left, allData);
		this.getAllData(root.right, allData);

		return allData;
	}
}
