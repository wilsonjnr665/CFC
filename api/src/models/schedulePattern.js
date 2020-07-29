const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema(
  {    
    schedule: [
      {
        type: String,
        required: true
    }],
  },
  {
    timestamps: true
  }
)

const SchedulePattern = mongoose.model('SchedulePattern', scheduleSchema)

module.exports = SchedulePattern