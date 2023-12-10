/* toLocaleString */

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeStr = array1.toLocaleString('fr', {timeZone:'UTC'});

console.log(localeStr);
