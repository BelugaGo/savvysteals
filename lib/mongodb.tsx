import { MongoClient, Db } from 'mongodb';

// You can create an interface for the return type of connectToDatabase if needed
interface DatabaseConnection {
    client: MongoClient;
    db: Db;
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase(): Promise<DatabaseConnection> {
    if (cachedClient && cachedDb) {
        // Return the cached client and database if already connected
        return { client: cachedClient, db: cachedDb };
    }

    // Ensure that the MONGODB_URI environment variable is set
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("The MONGODB_URI environment variable is not set.");
    }

    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB server
        await client.connect();
        const db = client.db('Products'); // Replace 'Products' with your database name

        // Cache the database connection and return it
        cachedClient = client;
        cachedDb = db;

        return { client, db };
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        throw error; // Rethrow the error for further handling
    }
}

export { connectToDatabase };
