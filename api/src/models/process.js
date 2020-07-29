const mongoose = require('mongoose')

const processSchema = new mongoose.Schema(
  {    
    type: {
      type: String,
      required: true
    },
    phase: {
      type: String,
      required: true
    },
    status: {
      type: Boolean
    },
    start: {
      type: Date,
      default: Date.now
    },
    end: {
      type: Date,
    },
    protocol: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    residentialComprovant: {
      type: String,
    },
    value: {
      type: mongoose.Schema.Types.Decimal128,
      required: true
    },
    description: {
      type: String,
    },
    LADV: {
      type: String,
    },
    worker: {
      type: String,
    },
    timePreference: {
      type: String,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Process = mongoose.model('Process', processSchema)

module.exports = Process