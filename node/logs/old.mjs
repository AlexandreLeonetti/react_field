import pino from "pino";
import * as schedule from "node-schedule";


function logCurrentDay() {
              const currentDate = new Date();
              const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
              return formattedDate;
}

const m1= "*/5 * * * * *";//m1

let fast  = schedule.scheduleJob(m1, function (){
        const day = logCurrentDay();
        const logger = pino({ }, `./logs/${day}.log`);

        logger.info(`hello ${day}`);

});
