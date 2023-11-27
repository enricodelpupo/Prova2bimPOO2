import express from 'express';
import UserRouter from './routes/user';
import LanceRouter from './routes/lance';
import LeilaoRouter from './routes/leilao';

const app = express();
app.use(express.json());

app.use(LanceRouter);
app.use(LeilaoRouter);
app.use(UserRouter);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})