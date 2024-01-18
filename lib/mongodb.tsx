// lib/mongodb.tsx
import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = new MongoClient(process.env.MONGODB_URI || '');

    await client.connect();
    const db = client.db('Products');

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}

export { connectToDatabase }