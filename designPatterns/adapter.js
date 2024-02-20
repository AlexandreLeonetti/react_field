/* here is an example of an adapter design pattern */

class LegacyMail{
    sendMail(content){
        console.log(`sending an email: ${content}`);
    }
}


class NewNotifications {
    pushNotif(message){
        console.log(`pushing message : ${message}`);
    }
}


/* adapter */

class Adapter {
    constructor(legacyMail){
        this.legacyMail = legacyMail;
    }

    pushNotif(msg){
        const emailContent = `Notification : ${msg}`;
        this.legacyMail.sendMail(emailContent);
    }
}


/* usage */

const legacyMailService =  new LegacyMail();
const mailServiceAdapter=  new Adapter(legacyMailService);

const newNotifService   =  new NewNotifications();

//newNotifService.pushNotif("Hello World");
mailServiceAdapter.pushNotif("Hello world");



