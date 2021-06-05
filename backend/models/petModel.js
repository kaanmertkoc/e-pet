import mongoose from 'mongoose';

const petSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'owner',
    },
    race: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    birthDate: {
      type: String,
      required: false,
    },
    vaccines: {
      type: [mongoose.Schema.Types.String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
