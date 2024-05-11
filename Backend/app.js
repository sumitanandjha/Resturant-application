import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from  "./database/dbconnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Corrected 'extended'

dbConnection();
app.use(errorMiddleware);
app.use('/api/v1/reservation', reservationRouter);

export default app;
