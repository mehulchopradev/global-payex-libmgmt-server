import mongoose from 'mongoose';

const { Schema } = mongoose;

// Schema for the collection
const authorsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

export default authorsSchema;