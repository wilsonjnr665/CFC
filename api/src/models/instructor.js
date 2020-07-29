const mongoose = require('mongoose')

const instructorSchema = new mongoose.Schema(
  {    
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true,
      index: { unique: true }
    },
    hiredAt: {
      type: Date,
      required: true
    },
    dismissedAt: {
      type: Date
    },
    status: {
      type: Boolean,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    schedule: [
      {
        type: Boolean,
        required: true
      }
    ]
  },
  {
    timestamps: true
  }
)

const Instructor = mongoose.model('Instructor', instructorSchema)

module.exports = Instructor