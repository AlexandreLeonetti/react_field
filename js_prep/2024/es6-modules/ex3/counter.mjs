//counter

if (!globalThis.num){
    globalThis.num = 0;
}

export let num = ++globalThis.num;


