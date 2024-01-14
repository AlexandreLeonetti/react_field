//const createStore = require("./fake-store-sync");
const createStore   = require("./fake-store-async");

const store = createStore();

const customers = {
    [Symbol.asyncIterator]:function(){
        let i = 0;
        return {
            next: async function(){
                i++;
                const customer = await store.get("customer",i);

                if(!customer){
                    return {done : true}
                }

                customer.foods = await store.get("food",i);

                return {
                    value:customer, 
                    done:false
                }
            }
        }
    }
}
/*
async function test(){
for await ( const c of customers ){
    console.log(c);
}
}

test();
*/


;(async function(){
    const iterator=  customers[Symbol.asyncIterator]();
    const c1 = (await iterator.next()).value ;
    console.log(c1);
    const c2 = (await iterator.next()).value ;
    console.log(c2);
    const c3 = (await iterator.next()).value ;
    console.log(c3);
    const c4 = (await iterator.next()).value ;
    console.log(c4);

})();
