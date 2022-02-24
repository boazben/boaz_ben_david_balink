import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import UserForm from '../../Common/UserForm'
import { MainStyled } from '../../styles/Main.styled'
import { StyledMainHeadlin } from '../../styles/MainHeadline'

export default function Add() {
  const [language] = useContext(LanguageContext)

  return (
    <MainStyled>
      <StyledMainHeadlin>
        <i className="fas fa-address-book"></i>
        <h2>{language.add}</h2>
      </StyledMainHeadlin>
      <UserForm />
    </MainStyled>
  )
}
