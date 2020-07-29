const mongoose = require('mongoose')

const classSchema = new mongoose.Schema(
  {    
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instructor',
      required: true
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
)

classSchema.index({date: 1, instructor: 1}, {unique: true})
classSchema.index({date: 1, student: 1}, {unique: true})
classSchema.index({date: 1, vehicle: 1}, {unique: true})

const Class = mongoose.model('Class', classSchema)

module.exports = Class