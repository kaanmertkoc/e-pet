import express from 'express';
const router = express.Router();
import {
  addVet,
  getVetById,
  updateVet,
  deleteVet,
  getVets,
  loginVet,
} from '../controllers/vetController.js';

router.route('/').post(addVet).get(getVets);
router.route('/login').post(loginVet);
router.route('/:id').get(getVetById).put(updateVet).delete(deleteVet);

export default router;
