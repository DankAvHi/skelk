import { BooleanResponse, BooleanResponseClient } from "./api.response";

export type OrderBackCallRequest = { phoneNumber: string; name: string; [key: string]: string };
export type OrderBackCallResponse = BooleanResponse;
export type OrderBackCallResponseClient = BooleanResponseClient;
