import mongoose from "mongoose";

// DATA INSERTIONS
import Word from "@/models/Word";
import { words } from "@/data/words";

declare global {
  var mongoose: any;
}

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose || { conn: null, promise: null };

export const dbConnect = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "tagalogdb",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  // Word.insertMany(words);

  return cached.conn;
};
