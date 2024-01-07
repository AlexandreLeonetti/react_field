import {readFile} from "fs";

function readJson (filename, callback){
    readFile(filename, "utf8", (err, data) => {
        let parsed;
        if(err){
            /* propagate errors */
            return     callback("err1",err);
        }


        try {
            /* parse the file content */
            parsed = JSON.parse(data);
        }catch(err){
            /* catch parsing errors */
            return callback("catch ",err);
        }

        /* no error, just propagate the data. */
        callback( parsed);

    });



}


readJson("./j.json", (x)=>console.log(x));
