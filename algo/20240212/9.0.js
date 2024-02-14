/* let's write a program that goes trough each tree nodes
 * using preorder traversal
 * in order traversal
 * post order traversal
 * recursively/
 */


/* class tree node */

class TreeNode {
    constructor(val=0, left=null, right=null){
        this.val=val;
        this.l=left;
        this.r=right;
    }
}



function traversal(t){
    if(t===null){
        return
    }



    /* */
    //console.log("pre order : ", t.val);
    traversal(t.l);
    //console.log("in order",t.val);
    traversal(t.r);
    console.log("post order : ", t.val);


    


}


/* tree declaration */

let tree =  new TreeNode(4);
tree.l   = new TreeNode(2);
tree.l.l = new TreeNode(1);
tree.l.r = new TreeNode(3);
tree.r   = new TreeNode(6);
tree.r.l = new TreeNode(5);
tree.r.r = new TreeNode(7);

traversal(tree);
