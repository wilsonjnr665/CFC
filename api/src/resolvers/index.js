const Query = require('./query.js')
const Mutation = require('./mutation.js')
const Functionary = require('./functionary.js')
const Process = require('./process.js')
const Instructor = require('./instructor.js')
const Class = require('./class.js')
const { GraphQLDateTime, GraphQLDate } = require('graphql-iso-date');

module.exports = {
  Query,
  Mutation,
  Functionary,
  Process,
  Instructor,
  Class,
  Date: GraphQLDate,
  DateTime: GraphQLDateTime
}