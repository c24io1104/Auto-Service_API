import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import client from "./service/config";

dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

client.connect((err) => {
    if (err) {
        console.log("өгөгдлийн сантай холбогдоход алдаа гарлаа.", err);
    } else {
        console.log("өгөгдлийн сантай холбогдлоо.");
    }
});

const PORT = process.env.PORT || 3000;
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Express with TypeScript!");
});
app.listen(PORT, async () => {
    console.log(`Server runing on port ${PORT}`);
});

module.exports = app;