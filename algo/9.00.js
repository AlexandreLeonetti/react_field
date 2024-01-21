class treenode {
    constructor(data=0, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right= right;
    }
}

function traversal(r) {
	if (r) {
		traversal(r.left);
		// in order traversal;
		console.log(r.data);
		traversal(r.right);
	}
}


const root = new treenode(1);
root.left = new treenode(2);
root.right= new treenode(3);

root.left.left=new treenode(4);
root.left.right=new treenode(5);


root.right.left=new treenode(6);
root.right.right=new treenode(7);

traversal(root)