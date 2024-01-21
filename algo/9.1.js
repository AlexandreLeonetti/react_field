class treenode {
    constructor(data = 0, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right= right;
    }
}

function isBalancedBinaryTree(r){
    class tuple{
        constructor(isBalanced = true, height = -1){
            this.isBalanced = isBalanced;
            this.height= height;
        }
    }

    function check(node){
        if(!node){
            return new tuple(true, -1);
        }

        /* recursively check left and right subtree */
        const left = check(node.left);
        if(left.isBalanced== false){
            return new tuple(false, left.height);
        }

        const right = check(node.right);
        if(right.isBalanced==false){
            return new tuple(false, right.height);
        }            

        /* if subtree balanced, proceed to calculations */
        let height = Math.max(left.height, right.height)+1; 
        let isBalanced = Math.abs(left.height-right.height) <= 1;

        return new tuple(isBalanced, height);

    }
    return check(r).isBalanced;
}


// Example usage:
// Create a balanced binary tree
const root = new treenode(1);
root.left = new treenode(2);
root.right = new treenode(3);
root.left.left = new treenode(4);
root.left.right = new treenode(5);

// Perform the check for balanced binary tree
console.log("Is the tree balanced ?");
console.log(isBalancedBinaryTree(root)); // Output: true (The binary tree is balanced)