const { gql } = require('apollo-server-express');

module.exports = gql`
    scalar Date
    scalar DateTime
    scalar Time    

    interface Functionary {
        name: String!        
    }

    type Instructor implements Functionary {
        id: ID!
        name: String!
        type: String!
        cpf: String!        
        hiredAt: Date!
        dismissedAt: Date
        status: Boolean!
        username: String!
        password: String!
        schedule: [String!]! 
        classes: [DateTime!]
    }

    type Worker implements Functionary {
        name: String!
        status: Boolean
        hiredAt: Date!
        dismissedAt: Date
    }

    type SchedulePattern {
        schedule: [String!]
        id: ID!
    }

    type Student {
        id: ID!
        name: String!
        documentType: String!
        documentOrgan: String!
        documentUF: String!
        documentNumber: String!
        cpf: String!        
        birthDate: Date!
        cep: String
        uf: String!
        city: String!
        street: String!
        streetNumber: Int!
        district: String!
        complement: String
        telephoneNumber: String
        cellphoneNumber: String
        email: String
        civilState: String
        sex: String
        placeOfBirth: String
        nacionality: String
        fatherName: String
        motherName: String
        renach: String
        bloodType: String
        scholarity: String
        profession: String
        company: String
    }

    type Process {
        id: ID!
        type: String!
        phase: String!
        status: Boolean!
        start: DateTime
        end: DateTime
        protocol: String!
        category: String!
        residentialComprovant: String
        value: Float!
        description: String
        LADV: String
        worker: String
        timePreference: String
        createdAt: DateTime!
        student: Student!
    }

    type Exam {
        id: ID!
        type: String!
        createdAt: DateTime!
        date: DateTime!
        result: String
        vehicle: Vehicle!
    }

    type Vehicle {
        id: ID!
        name: String!
        type: String!
        plate: String!
        renavam: String!
        status: Boolean!
        entryDate: Date!
        leftDate: Date
    }

    type Class {
        id: ID!
        student: Student!
        instructor: Instructor!
        vehicle: Vehicle!
        date: DateTime!
    }

    type Query {
        students: [Student!]
        student(id: ID!): Student!
        processes: [Process!]
        studentProcesses(id: ID!): [Process!]
        instructors: [Instructor!]
        instructor(id: ID!): Instructor!
        vehicles: [Vehicle!]
        vehicle(id: ID!): Vehicle!
        schedulePattern: [SchedulePattern!]
        classes: [Class!]
    }

    type Mutation {
        newStudent(
            name: String!,
            documentType: String!,
            documentOrgan: String!,
            documentUF: String!,
            documentNumber: String!,
            cpf: String!, 
            birthDate: Date!,
            cep: String,
            uf: String!,
            city: String!,
            street: String!,
            streetNumber: Int!,
            district: String!,
            complement: String,
            telephoneNumber: String,
            cellphoneNumber: String,
            email: String,
            civilState: String,
            sex: String,
            placeOfBirth: String,
            nacionality: String,
            fatherName: String,
            motherName: String,
            renach: String,
            bloodType: String,
            scholarity: String,
            profession: String,
            company: String
        ): Student!

        deleteStudent(id: ID!): Student!

        updateStudent(
            id: ID!,
            name: String,
            documentType: String,
            documentOrgan: String,
            documentUF: String,
            documentNumber: String,
            cpf: String, 
            birthDate: Date,
            cep: String,
            uf: String,
            city: String,
            street: String,
            streetNumber: Int,
            district: String,
            complement: String,
            telephoneNumber: String,
            cellphoneNumber: String,
            email: String,
            civilState: String,
            sex: String,
            placeOfBirth: String,
            nacionality: String,
            fatherName: String,
            motherName: String,
            renach: String,
            bloodType: String,
            scholarity: String,
            profession: String,
            company: String
        ): Student!

        newProcess(
            type: String!,
            phase: String!,
            protocol: String!
            category: String!
            residentialComprovant: String
            value: Float!
            description: String
            LADV: String
            timePreference: String
        ): Process!

        deleteProcess(id: ID!): Process!

        updateProcess(
            id: ID!
            type: String,
            phase: String,
            protocol: String
            category: String
            residentialComprovant: String
            value: Float
            description: String
            LADV: String
            timePreference: String
        ): Process!

        newInstructor(
            name: String!
            type: String!
            cpf: String!        
            hiredAt: Date!
            dismissedAt: Date
            schedule: [Boolean!]!
        ): Instructor!

        deleteInstructor(id: ID!): Instructor!

        updateInstructor(
            id: ID!
            name: String
            type: String
            cpf: String       
            hiredAt: Date
            dismissedAt: Date
            schedule: [Boolean!]
        ): Instructor!

        newVehicle (
            name: String!
            type: String!
            plate: String!
            renavam: String!
            entryDate: Date
            leftDate: Date
        ): Vehicle!

        deleteVehicle(id: ID!): Vehicle!

        updateVehicle (
            id: ID!
            name: String
            type: String
            plate: String
            renavam: String
            entryDate: Date
            leftDate: Date
        ): Vehicle!

        newClass (
            instructor: ID!
            vehicle: ID!
            date: DateTime!
        ): Class!

        deleteClass(id: ID!): Class!

        updateClass (
            id: ID!
            instructor: ID
            vehicle: ID
            date: DateTime
        ): Class!

    }
`
