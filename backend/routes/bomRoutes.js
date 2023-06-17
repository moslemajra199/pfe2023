import express from 'express';
import { fetchBoms } from '../controllers/bomsControllers.js';

const router = express.Router();

router.route('/').get(fetchBoms);

export default router;
