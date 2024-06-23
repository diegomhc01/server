import { Router } from "express"
import { registro } from '../controllers/marca.js';

export const marca = Router();
marca.get('/registro', registro);

export default marca;