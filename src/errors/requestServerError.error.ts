import { Response } from "express";
import serverError from "./ServerError.error";

type RequestServerError = (error: unknown, res: Response) => Promise<void> | void;

const requestServerError: RequestServerError = async (error, res) => {
     res.statusMessage = "Server Error";
     res.status(500).json({ error: "Server Error" });
     serverError(error);
};

export default requestServerError;
