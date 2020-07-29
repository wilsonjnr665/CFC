const Student = require('./student.js')
const Process = require('./process.js')
const Instructor = require('./instructor.js')
const Vehicle = require('./vehicle.js')
const Class = require('./class.js')
const SchedulePattern = require('./schedulePattern.js')

const models = {
  Student,
  Process,
  Instructor,
  Vehicle,
  Class,
  SchedulePattern
}

module.exports = models;