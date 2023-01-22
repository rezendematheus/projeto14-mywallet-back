import express from 'express';
import cors from 'cors';
import AuthRouter from './routes/AuthRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use(AuthRouter)

app.listen(5000, ()=>{
    console.log('server rodando');
})