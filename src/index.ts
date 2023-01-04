import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes/index"
import dbInit from "./db/init";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT : number = parseInt(process.env.PORT);

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use('/api/v1', routes)


try {
    dbInit()
    app.listen(PORT, () => {
        console.log("Server started on port : ", PORT);
    })
} catch (error) {
    console.log(error)
}
