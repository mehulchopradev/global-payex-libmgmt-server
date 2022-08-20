import mongoose from "mongoose";

const { Schema, model } = mongoose;

const publicationHouseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ratings: {
    type: Number,
    required: true
  },
  establishmentDate: {
    type: Date,
    required: false
  }
});

const PublicationHouse = model('PublicationHouse', publicationHouseSchema);
export default PublicationHouse;