import express from 'express';
import {
  fetchComponents,
  createComponent,
  getComponent,
  updateComponent,
  removeComponent
} from '../controllers/componentsController.js';
const router = express.Router();

router.route('/').get(fetchComponents).post(createComponent);
router
  .route('/:id')
  .get(getComponent)
  .put(updateComponent)
  .delete(removeComponent);

export default router;
