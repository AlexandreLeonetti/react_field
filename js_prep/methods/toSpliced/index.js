/* to Spliced */

 const months = ["Jan", "Mar", "Apr", "June"];
console.log(months);
const m2 = months.toSpliced(1,0,"February");

console.log(m2);

const m3 = m2.toSpliced(4,1,"May");
console.log(m3);
