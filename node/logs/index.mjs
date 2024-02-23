import pino from "pino";
import * as schedule from "node-schedule";

function createLogger() {
    return pino({}, pino.destination(`./logs/${logCurrentDay()}.log`));
}

function logCurrentDay() {
    const currentDate = new Date();
//    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() +  1}-${currentDate.getDate()}`;
    const formattedDate = currentDate;
    return formattedDate;
}

let logger = createLogger();

const m1 = "*/2 * * * * *"; // Adjust cron expression as needed

schedule.scheduleJob(m1, function () {
    // Recreate the logger with a new destination for the current day
    logger = createLogger();
    logger.info(`hello time`);
});
