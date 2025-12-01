import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors({origin: 'http://127.0.0.1:5500'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export default app;