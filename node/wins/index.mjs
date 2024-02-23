import winston from "winston";
import * as schedule from "node-schedule";

// Create a single logger instance with a default transport
const logger = createLogger();

function createLogger() {
    return winston.createLogger({
        transports: [
            new winston.transports.File({
                filename: `./logs/${logCurrentDay()}.log`
            })
        ]
    });
}

function logCurrentDay() {
    const currentDate = new Date();
//    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    //return formattedDate;
  return currentDate.getSeconds();
}

function updateLoggerDestination(x) {
    const newDestination = `./logs/${x}.log`;
    /*
    logger.transports.forEach(transport => {
        transport.filename = newDestination;
    });
    */
    logger.transports.forEach(transport => {
                if (transport instanceof winston.transports.File) {
                                transport.filename = newDestination;
                                transport.reopen(); // Manually reopen the transport
         }
     });
}

const m1 = "*/2 * * * * *"; // Adjust cron expression as needed

// Define the job function
let fast = schedule.scheduleJob(m1, function () {
    const day = logCurrentDay();
    // Update the logger's destination to the new file for the current day
    updateLoggerDestination(day);
    logger.info(`hello ${day}`);
});

