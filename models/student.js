import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const addressSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true
  }
});

// Schema for the collection
const studentsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  roll: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  contacts: {
    type: Array,
    required: true
  },
  address: addressSchema
});

// Model for that collection using the schema
const Student = model('Student', studentsSchema);

export default Student;