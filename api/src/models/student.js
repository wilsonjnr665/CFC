const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    documentType: {
      type: String,
      required: true
    },
    documentOrgan: {
      type: String,
      required: true
    },
    documentNumber: {
      type: String,
      required: true,
      index: { unique: true }
    },
    documentUF: {
      type: String,
      min: 2,
      max: 2,
      required: true
    },
    cpf: {
      type: String,
      required: true,
      index: { unique: true }
    },
    birthDate: {
      type: Date,
      required: true,
    },
    cep: {
      type: String,
    },
    uf: {
      type: String,
      min: 2,
      max: 2,
      required: true
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    streetNumber: {
      type: Number,
      required: true,
    },
    discrict: {
      type: String,
    },
    complement: {
      type: String,
    },
    telephoneNumber: {
      type: String,
    },
    cellphoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    civilState: {
      type: String,
    },
    sex: {
      type: String,
    },
    placeOfBirth: {
      type: String,
    },
    nacionality: {
      type: String,
    },
    fatherName: {
      type: String,
    },
    motherName: {
      type: String,
    },
    renach: {
      type: String,
    },
    bloodType: {
      type: String,
    },
    scholarity: {
      type: String,
    },
    profession: {
      type: String,
    },
    company: {
      type: String,
    }    
  },
  {
    timestamps: true
  }
)

const Student = mongoose.model('Student', studentSchema)

module.exports = Student