import React, { useState } from 'react'
import styled from 'styled-components';

import StyledLink from "./StyledLink.js"

import navRegister from "./navRegister.css"

const NavRegister = () => (
  <div className="nav-register">
    <ul>
      <li><StyledLink to="register-students">Cadastrar Aluno</StyledLink></li>
      <li><StyledLink to="register-instructors">Cadastrar Instrutor</StyledLink></li>
      <li><StyledLink to="register-vehicles">Cadastrar Veículo</StyledLink></li>
    </ul>
  </div>
)

export default NavRegister