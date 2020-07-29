const models = require('./models')

const schedule = ['08:00', '08:50', '09:40', '10:40', '11:30' , '13:30', '14:20', '15:20', '16:10', '17:00']

module.exports = async function checkSchedule() {
  const scheduleSet = await models.SchedulePattern.exists()  
  if(!scheduleSet) {
    models.SchedulePattern.create({ schedule: schedule })
  }
}