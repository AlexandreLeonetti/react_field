/* some promises pattern */

Promise.resolve(10)
.then(x => { throw x })
.then(x => console.log(`then ${x}`))
.catch(err => console.log(`error ${err}`))
.then(()=>Promise.resolve(2))
.catch(err => console.log( `error ${err}`))
.then(x => console.log(` then ${x}`));

/*
 *
 * an error thrown will land on the next catch
 * and will ignore other then statements in between
 */


