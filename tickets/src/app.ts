import "express-async-errors";

import { json } from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import { NotFoundError, errorHandler } from "@harishkrishnan1993/common";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
