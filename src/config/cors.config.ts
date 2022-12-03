import { CorsOptions } from "cors";
import dotenv from "dotenv";

dotenv.config();

const corsConfig: CorsOptions = {
     origin: function (origin: string | undefined, callback) {
          const whitelist = process.env.WHITELISTED_DOMAINS ? process.env.WHITELISTED_DOMAINS.split(",") : [];

          if (!origin || whitelist.indexOf(origin) !== -1) {
               callback(null, true);
          } else {
               callback(new Error(`\n ⚠️ [server] Attempt to fetch from unknown origin: ${origin}\n`), false);
          }
     },

     credentials: true,
};

export default corsConfig;
