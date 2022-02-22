import React, { useContext } from 'react'
import { StyledHeader } from '../styles/Header.style';
import Headline from './Headline';
import Language from './Language'
import Page from './Page'



export default function Header() {
  
  
    return (
    <StyledHeader>
        <Page />
        <Headline /> 
        <Language />
    </StyledHeader>
  )
}
