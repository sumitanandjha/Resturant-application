import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from "path";
import { dbConnection } from  "./database/dbconnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: "./config/config.env" });

const __dirname = path.resolve();



app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Corrected 'extended'

dbConnection();
app.use(errorMiddleware);
app.use('/api/v1/reservation', reservationRouter);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/Frontend/dist/index.html"));
})

export default app;
