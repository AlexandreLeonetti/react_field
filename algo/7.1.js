class ListNode {
    constructor(data = 0, nextNode = null) {
      this.data = data;
      this.next = nextNode;
    }
  }
  
  function mergeTwoSortedLists(list1, list2) {
    // Creates a placeholder for the result
    const dummyHead = new ListNode();
    let tail = dummyHead;
  
    while (list1 && list2) {
      if (list1.data < list2.data) {
        tail.next = list1;
        list1 = list1.next;
      } else {
        tail.next = list2;
        list2 = list2.next;
      }
  
      tail = tail.next;
    }
  
    // Appends the remaining nodes of list1 or list2
    tail.next = list1 || list2;
  
    return dummyHead.next;
  }
  
  // Sample linked lists
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(9);
  
  const list2 = new ListNode(0);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(7);
/*
 console.log("list1");
  while (list1) {
    console.log(list1.data, '->');
    list1= list1.next;
  }
 
console.log("list2");
  while (list2) {
    console.log(list2.data, '->');
    list2= list2.next;
  }
 */ 
  // Test the function with the sample lists
  const mergedList = mergeTwoSortedLists(list1, list2);
  
  // Print the merged list
  let current = mergedList;


console.log("final list");


  while (current) {
    console.log(current.data, '->');
    current = current.next;
  }
  