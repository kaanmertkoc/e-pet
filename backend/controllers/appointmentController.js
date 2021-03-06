import asyncHandler from 'express-async-handler';
import Appointment from '../models/appointmentModel.js';

// @desc Add appointment
// @route POST /api/appointment/
// @access PUBLIC

const addAppointment = asyncHandler(async (req, res) => {
  const { pet, appType, vet, date, owner } = req.body;

  const appointment = await Appointment.create({
    pet,
    appType,
    vet,
    date,
    owner,
  });
  if (appointment) {
    res.status(201).json({
      _id: appointment._id,
      pet: appointment.pet,
      appType: appointment.appType,
      vet: appointment.vet,
      owner: appointment.owner,
      date: appointment.date,
    });
  } else {
    res.status(400);
    throw new Error('Invalid appointment data. ');
  }
});

// @desc Get appointment by user Id
// @route GET /api/appointment/:id
// @access PUBLIC
const getAppointmentById = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404);
    throw new Error('Appointment not found. ');
  }
});

// @desc Get appointments
// @route GET /api/appointment
// @access PUBLIC
const getAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({});
  res.json(appointments);
});

export { addAppointment, getAppointmentById, getAppointments };
