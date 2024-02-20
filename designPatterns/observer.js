/* example of the observer pattern */

/* Observer interface */
class Observer{
    update () {
        throw new Error("Method update must be implemented");
    }
}


/* Subject/Publisher, Observable Class */
class Publisher{
    constructor(){
        this.observers = [];
    }

    /* Add observer to the list */
    addSub(observer){
        this.observers.push(observer);
    }

    /* Remove observer from the list */
    removeObserver(observer){
        this.observer = this.observers.filter(obs => obs !== observer);
    }

    /* Notify all observers */
    notify(){
        this.observers.forEach(observer => observer.update);
    }
}


/* define  class subscriber */
class Subscriber {
    receiveMessage(message){
        console.log(`Receive message : ${message}`);
    }
}


/* usage */
const publisher = new Publisher();
const subscriber1= new Subscriber();
const subscriber2= new Subscriber();
const subscriber3= new Subscriber();

/* subscribers subscribe to the publisher */
publisher.addSub(subscriber1);
publisher.addSub(subscriber2);

/* publisher send a message */
publisher.notify("Hello All");




