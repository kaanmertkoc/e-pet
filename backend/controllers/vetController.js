import asyncHandler from 'express-async-handler';
import Vet from '../models/vetModel.js';

// @desc Add vet
// @route POST /api/vet/
// @access Admin
const addVet = asyncHandler(async (req, res) => {
  const { name, email, password, patients } = req.body;
  const vetExists = await Vet.findOne({ email });

  if (vetExists) {
    res.status(400);
    throw new Error('Vet already exists');
  }

  const vet = await Vet.create({
    name,
    email,
    password,
    patients,
  });

  if (vet) {
    res.status(201).json({
      _id: vet._id,
      name: vet.name,
      password: vet.password,
      patients: vet.patients,
    });
  } else {
    res.status(400);
    throw new Error('Invalid vet data.');
  }
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  PUBLIC
const loginVet = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const vet = await Vet.findOne({ email });

  if (vet && (await vet.matchPassword(password))) {
    res.json({
      _id: vet._id,
      name: vet.name,
      email: vet.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc Get vets
// @route GET /api/vet
// @access PUBLIC
const getVets = asyncHandler(async (req, res) => {
  const vets = await Vet.find({});
  res.json(vets);
});

// @desc    Get vet by ID
// @route   GET /api/vet/:id
// @access  user
const getVetById = asyncHandler(async (req, res) => {
  const vet = await Vet.findById(req.params.id);
  if (vet) {
    res.json(vet);
  } else {
    res.status(404);
    throw new Error('vet not found ');
  }
  res.json(vet);
});

// @desc Delete vet by id
// @route DELETE /api/vet
// @access admin
const deleteVet = asyncHandler(async (req, res) => {
  const vet = await Vet.findById(req.params.id);
  if (vet) {
    await vet.remove();
  } else {
    res.status(404);
    throw new Error('vet not found. ');
  }
});

// @desc Update vet
// @route PUT /api/vet
// @access vet
const updateVet = asyncHandler(async (req, res) => {
  const vet = await Vet.findById(req.pet._id);
  if (vet) {
    vet.name = req.body.name || vet.name;
    vet.email = req.body.email || vet.email;
    vet.patients = req.body.patients || pet.patients;

    const updatedVet = await vet.save();
    res.json({
      _id: updatedVet._id,
      name: updatedVet.name,
      email: updatedVet.email,
      patients: updatedVet.patients,
    });
  } else {
    res.status(404);
    throw new Error('Vet not found.');
  }
});

export { addVet, getVetById, deleteVet, updateVet, getVets, loginVet };
