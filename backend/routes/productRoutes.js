import express from 'express';
import {
  fetchProducts,
  getProduct,
  updateProduct,
  createProduct,
  removeProduct,
  assignBomToProduct,
} from '../controllers/productControllers.js';
const router = express.Router();

router.route('/').get(fetchProducts).post(createProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(removeProduct);
router.route('/:productId/boms/:bomId').put(assignBomToProduct);

export default router;
