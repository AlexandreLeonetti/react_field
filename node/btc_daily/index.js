var yf = require("yahoo-finance");

yf.historical({
    symbol  :"BTC-USD",
    from    :"2021-01-01",
//    to      :"2023-11-01",
}, function (err, data){
    try{
        console.log(data);
    }catch(err){
        console.log(err);
    }
});


