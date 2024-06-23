import { marca } from './routes/marca.js';
import { app } from './app.js';
import { connectionDB } from './db.js';
import express from 'express';

connectionDB();
app.use(express.json());
app.use(marca);

app.listen(8080);
console.log('Servidor prendido',8080);