import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const connectToDatabase = async () => {
     await prisma
          .$connect()
          .then(() => console.log(`⚡ [DATABASE] succeful connected to database`))
          .catch((error) => {
               throw new Error(`❌ [DATABASE] cannot connect to database: ${error}`);
          });
};
