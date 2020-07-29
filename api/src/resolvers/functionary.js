module.exports = {
  __resolveType(functionary) {
    if(functionary.schedule){
      return 'Instructor'
    }
    else {
      return 'Worker'
    }
  }
}