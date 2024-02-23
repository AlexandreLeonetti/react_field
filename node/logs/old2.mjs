import pino from "pino";
import * as schedule from "node-schedule";

// Create a single logger instance for all jobs
const logger = pino({}, pino.destination(`./logs/${logCurrentDay()}.log`));

function logCurrentDay() {
/*    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() +  1}-${currentDate.getDate()}`;
    */
    const formattedDate = Math.random(0,1);
    return formattedDate;
}

const m1 = "*/5 * * * * *"; // Adjust cron expression as needed

// Define the job function
let fast  = schedule.scheduleJob(m1, function (){
        const day = logCurrentDay();
        logger.info(`hello ${day}`);
});
