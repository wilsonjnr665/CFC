module.exports = {
  student: async (_class, args, { models }) => {
    return await models.Student.findById(_class.student)
  },
  instructor: async (_class, args, { models }) => {
    return await models.Instructor.findById(_class.instructor)
  },
  vehicle: async (_class, args, { models }) => {
    return await models.Vehicle.findById(_class.vehicle)
  },
}