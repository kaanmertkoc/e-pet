import asyncHandler from 'express-async-handler';
import Pet from '../models/petModel.js';

// @desc Add pet
// @route POST /api/pet/
// @access VET
const addPet = asyncHandler(async (req, res) => {
  const { image, name, owner, race, age, sex, dateOfBirth, vaccines } =
    req.body;
  const petExists = await Pet.findOne({ owner });

  if (petExists) {
    res.status(400);
    throw new Error('Pet already exists');
  }

  const pet = await Pet.create({
    image,
    name,
    owner,
    race,
    age,
    sex,
    vaccines,
    dateOfBirth,
  });

  if (pet) {
    res.status(201).json({
      _id: pet._id,
      image: pet.image,
      name: pet.name,
      owner: pet.owner,
      race: pet.race,
      age: pet.age,
      sex: pet.sex,
      dateOfBirth: pet.dateOfBirth,
      vaccines: pet.vaccines,
    });
  } else {
    res.status(400);
    throw new Error('Invalid pet data.');
  }
});

// @desc    Get pet by ID
// @route   GET /api/pet/:id
// @access  public
const getPetById = asyncHandler(async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404);
    throw new Error('pet not found ');
  }
  res.json(pet);
});

// @desc Delete pet by id
// @route DELETE /api/pet
// @access vet
const deletePet = asyncHandler(async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (pet) {
    await pet.remove();
  } else {
    res.status(404);
    throw new Error('Pet not found. ');
  }
});

// @desc Update pet
// @route PUT /api/pet
// @access vet
const updatePet = asyncHandler(async (req, res) => {
  const pet = await Pet.findById(req.pet._id);
  if (pet) {
    pet.name = req.body.name || pet.name;
    pet.image = req.body.image || pet.image;
    pet.owner = req.body.owner || pet.owner;
    pet.race = req.body.race || pet.race;
    pet.age = req.body.age || pet.age;
    pet.sex = req.body.sex || pet.sex;

    const updatedPet = await pet.save();
    res.json({
      _id: updatedPet._id,
      name: updatedPet.name,
      image: updatedPet.image,
      owner: updatedPet.owner,
      race: updatedPet.race,
      age: updatedPet.age,
      sex: updatedPet.sex,
    });
  } else {
    res.status(404);
    throw new Error('Pet not found.');
  }
});

export { addPet, getPetById, deletePet, updatePet };
