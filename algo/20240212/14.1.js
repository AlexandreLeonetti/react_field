/* write a program that can return if a binary tree is 
 * a binary search tree */



/* class binary tree */
class TreeNode {
    constructor(val=0, left = null, right = null){
        this.v = val;
        this.l = left;
        this.r = right;
    }
}

/* some binary tree instance */
const root = new TreeNode(8);
root.l= new TreeNode(3);
root.r= new TreeNode(10);
root.l.l= new TreeNode(1);
root.l.r= new TreeNode(6);
root.r.r= new TreeNode(14);
root.l.r.l= new TreeNode(4);
root.l.r.r= new TreeNode(7);
root.r.r.l= new TreeNode(13);


/* function isBST */


function isBST(left = Number.NEGATIVE_INFINITY,r,right= Number.POSITIVE_INFINITY){
    if(r==undefined){
        return true;
    }else if(!(left<=r.v&& r.v<=right)){
            return false;
    }



    return isBST( left,r.l, r.v)&& isBST(r.v, r.r, right);
}

console.log(isBST(Number.NEGATIVE_INFINITY,root,Number.POSITIVE_INFINITY));



