module.exports = {
  schedule: async (instructor, args, {models}) => {
    const schedulePattern = await models.SchedulePattern.findOne()
    const array = instructor.schedule.map( (hasTime, index) => hasTime ? schedulePattern.schedule[index] : hasTime ).filter( bool => bool !== false ) || []
    return array
  }
}