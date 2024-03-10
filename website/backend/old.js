import * as utils from "./utils.js";



const res = await utils.getAllCloses(`["BTCUSDT","ETHUSDT","SEIUSDT"]`);
console.log(res);
