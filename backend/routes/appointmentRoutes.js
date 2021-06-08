import express from 'express';

const router = express.Router();
import {
  addAppointment,
  getAppointmentById,
  getAppointments,
} from '../controllers/appointmentController.js';

router.route('/').post(addAppointment).get(getAppointments);
router.route('/:id').get(getAppointmentById);

export default router;
