const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema(
  {    
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    plate: {
      type: String,
      required: true,
      index: { unique: true }
    },
    renavam: {
      type: String,
      required: true,
      index: { unique: true }
    },
    entryDate: {
      type: Date,
      required: true,
      default: Date.now
    },
    leftDate: {
      type: Date
    },
    status: {
      type: Boolean,
      required: true
    },
  },
  {
    timestamps: true
  }
)

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle