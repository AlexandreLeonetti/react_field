// Define the Subject class
class Publisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }

    notifySubscribers(message) {
        this.subscribers.forEach(subscriber => subscriber.receiveMessage(message));
    }
}

// Define the Observer class
class Subscriber {
    receiveMessage(message) {
        console.log(`Received message: ${message}`);
    }
}

// Usage
const publisher = new Publisher();
const subscriber1 = new Subscriber();
const subscriber2 = new Subscriber();
const subscriber3 = new Subscriber();

// Subscribers subscribe to the publisher
publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

// Publisher sends a message
publisher.notifySubscribers("Hello, subscribers!");

// Subscriber2 unsubscribes
publisher.unsubscribe(subscriber2);

// Publisher sends another message
publisher.notifySubscribers("Another message for subscribers!");

// Subscriber3 subscribes
publisher.subscribe(subscriber3);

// Publisher sends a final message
publisher.notifySubscribers("Final message for subscribers!");
