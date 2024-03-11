// Existing interface (Legacy Mail)
class Mail {
    sendMail(msg) {
        console.log(`sent email : ${msg}`);
    }
}

// Target interface (Notif)
class Notif {
    sendNotif(msg) {
        console.log(`send notif : ${msg}`);
    }
}

// Adapter class
class Adapter extends Notif {
    constructor(legacyMail) {
        super();
        this.legacyMail = legacyMail;
    }

    sendNotif(msg) {
        this.legacyMail.sendMail(msg);
    }
}

// Usage
const legacyMail = new Mail();
const adapter = new Adapter(legacyMail);
adapter.sendNotif("hello world");

