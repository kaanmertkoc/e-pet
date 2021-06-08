import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const vetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    patients: {
      type: [mongoose.Schema.Types.ObjectId],
      required: false,
      ref: 'patients',
    },
  },
  {
    timestamps: true,
  }
);

vetSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

vetSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
vetSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Vet = mongoose.model('Vet', vetSchema);

export default Vet;
