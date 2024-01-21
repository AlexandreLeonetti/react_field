class TreeNode {
    constructor(data = 0, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function treeTraversal(root) {
    if (root) {
        // Preorder: Processes the root before the traversals of left and right children.
        console.log('Preorder:', root.data);
        treeTraversal(root.left);

        // Inorder: Processes the root after the traversal of the left child and before the traversal of the right child.
        console.log('Inorder:', root.data);
        treeTraversal(root.right);

        // Postorder: Processes the root after the traversals of left and right children.
        console.log('Postorder:', root.data);
    }
}

// Example usage:
// Create a binary tree with the root node as 1, left child as 2, and right child as 3
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

// Perform tree traversal on the binary tree
treeTraversal(root);
