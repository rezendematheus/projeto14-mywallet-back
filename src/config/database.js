import { MongoClient, MongoCompatibilityError } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)
let db;

try {
    await mongoClient.connect()
    db = mongoClient.db('wywallet-database')
} catch (error) {
    console.log(error.message)
}