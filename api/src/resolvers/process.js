module.exports = {
  student: async (process, args, { models }) => {
    return await models.Student.findById(process.student)
  }
}