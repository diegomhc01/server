import { marca } from './routes/marca.js';
import { app } from './app.js';
import { connectionDB } from './db.js';
import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
connectionDB();
//app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(marca);

app.listen(8080);
console.log('Servidor prendido',8080);