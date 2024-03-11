/* testing if i can demonstrate t6he adapter patter */


class Mail { // this is old standard
    sendMail(msg){
        console.log(`sent email : ${msg}`);
    }
}


class Notif {
    sendNotif(msg){
        console.log(`send notif : ${msg}`);
    }
}



class Adapter {
    constructor(legacyMail){
        this.legacy = legacyMail.sendMail; 
    }

    pushNotif(msg){
        this.legacy(msg); 
    }
}


const legacy1 = new Mail();
const adapter1= new Adapter(legacy1);
const notif1  = new Notif();

adapter1.pushNotif("hello world");
