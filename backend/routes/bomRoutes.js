import express from 'express';
import {
  fetchBoms,
  getBomById,
  createBom,
  updateBom,
  removeBom,
} from '../controllers/bomsControllers.js';

const router = express.Router();

router.route('/').get(fetchBoms).post(createBom);
router.route('/:id').get(getBomById).delete(removeBom).put(updateBom);

export default router;
