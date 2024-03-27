// import {MongoClient} from "mongodb";
//
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url)

// db.ts
import { MongoClient, Db } from 'mongodb';
import {PrismaClient} from "@prisma/client";
// import {PrismaClient} from "@prisma/client";

class Database {
    private static instance: Database;
    private db: Db | null = null;

    private constructor() {}

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public async connect(): Promise<Db> {
        try {
            if (!this.db) {
                const client = new MongoClient('mongodb://root:12345Qwer@localhost:27017');
                await client.connect();
                this.db = client.db('funny');
                console.log("db connect")
            }
            return this.db;
        } catch (e: any) {
            throw new Error("db >>> ", e)
        }

    }
}

// export default Database.getInstance().connect();

export const prismaClient = new PrismaClient();
