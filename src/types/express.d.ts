import { admin } from "@prisma/client";

declare global {
     namespace Express {
          interface User extends User, admin {}
     }
}
