import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import StyledLink from "./StyledLink.js"

const NavList = () => (
  <div className="nav-register">
    <ul>
      <li><StyledLink to="/list-students">Listar Alunos</StyledLink></li>
      <li><StyledLink to="/list-instructors">Listar Instrutores</StyledLink></li>
      <li><StyledLink to="/list-vehicles">Listar Veículos</StyledLink></li>
    </ul>
  </div>
)

export default NavList