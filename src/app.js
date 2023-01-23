import express from 'express';
import cors from 'cors';
import AuthRouter from './routes/AuthRoutes.js';
import RegistryRouter from "./routes/RegistryRoutes.js"

const app = express();
app.use(express.json());
app.use(cors());

app.use([AuthRouter, RegistryRouter])

app.listen(5000, ()=>{
    console.log('server rodando');
})