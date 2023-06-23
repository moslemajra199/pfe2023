import express from 'express';
import {
  fetchProducts,
  getProduct,
  updateProduct,
  createProduct,
  removeProduct,
} from '../controllers/productControllers.js';
const router = express.Router();

router.route('/').get(fetchProducts).post(createProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(removeProduct);


export default router;
