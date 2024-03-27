// import dbPromise from "@/src/server/db";
import {Collection, CollectionOptions, Db} from "mongodb";

export class Entities {
    static async init<T extends Record<string, any>>(name: string,options?: CollectionOptions) {
        // const db = await dbPromise;
        // return db.collection<T>(name, options) as Collection<T>;
    }
}