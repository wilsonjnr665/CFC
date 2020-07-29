import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    :hover {
      color: #ff3333
    }

    :active {
      color: #b30000
    }
`;

export default StyledLink