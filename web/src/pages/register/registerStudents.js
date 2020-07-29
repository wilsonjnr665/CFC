import React, { useState } from "react";
import Cleave from "cleave.js/react";
import { useMutation, gql } from "@apollo/client";

import registerForm from "./registerForm.css";
import JSON_UF from "../../uf.json";

const NEW_STUDENT = gql`
  mutation newStudent(
    $name: String!
    $documentType: String!
    $documentOrgan: String!
    $documentUF: String!
    $documentNumber: String!
    $cpf: String!
    $birthDate: Date!
    $cep: String
    $uf: String!
    $city: String!
    $street: String!
    $streetNumber: Int!
    $district: String!
    $complement: String
    $telephoneNumber: String
    $cellphoneNumber: String
    $email: String
    $civilState: String
    $sex: String
    $placeOfBirth: String
    $nacionality: String
    $fatherName: String
    $motherName: String
    $renach: String
    $bloodType: String
    $scholarity: String
    $profession: String
    $company: String
  ) {
    newStudent(
      name: $name
      documentType: $documentType
      documentOrgan: $documentOrgan
      documentUF: $documentUF
      documentNumber: $documentNumber
      cpf: $cpf
      birthDate: $birthDate
      cep: $cep
      uf: $uf
      city: $city
      street: $street
      streetNumber: $streetNumber
      district: $district
      complement: $complement
      telephoneNumber: $telephoneNumber
      cellphoneNumber: $cellphoneNumber
      email: $email
      civilState: $civilState
      sex: $sex
      placeOfBirth: $placeOfBirth
      nacionality: $nacionality
      fatherName: $fatherName
      motherName: $motherName
      renach: $renach
      bloodType: $bloodType
      scholarity: $scholarity
      profession: $profession
      company: $company
    ) {
      id
    }
  }
`;

function validInputs(errors) {
  console.log(Object.values(errors))
  return !Object.values(errors).some((value) => value === true);
}

function validateCPF(cpf) {
  const sum1 =
    cpf[0] * 10 +
    cpf[1] * 9 +
    cpf[2] * 8 +
    cpf[4] * 7 +
    cpf[5] * 6 +
    cpf[6] * 5 +
    cpf[8] * 4 +
    cpf[9] * 3 +
    cpf[10] * 2;
  const sum2 =
    cpf[0] * 11 +
    cpf[1] * 10 +
    cpf[2] * 9 +
    cpf[4] * 8 +
    cpf[5] * 7 +
    cpf[6] * 6 +
    cpf[8] * 5 +
    cpf[9] * 4 +
    cpf[10] * 3 +
    cpf[12] * 2;
  const rest1 = sum1 % 11;
  const rest2 = sum2 % 11;
  let j;
  let k;

  if (rest1 == 0 || rest1 == 1) j = 0;
  else j = 11 - rest1;

  if (rest2 == 0 || rest2 == 1) k = 0;
  else k = 11 - rest2;

  return cpf[12] == j && cpf[13] == k;
}

function validate({
  name,
  documentNumber,
  documentType,
  documentOrgan,
  documentUF,
  cpf,
  birthDate,
  uf,
  city,
  street,
  streetNumber,
  district,
}) {
  return {
    name: name.length === 0,
    documentNumber: documentNumber.length === 0,
    documentType: documentType.length === 0,
    documentOrgan: documentOrgan.length === 0,
    documentUF: documentUF.length === 0,
    cpf: !validateCPF(cpf),
    birthDate: birthDate.length === 0,
    uf: uf.length === 0,
    city: city.length === 0,
    street: street.length === 0,
    streetNumber: streetNumber.length === 0,
    district: district.length === 0,
  };
}

const UfSelect = ({ onChange, name }) => {
  let options = [];

  JSON_UF.estados.map((uf) => {
    uf.sigla == "PR"
      ? options.push(<option value={uf.sigla}>{uf.sigla}</option>)
      : options.push(<option>{uf.sigla}</option>);
  });

  return (
    <span>
      <select defaultValue="PR" name={name} onChange={onChange}>
        {options}
      </select>
    </span>
  );
};

const CitySelect = ({ onChange, UF }) => {
  let cities = [];
  let options = JSON_UF.estados.filter((uf) => uf.sigla == UF)[0].cidades;

  options.map((city) => {
    cities.push(<option value={city}>{city}</option>);
  });

  return (
    <select defaultValue="Cascavel" name="city" onChange={onChange}>
      {cities}
    </select>
  );
};

const DocumentField = ({ onChange, errors }) => {
  return (
    <li>
      <span>
        <label htmlFor="documentNumber">RG <span className={errors.documentNumber ? "error" : "error-span"}>*<span class="tooltiptext">&nbsp;Campo Obrigatório{ }</span></span></label>
        <Cleave
          name="documentNumber"
          placeholder="RG"
          options={{
            delimiters: [".", ".", "-"],
            blocks: [2, 3, 3, 1],
            numericOnly: true,
          }}
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="documentOrgan">Orgão Emissor <span className={errors.documentOrgan ? "error" : "error-span"}>*<span class="tooltiptext">&nbsp;Campo Obrigatório{ }</span></span></label>
        <input
          type="text"
          name="documentOrgan"
          placeholder="Orgão Emissor"
          onChange={onChange}
        />
      </span>
      <span className="UF">
        <label htmlFor="documentUF">UF</label>
        <UfSelect onChange={onChange} name="documentUF" />
      </span>
      <span>
        <label htmlFor="cpf">CPF <span className={errors.cpf ? "error" : "error-span"}>*<span class="tooltiptext">&nbsp;Campo Obrigatório</span></span></label>
        <Cleave
          name="cpf"
          placeholder="CPF"
          options={{
            delimiters: [".", ".", "-"],
            blocks: [3, 3, 3, 2],
            numericOnly: true,
          }}
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="birthDate">Data de Nascimento <span className={errors.birthDate ? "error" : "error-span"}>*<span class="tooltiptext">&nbsp;Campo Obrigatório{ }</span></span></label>
        <Cleave
          name="birthDate"
          placeholder="Data"
          options={{
            date: true,
            datePattern: ["d", "m", "Y"],
            delimiter: "/",
            numericOnly: true,
          }}
          onChange={onChange}
        />
      </span>
    </li>
  );
};

const AdressField = ({ onChange, uf, errors }) => {
  return (
    <li>
      <span>
        <label htmlFor="cep">CEP</label>
        <Cleave
          name="cep"
          placeholder="CEP"
          options={{ delimiters: ["-"], blocks: [5, 3], numericOnly: true }}
          onChange={onChange}
        />
      </span>
      <span className="UF">
        <label htmlFor="uf">UF</label>
        <UfSelect onChange={onChange} name="uf" />
      </span>
      <span>
        <label htmlFor="city">Cidade</label>
        <CitySelect onChange={onChange} UF={uf} />
      </span>
      <span>
        <label htmlFor="street">Rua <span className={errors.street ? "error" : "error-span"}>*<span class="tooltiptext">&nbsp;Campo Obrigatório{ }</span></span></label>
        <input          
          type="text"
          name="street"
          placeholder="Rua"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="streetNumber">Número <span className={errors.streetNumber ? "error" : "error-span"}>*<span class="tooltiptext">&nbsp;Campo Obrigatório{ }</span></span></label>
        <Cleave
          name="streetNumber"
          placeholder="Número"
          options={{ numericOnly: true }}
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="district">Bairro</label>
        <input
          type="text"
          name="district"
          placeholder="Bairro"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="complement">Complemento</label>
        <input
          type="text"
          name="complement"
          placeholder="Complemento"
          onChange={onChange}
        />
      </span>
    </li>
  );
};

const ContactField = ({ onChange }) => {
  return (
    <li>
      <span>
        <label htmlFor="telephoneNumber">Telefone</label>
        <Cleave
          name="telephoneNumber"
          placeholder="Telefone"
          options={{
            delimiters: ["(", ")", " ", "-"],
            blocks: [0, 2, 0, 4, 4],
            numericOnly: true,
          }}
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="cellphoneNumber">Celular</label>
        <Cleave
          name="cellphoneNumber"
          placeholder="Celular"
          options={{
            delimiters: ["(", ")", " ", "-"],
            blocks: [0, 2, 0, 5, 4],
            numericOnly: true,
          }}
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
      </span>
    </li>
  );
};

const OthersField = ({ onChange }) => {
  return (
    <li>
      <span>
        <label htmlFor="civilState">Estado Civil</label>
        <input
          type="text"
          name="civilState"
          placeholder="Estado Civil"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="sex">Sexo</label>
        <input type="text" name="sex" placeholder="Sexo" onChange={onChange} />
      </span>
      <span>
        <label htmlFor="placeOfBirth">Local de Nascimento</label>
        <input
          type="text"
          name="placeOfBirth"
          placeholder="Local de Nascimento"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="nacionality">Nacionalidade</label>
        <input
          type="text"
          name="nacionality"
          placeholder="Nacionalidade"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="fatherName">Nome do Pai</label>
        <input
          type="text"
          name="fatherName"
          placeholder="Nome do Pai"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="motherName">Nome do Mãe</label>
        <input
          type="text"
          name="motherName"
          placeholder="Nome da Mãe"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="renach">Renach</label>
        <input
          type="text"
          name="renach"
          placeholder="Renach"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="bloodType">Tipo de Sangue</label>
        <input
          type="text"
          name="bloodType"
          placeholder="Tipo de Sangue"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="documentOrgan">Escolaridade</label>
        <input
          type="text"
          name="documentOrgan"
          placeholder="Escolaridade"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="scholarity">Profissão</label>
        <input
          type="text"
          name="scholarity"
          placeholder="Profissão"
          onChange={onChange}
        />
      </span>
      <span>
        <label htmlFor="company">Empresa</label>
        <input
          type="text"
          name="company"
          placeholder="Empresa"
          onChange={onChange}
        />
      </span>
    </li>
  );
};

let errors = {};

const RegisterStudents = (props) => {
  const [values, setValues] = useState({
    ["documentUF"]: "PR",
    ["uf"]: "PR",
    ["city"]: "Cascavel",
    ["documentType"]: "RG",
    ["name"]: "",
    ["documentNumber"]: "",
    ["documentOrgan"]: "",
    ["cpf"]: "",
    ["birthDate"]: "",
    ["street"]: "",
    ["streetNumber"]: "",
    ["district"]: "",
  });

  const [newStudent, { loading, error }] = useMutation(NEW_STUDENT, {
    onCompleted: (data) => {
      props.history.push("/");
    },
  });

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="register-student">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          errors = validate(values);
          if (values.birthDate && !values.birthDate.includes("-")) {
            let date = values.birthDate.split("/");
            date = `${date[2]}-${date[1]}-${date[0]}`;
            values.birthDate = date;
          }
          if (values.streetNumber) {
            values.streetNumber = parseInt(values.streetNumber);
          }
          setValues({ ...values });
          if (validInputs(errors)) {
            newStudent({
              variables: { ...values },
            }).catch((e) => {
              console.log(e.message);
            });
          }
          console.log(values);
        }}
      >
        <ul>
          <li>
            <span>
              <label htmlFor="name">Nome Completo <span className={errors.name ? "error" : "error-span"}>*<span class="tooltiptext">&nbsp;Campo Obrigatório{ }</span></span></label>
              <input
                type="text"
                name="name"
                placeholder="Nome Completo"
                onChange={onChange}
              />
            </span>
          </li>
          <DocumentField onChange={onChange} errors={errors} />
          <AdressField onChange={onChange} uf={values.uf} errors={errors} />
          <ContactField onChange={onChange} />
          <OthersField onChange={onChange} />
          <button type="submit">Cadastrar</button>
          {/* if the data is loading, display a loading message*/}
          {loading && <p>Loading...</p>}
          {/* if there is an error, display a error message*/}
          {error && <p>Error creating an account!</p>}
        </ul>
      </form>
    </div>
  );
};

export default RegisterStudents;
