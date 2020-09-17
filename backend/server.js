import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middleware/error";
import routes from "./routes";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

app.use(express.json({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api", routes);

app.use(errorHandler);

app.listen(port, () => console.log(`server is running on ${port} port`));
