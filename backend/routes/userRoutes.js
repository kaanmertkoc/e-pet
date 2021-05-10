import express from 'express';
const router = express.Router();
import {
  registerUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUserProfile,
  deleteUser,
  loginUser,
} from '../controllers/userController.js';

router.route('/').post(registerUser).get(getUsers);
router.post('/login', loginUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').get(getUserById).delete(deleteUser);

export default router;
