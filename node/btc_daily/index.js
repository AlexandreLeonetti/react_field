/* 1 - let's inject the data into redis database.  DONE
 *
 * 2 TASK :  add discretionary value if needed and we are done.
 * perhaps build an adjustment server that is here only to replace the last
 * or few last values.
 * this would be possible via POST request
 * to either :
 * DELETE, CHANGE OR ADD element in the price history.
 * a bit like postman
 */

const express = require("express");
const cors  = require("cors");
const Redis = require("redis");
const redisClient =Redis.createClient() ;
const yf = require("yahoo-finance");




redisClient.connect()
const app = express();
app.listen(1111);



async function createHistory (){
    const price =  yf.historical({
    symbol  :"BTC-USD",
    from    :"2021-01-01",
    //    to      :"2023-11-01",
    }, function (err, data){
    try{
        console.log("yfinance API called");
    }catch(err){
        console.log(err);
    }
    });

    try {
        const result = await redisClient.rPush("history", [`${price}`]);
        console.log("historycal prices have been downloaded from yfinance");
        return result;
    }catch(e){
        console.log(e);
    }
}


async function getHistory(){
    const key = "history";
    try{
        const hist = await redisClient.lRange(key, -10, -1);
        console.log("getHistory has been called");
        return hist;
    }catch(e){
        console.log(e);
    }
}

// Init Server and Redis

createHistory();

// API end points

app.get("/history", async (req, res) =>{
    data = await getHistory();
    res.json(data);
});







