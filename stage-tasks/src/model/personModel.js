import { Schema, model } from 'mongoose'

// DATABASE SCHEMA AND MODEL
const personSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },  
  name: {
    type: String,
    required: true,
    unique: true
  },
  track: {
    type: String,
    required: true,
  },
  currentStage: {
    type: String,
    required: true,
  }
}, {timestamps:true})

export const PersonModel = model("People", personSchema);