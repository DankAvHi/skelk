import express, { Express } from "express";
import fs from "fs";
import https from "https";
import { HOST, HTTPS_PORT, HTTP_PORT, isDevelopment, SECURE, SSL_CERT_PATH, SSL_KEY_PATH } from "../config/app.config";
import { connectToDatabase } from "../services/connectToDatabase.service";

const launchApp = async (app: Express) => {
     await connectToDatabase();
     if (SECURE === true) {
          const http = express();
          http.get("*", function (req, res) {
               const host = isDevelopment ? `localhost:${HTTPS_PORT}` : req.headers.host;
               res.redirect(302, "https://" + host + req.url);
          });
          http.listen(HTTP_PORT);
          if (!SSL_CERT_PATH || !SSL_KEY_PATH) {
               throw new Error(`❌ [server] SSL files paths not provided in .env file`);
          }

          const httpsOptions = {
               key: fs.readFileSync(SSL_KEY_PATH),
               cert: fs.readFileSync(SSL_CERT_PATH),
          };

          const server = https.createServer(httpsOptions, app);

          server.listen(HTTPS_PORT, () => {
               console.log(
                    `\n⚡[SERVER] SECURE Server launched at host: ${HOST} port: ${HTTPS_PORT} / https://localhost:${HTTPS_PORT}`
               );
          });
     } else {
          app.listen(HTTP_PORT, () => {
               console.log(
                    `\n⚡[SERVER] Server launched at host: ${HOST} port: ${HTTP_PORT} / http://localhost:${HTTP_PORT}`
               );
          });
     }
};

export default launchApp;
