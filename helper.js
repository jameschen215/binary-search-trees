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
	const newArray = [...new Set(array)].sort((a, b) => a - b);
	return sortedArrayToBST(newArray, 0, newArray.length - 1);
}

export function prettyPrint(node, prefix = '', isLeft = true) {
	if (node === null) return;

	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}

	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
}

/** Get a random array whose length is less than 100. */
export function getRandomArray(maxNumber = 20, maxRange = 100) {
	return new Array(getRandomInteger(maxNumber))
		.fill(0)
		.map((_) => getRandomInteger(maxRange));
}

function getRandomInteger(max = 100) {
	return Math.floor(Math.random() * max);
}
