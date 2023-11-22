/* some event loop demo */

setTimeout(() => console.log(1), 0);

console.log(2);

new Promise(res => {
    console.log(3);
    res();
}).then(()=> console.log(4))
.then(()=> console.log(41))
.then(()=>console.log(42));

setTimeout(()=> console.log(101),0);
console.log(5);


/* commentary about excecution 
 * setTimeout is executed asynchronously and the instruction 
 * will be moved to the MACROTASK queue (least priority)
 * we need the call stack to be totally empty before it executes.
 * so 1 will appear last.
 *
 * next is 2. called sync. so first is 2.
 *
 * new Promise has a constructor call back.
 * constructor is called synchronously, so 
 * the sequence is 2,3.
 *
 * the then statement is called asynchronously, even if it has no delay
 * but then statements are placed in the Micro_Task queue, 
 * which has medium priority, it will wait 
 * for any Sync statement to be executed.
 *
 * so 5 comes after
 *
 * sequence is now 2,3,5
 *
 * microtask queue has priority over macro so next is 4,1.
 */
