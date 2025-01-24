import { Node } from './node.js';

function sortedArrayToBST(array, start, end) {
	if (start > end) return null;

	let mid = start + Math.floor((end - start) / 2);

	let root = new Node(array[mid]);
	root.left = sortedArrayToBST(array, start, mid - 1);
	root.right = sortedArrayToBST(array, mid + 1, end);

	return root;
}

export function buildTree(array) {
	const newArray = [...new Set(array)].sort((a, b) => {
		if (typeof a === 'number' && typeof b === 'number') {
			return a - b;
		}

		if (typeof a === 'string' && typeof b === 'string') {
			return a.localeCompare(b); // Alphabetical sorting
		}

		return typeof a === 'number' ? -1 : 1;
	});

	return sortedArrayToBST(newArray, 0, newArray.length - 1);
}

export const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node === null) {
		return;
	}

	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}

	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

// ----------------

export function prettyPrintVertical(root) {
	if (!root) return;

	const height = getHeight(root);
	const width = Math.pow(2, height) - 1; // Max width for the tree
	const matrix = Array.from({ length: height }, () => Array(width).fill(' '));

	fillMatrix(root, matrix, 0, 0, width - 1);

	matrix.forEach((row) => console.log(row.join('')));
}

function getHeight(node) {
	if (!node) return 0;
	return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

function fillMatrix(node, matrix, level, left, right) {
	if (!node) return;

	const mid = Math.floor((left + right) / 2);
	matrix[level][mid] = node.data.toString();

	fillMatrix(node.left, matrix, level + 1, left, mid - 1);
	fillMatrix(node.right, matrix, level + 1, mid + 1, right);
}

// Example usage
// const root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// root.left.left = new Node(2);
// root.left.right = new Node(7);
// root.right.left = new Node(12);
// root.right.right = new Node(20);

// prettyPrintVertical(root);
