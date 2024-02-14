/* write a function that tell if a binary tree is balanced or not */

class TreeNode{
    constructor(val=0, left=null, right=null){
        this.v=val;
        this.l=left;
        this.r=right;
    }
}
class Tuple {
    constructor(height=-1, isBalanced=true){
        this.height=height;
        this.isBalanced=isBalanced;
    }
}


function isBalanced(t){



    function check(node){
        /* post order traversal */
        if( node === null){
            return new Tuple();
        }

        let left = check(node.l);
        let right= check(node.r);

        /* if left.isBalanced or r... false return isBalanced(0,false);*/
        if( left.isBalanced === false || right.isBalanced === false){
            return new Tuple(0, false);
        }

        const h= Math.max(left.height, right.height) + 1; 
        const isB=Math.abs(left.height - right.height) <= 1; 
        const total = new Tuple(h,isB);
        return total; 

    }

    return check(t).isBalanced;
}

let  root       = new TreeNode(1);
root.l= new TreeNode(2);
root.r= new TreeNode(3);
root.l.l= new TreeNode(4);
root.l.r= new TreeNode(5);
root.l.l.l=new TreeNode(11);
root.l.l.l.l= new TreeNode(12);


const res = isBalanced(root);
console.log(res);
