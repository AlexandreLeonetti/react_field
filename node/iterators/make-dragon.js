const randomItem =  require("./random-item.js");



const makeDragon = () => {
    const dragonSize = ['big','medium', 'small'];
    const dragonAbilities = ['fire', 'ice', 'lightning'];

    return randomItem(dragonSize) + " " + randomItem(dragonAbilities) + " " + 
        "dragon" ;
}

module.exports = makeDragon;

