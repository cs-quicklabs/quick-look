import { PrismaClient } from "@prisma/client";

let connection: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  connection = new PrismaClient();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
  }
  connection = global.__db;
}

export { connection };