import mongoose from 'mongoose';

const appSchema = mongoose.Schema(
  {
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'pet',
    },
    appType: {
      type: String,
      required: true,
    },
    vet: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'vet',
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model('Appointment', appSchema);

export default Appointment;
