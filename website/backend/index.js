// Import the MongoDB client
import { MongoClient } from 'mongodb';
import * as utils from "./utils.js";

// MongoDB connection URI
//const uri = 'mongodb://127.0.0.1:27017'; // Update with your MongoDB URI
const uri =`mongodb+srv://alleo:35ILYYVe27NFSxN8@cluster0.7bdcljv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Database name
const dbName = 'trading'; // Update with your database name

// Function to save JSON data to MongoDB
async function saveDataToMongoDB(jsonData) {
    try {
        // Connect to MongoDB
        const client = new MongoClient(uri );
        const conn = await client.connect();

        
        // Access the database
        const db = client.db(dbName);

        // Access the collection (or create it if it doesn't exist)
        const collection = db.collection('priceTest'); // Update with your collection name

        // Insert the JSON data into the collection
        //const result = await collection.insertMany(jsonData);
        const result = await collection.insertOne(jsonData);
        console.log(`${result.insertedCount} documents inserted`);

        // Close the connection
        client.close();
    } catch (error) {
        console.error('Error saving data to MongoDB:', error);
    }
}

// Example usage
const jsonData = [
    { symbol: 'BTCUSDT', price: '51214.99000000' },
    { symbol: 'ETHUSDT', price: '2963.15000000' },
    { symbol: 'SEIUSDT', price: '0.86270000' }
];








async function inject(){

    const res = await utils.getAllCloses(`["BTCUSDT","ETHUSDT","SEIUSDT"]`);
    const total = { prices : res }; 
    const save = await saveDataToMongoDB(total);

}


//inject();



async function retrieveLast20FromCollection() {
    try {
        // Connect to MongoDB
        const client = new MongoClient(uri);
        await client.connect();

        // Access the database
        const db = client.db(dbName);

        // Access the collection
        const collection = db.collection('priceTest');

        // Query to retrieve the last 20 documents, sorted by timestamp in descending order
        const query = collection.find().sort({ _id: -1 }).limit(20);

        // Execute the query and convert the result to an array
        const result = await query.toArray();

        // Close the connection
        client.close();

        return result;
    } catch (error) {
        console.error('Error retrieving data from MongoDB:', error);
        throw error;
    }
}

// Example usage
retrieveLast20FromCollection()
    .then(result => console.log(result))
    .catch(error => console.error(error));

