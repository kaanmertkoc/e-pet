import express from 'express';
const router = express.Router();
import {
  addPet,
  getPetById,
  deletePet,
  updatePet,
} from '../controllers/petController.js';

router.route('/').post(addPet);
router.route('/:id').get(getPetById).put(updatePet).delete(deletePet);

export default router;
