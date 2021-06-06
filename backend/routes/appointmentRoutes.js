import express from 'express';

const router = express.Router();
import {
  addAppointment,
  getAppointmentById,
} from '../controllers/appointmentController.js';

router.route('/').post(addAppointment);
router.route('/:id').get(getAppointmentById);

export default router;
