import * as robot from "./robot.js";

function sleep(ms) {
          return new Promise((resolve) => {
                            setTimeout(resolve, ms);
                          });
}

async function loopAndInit(arr, redisClient){//goes through all array elts asyncly
    for(const item of arr){
        const res = await initHistory(item, redisClient);
    }
    createMA_10(redisClient);//  here it  works after await.
}

async function initHistory(price, redisClient){

        try{
            const result = await redisClient.rPush("history", [`${price}`]);
            if(result>101){
                const popped = await redisClient.lPop("history");
                //console.log("history inited");

            }
       }catch(e){
            console.log("Error pushing init values to Redis: ");
            console.log(e);
       }
}

async function createMA_10(redisClient){
    const last10 = await redisClient.lRange("history", -10, -1);
    //mean of last 10 elements.
    const sum = last10.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    const avg = (sum / last10.length) || 0;

    try {
        const result = await redisClient.rPush("ma10", [`${avg}`]);
        if (result>101){
            const popped = await redisClient.lPop("ma10");
            //console.log("ma10 updated");
        }
    }catch(e){
        console.log("error redis createMA_10 ",e);
    }
}

async function createMA_25(redisClient){
    const last25 = await redisClient.lRange("history", -25, -1);
    //mean of last 25 elements.
    const sum = last25.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    const avg = (sum / last25.length) || 0;

    try {
        const result = await redisClient.rPush("ma25", [`${avg}`]);
        if (result>101){
            const popped = await redisClient.lPop("ma25");
            //console.log("ma25 updated");
        }
    }catch(e){
        console.log("error redis createMA_25 ",e);
    }
}


async function injectHistPrice(symbol, redisClient, getTickerPrice){
                //console.log("injectHistPrice");
                const price = await getTickerPrice(symbol);
                try {
                                  const result = await redisClient.rPush("history", [`${price}`]);
                                  if (result > 501){
                                    const popped = await redisClient.lPop("history");
                                  }
                                } catch (e) {
                                                      console.log("Error pushing to Redis:");
                                                      console.log(e);
                                                }
                return price;
}


async function injectDailyClose (symbol, redisClient, getTickerPrice){
                const price = await getTickerPrice(symbol);
                try {
                                  const result = await redisClient.rPush("daily", [`${price}`]);
                                  if (result > 501){
                                    const popped = await redisClient.lPop("daily");
                                  }
                                } catch (e) {
                                                      console.log("Error pushing to Redis:");
                                                      console.log(e);
                                                }
                return price;
}

async function getAllCloses(symbols,getTickerPrice = robot.getRawTicker){
     const price = await getTickerPrice(symbols);
     return price;
}



/*module.exports.sleep        =   sleep;
module.exports.injectDailyClose =   getAllCloses;
*/
export {
    sleep,
    getAllCloses
};
