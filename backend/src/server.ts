import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res)=>{
    res.json({message: "hello Word"});
});

app.listen(3333);