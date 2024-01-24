class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function searchBST(treeNode, key) {
    if (!treeNode) {
        return treeNode;
    } else if (treeNode.data === key) {
        return treeNode;
    } else if (key < treeNode.data) {
        return searchBST(treeNode.left, key);
    } else {
        return searchBST(treeNode.right, key);
    }
}

function isBST(treeNode, low = Number.NEGATIVE_INFINITY, high = Number.POSITIVE_INFINITY) {
    if (!treeNode) {
        return true;
    } else if (!(low <= treeNode.data && treeNode.data <= high)) {
        return false;
    }

    console.log(treeNode.data);
    return isBST(treeNode.left, low, treeNode.data) && isBST(treeNode.right, treeNode.data, high);
}

// Construct the BST
const root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.right.right = new TreeNode(14);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(13);

// Test the searchBST function
const keyToSearch = 6;
const resultNode = searchBST(root, keyToSearch);

if (resultNode) {
    console.log(`Node with key ${keyToSearch} found: ${resultNode.data}`);
} else {
    console.log(`Node with key ${keyToSearch} not found.`);
}

// Test the isBST function
console.log(isBST(root));
