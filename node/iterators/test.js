const makeDragon = require("./make-dragon");


const dragonArmy = {
    [Symbol.iterator]:()=>{
        return {
            next : () => {
                const enoughDragonsSpawned = Math.random() > 0.75;
                if (!enoughDragonsSpawned ){
                    return {
                        value : makeDragon(),
                        done : false
                    }
                }
                return {done:true};

            }
        }
    }
}


for ( d of dragonArmy ){
    console.log(d);
}


