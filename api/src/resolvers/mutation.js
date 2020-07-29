const mongoose = require('mongoose')
const { json } = require('express')
const { UserInputError } = require('apollo-server-express')

function generateUsername( name, cpf ){
  const split = name.split(' ')
  return split[0].toLowerCase() + '.' + split[split.length - 1].toLowerCase() + cpf.split('.')[0][0]
}

function generatePassword( name, cpf ){
  const split = name.split(' ')
  return split[0].toLowerCase() + cpf.split('.')[1]
}

function validateCPF( cpf ){
  const sum1 = cpf[0] * 10 + cpf[1] * 9 + cpf[2] * 8 + cpf[4] * 7 + cpf[5] * 6 + cpf[6] * 5 + cpf[8] * 4 + cpf[9] * 3 + cpf[10] * 2
  const sum2 = cpf[0] * 11 + cpf[1] * 10 + cpf[2] * 9 + cpf[4] * 8 + cpf[5] * 7 + cpf[6] * 6 + cpf[8] * 5 + cpf[9] * 4 + cpf[10] * 3 + cpf[12] * 2
  const rest1 = sum1%11
  const rest2 = sum2%11
  let j;
  let k

  if( rest1 == 0 || rest1 == 1 )
    j = 0
  else 
    j = 11 - rest1

  if( rest2 == 0 || rest2 == 1 )
    k = 0
  else 
    k = 11 - rest2

  return cpf[12] == j && cpf[13] == k    
}

module.exports = {
  newStudent: async (parent, args, { models }) => {
    let error = ''

    if( !validateCPF( args.cpf) ){
      error += 'cpfInv-'
    }
    else if (await models.Student.exists({ cpf: `${args.cpf}` })) {
      error += 'cpf-'
      // throw new UserInputError('CPF DUPLICADO', { invalidArgs: args.cpf })  
    }
    if (await models.Student.exists({ documentNumber: `${args.documentNumber}` })) {
      error += 'documentNumber'
    }

    if( error.length ) {
      throw new UserInputError(error) 
    }

    return await models.Student.create(args).catch(e => {
      throw new UserInputError(e.message) 
    })
  },
  
  deleteStudent: async (parent, { id }, { models }) => {
    return await models.Student.findByIdAndDelete(id)
  },
  
  updateStudent: async (parent, args, { models }) => {
    const id = args.id
    delete args.id

    return await models.Student.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: args
      },
      {
        new: true
      }
    );
  },
  
  newProcess: async (parent, args, {models, studentId}) => {
    const doesStudentExist = await models.Student.exists({_id: studentId})

    if(doesStudentExist){
      return await models.Process.create({
        ...args,
        student: mongoose.Types.ObjectId(studentId),
        status: true,
      })
    }
    else {
      throw "ID do aluno inválido"
    }
  },

  deleteProcess: async (parent, { id }, { models }) => {
    return await models.Process.findByIdAndDelete(id)
  },
  
  updateProcess: async (parent, args, { models }) => {
    const id = args.id
    delete args.id

    return await models.Process.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: args
      },
      {
        new: true
      }
    );
  },
  
  newInstructor: async (parent, args, { models }) => {
    if( !validateCPF( args.cpf) )
      throw "CPF INVÁLIDO!"

    const username = generateUsername( args.name, args.cpf )
    const password = generatePassword( args.name, args.cpf )

    const status = !(args.dismissedAt)

    return await models.Instructor.create({
      ...args,
      username,
      password,
      status
    })
  },
  
  deleteInstructor: async (parent, { id }, { models }) => {
    return await models.Instructor.findByIdAndDelete(id)
  },
  
  updateInstructor: async (parent, args, { models }) => {
    const id = args.id
    delete args.id

    return await models.Instructor.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: args
      },
      {
        new: true
      }
    );
  },

  newVehicle: async (parent, args, { models }) => {
    return await models.Vehicle.create({
      ...args,
      status: !(args.leftDate)
    })
  },

  deleteVehicle: async (parent, { id }, { models }) => {
    return await models.Vehicle.findByIdAndDelete(id)
  },

  updateVehicle: async (parent, args, { models }) => {
    const id = args.id
    delete args.id

    return await models.Vehicle.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: args
      },
      {
        new: true
      }
    );
  },

  newClass: async (parent, args, { models, studentId }) => {
    const doesStudentExist = await models.Student.exists({_id: studentId})

    if(doesStudentExist){
      return await models.Class.create({
        ...args,
        student: mongoose.Types.ObjectId(studentId),
      })
    }
    else {
      throw "ID do aluno inválido"
    }
  },

  deleteClass: async (parent, { id }, { models }) => {
    return await models.Class.findByIdAndDelete(id)
  },

  updateClass: async (parent, { id, ...args }, { models }) => {
    return await models.Class.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: args
      },
      {
        new: true
      }
    )
  }
}