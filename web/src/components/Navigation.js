import React, { useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import logo from '../img/logo.png'
import NavRegister from './NavRegister.js'
import NavList from './NavList.js'

const ButtonAsLink = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
  text-decoration: none;

  :hover,
  :active {
    color: #cc1f1f;
    border: none;
  }

  :focus {
    outline: 0;
  }
`;

const HeaderDiv = styled.div`
  background-color: #eee;
  display: flex;
  grid-area: header;
  align-items: center;
  box-shadow: 0px 1px 10px #888;
  z-index: 200;
`;

const HeaderList = styled.ul`
  color: black;
  display: flex;
  list-style: none;
  margin-left: auto;
`;


const HeaderLi = styled.li`
  font-size: 1.3em;
  margin: 0 2em;
`;

const Logo = styled.img`
  padding: 10px 1em 10px 2em;
  margin-right: auto;
`

const Nav = styled.div`
  grid-area: nav;  
  box-shadow: 1px 0px 10px #888;
`

const Navigation = () => {
  const [nav, setNav] = useState(NavRegister);

  const changeRegister = () => { setNav(NavRegister) }
  const changeList = () => { setNav(NavList) }

  return (
    <React.Fragment>
      <HeaderDiv>
        <Link to="/"><Logo src={logo} height="65px"/></Link>
        <HeaderList>
          <HeaderLi><ButtonAsLink onClick={changeRegister}>Cadastro</ButtonAsLink></HeaderLi>
          <HeaderLi><ButtonAsLink onClick={changeList}>Listagem</ButtonAsLink></HeaderLi>
          <HeaderLi><ButtonAsLink>Financeiro</ButtonAsLink></HeaderLi>
        </HeaderList>
      </HeaderDiv>
      <Nav>{nav}</Nav>
    </React.Fragment>
  )
}

export default Navigation
