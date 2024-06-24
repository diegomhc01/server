import { Router } from "express"
import { registro } from '../controllers/marca.js';

export const marca = Router();
console.log('registro ',registro);
marca.post('/registro', registro);

export default marca;