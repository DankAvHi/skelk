import ConnectSQLite3 from "connect-sqlite3";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import expressSession, { Store } from "express-session";
import passport from "passport";
import path from "path";
import apiRouter from "./api/api";
import launchApp from "./app/launchApp";
import { CLIENT_INDEX_PATH, CLIENT_PATH, COOKIE_OPTIONS, SESSION_SECRET, UPLOADS_PATH } from "./config/app.config";
import corsConfig from "./config/cors.config";
import LocalStrategy from "./middlewares/localStrategy.middleware";
import { API_ROUTE } from "./shared/api/api.shared";

const app = express();

if (!SESSION_SECRET) {
     throw new Error(`\n⛔[ERROR] SESSION_SECRET is not provided in .env file\n`);
}

const SQLiteStore = ConnectSQLite3(expressSession);
const store = new SQLiteStore({ table: "sessions", db: "sessions.db" });

app.use(express.json());
app.use(cors(corsConfig));
app.use(express.static(path.resolve(CLIENT_PATH)));
app.use(express.static(path.resolve(UPLOADS_PATH)));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
     expressSession({
          resave: true,
          secret: SESSION_SECRET,
          rolling: true,
          saveUninitialized: false,
          cookie: COOKIE_OPTIONS,

          store: store as Store,
     })
);

app.use(passport.initialize());
app.use(passport.session());
LocalStrategy();

app.use(API_ROUTE, apiRouter);

app.get("*", (_, res) => res.sendFile(path.resolve(CLIENT_INDEX_PATH)));

launchApp(app);
