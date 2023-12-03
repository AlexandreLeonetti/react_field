/* not available on nodejs, very few compatibilities */
const asyncIterable = (async function* (){
    for(let i=0; i<5 ; i++){
        await new Promise ((resolve) => setTimeout(resolve, 10*1));
        yield i;
    }
})();

//asyncIterable();
Array.fromAsync(asyncIterable).then((array) => console.log(array));


