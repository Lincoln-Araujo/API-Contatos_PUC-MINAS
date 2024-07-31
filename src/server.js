import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import apiRouter from './api-v1/api-router';

const app = express();

app.use(bodyParser.json()); //associar o json ao objeto req.body
app.use(bodyParser.urlencoded({extended: false})); // associa os parâmetros de URL e Body com formato urlEncoded ao objeto req.params

app.use('/api/v1', apiRouter);
app.use('/', (req,res) => res.send('-- API Contatos --'));

const porta = 5500;
http.createServer(app).listen(porta, () => console.log(`Servidor pronto na porta ${porta}`));