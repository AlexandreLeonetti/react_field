import { EventEmitter } from "events";
import { readFile } from "fs";

function findRegex (files, regex){
   const emitter = new EventEmitter();
    
    for (const file of files){
        readFile(file, "utf-8", (err, content) => {
            if(err){
                return emitter.emit("error", err);
            }
            
            emitter.emit("fileread", file);

            const match = content.match(regex);

            if(match){
                match.forEach(elem => emitter.emit("found", file, elem));
            }
        });
    }
    return emitter;
}

findRegex(
    ['file1.txt', 'file2.json'], /hello \w+/g
).on('fileread', file => console.log(`${file} was read`))
 .on('found', (file, match) => console.log(`Matched "${match}" in ${file} `))
 .on('error', err => console.error(`Error emitted ${err.message}`));

/*
 * it is recommended to always register a error event,
 * as the class EventEmitter is designed to throw an error
 * and edxit the app if an error happens.
 */


