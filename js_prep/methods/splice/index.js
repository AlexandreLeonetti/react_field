const months = ['Jan', 'March', 'April', 'June'];

/* insert february and then replace june by may. */

months.splice(1, 0, 'February');
console.log(months);

months.splice(4, 1, 'May');

console.log(months);
months.push('June');
console.log(months);
