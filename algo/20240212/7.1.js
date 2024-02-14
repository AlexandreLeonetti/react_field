/*write a program that merge two llinked list.
 * also have to write the classes.
 */



class Node  {
    constructor(value=0, nextNode=null){
        this.value = value;
        this.n= nextNode;
    }
}



let list1 = new Node(7);
list1.n= new Node(8);
list1.n.n= new Node(12);
list1.n.n.n = new Node(22);


let l2 = new Node(10);
l2.n = new Node(11);
l2.n.n = new Node(15);
l2.n.n.n= new Node(50);
l2.n.n.n.n= new Node(500);

function merge(li1, li2){
    let dummyHead = new Node();
    let tail = dummyHead;

    while(li1 && li2){
        if(li1.value<li2.value){
            tail.n=li1;
            li1=li1.n;
        }else{
            tail.n=li2;
            li2=li2.n;
        }
        tail=tail.n;
    }
    
    tail.n = li1 || li2;
    return dummyHead;

}

let res  = merge(list1, l2);
while (res!== null){
    console.log(res.value);
    res=res.n;
}




