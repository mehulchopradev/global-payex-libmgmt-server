import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const issuanceHistorySchema = new Schema({
  bookName: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
    enum: ['Issued', 'Returned']
  },
  date: {
    type: Date,
    required: true
  }
})

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
    required: true,
    enum: ['m', 'f']
  },
  roll: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: false,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  contacts: {
    type: Array,
    required: true
  },
  address: addressSchema,
  issuanceHistory: [issuanceHistorySchema]
});

// Model for that collection using the schema
const Student = model('Student', studentsSchema);

export default Student;