import React from "react";
import { useQuery, gql } from "@apollo/client";

import StudentsForm from '../register/registerStudents'

const GET_STUDENTS = gql`
  query {
    students {
      id
      name
    }
  }
`;

const ListStudents = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_STUDENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <StudentsForm student={data.students}/>
      {data.students.map(student => (
        <div key={student.id}>{student.name}</div>
      ))}
    </div>
  );
};

export default ListStudents;
