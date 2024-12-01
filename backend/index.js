import express from "express";
import "dotenv/config";
import route from "./routes/routes.js";
import cors from "cors";
import fileUpload from "express-fileupload";

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    credentials: true,
    origin: "https://lomba-pedia.vercel.app",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(route);

app.listen(port);
