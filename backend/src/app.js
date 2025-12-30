import cookieParser from "cookie-parser";
import express, { json, urlencoded } from "express";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(json({ limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(errorHandler);

export { app };
