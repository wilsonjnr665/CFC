module.exports = {
  students: async (parent, args, { models }) => {
    return await models.Student.find();
  },
  student: async (parent, { id }, { models }) => {
    return await models.Student.findById( id )
  },
  processes: async (parent, args, {models}) => {
    return await models.Process.find()
  },
  studentProcesses: async (parent, { id }, { models }) => {
    return await models.Process.find({student: id})
  },
  instructors: async (parent, args ,{ models }) => {
    return await models.Instructor.find()
  },
  instructor: async (parent, { id }, { models }) => {
    return await models.Instructor.findById( id )
  },
  vehicles: async (parent, args, { models }) => {
    return await models.Vehicle.find()
  },
  vehicle: async (parent, { id }, { models }) => {
    return await models.Vehicle.findById( id )
  },
  schedulePattern: async (parent, args, { models }) => {
    return await models.SchedulePattern.find();
  },
  classes: async (parent, args, { models }) => {
    return await models.Class.find();
  },
  
}