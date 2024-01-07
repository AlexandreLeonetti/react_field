// logger.js

//exports  a function as log
export function log (message){
    console.log(message);
}

/* export a constant as default level */
export const DEFAULT_LEVEL = "info";


/* exports an object */
export const levels = {
    error : 0,
    debug : 1,
    warn  : 2
}


export class Logger {
    constructor(name){
        this.name = name;
    }

    log(message){
        console.log(`[${this.message}]  ${message}`);
    }
}



