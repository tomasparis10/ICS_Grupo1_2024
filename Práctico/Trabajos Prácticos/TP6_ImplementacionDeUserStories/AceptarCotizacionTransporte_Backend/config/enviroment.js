import * as dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 5000;
export const client = process.env.CLIENT_ORIGIN;

