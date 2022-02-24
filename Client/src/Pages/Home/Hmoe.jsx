import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import { MainStyled } from '../../styles/Main.styled';
import { StyledMainHeadlin } from '../../styles/MainHeadline';
import AddUserButton from './AddUserButton';
import UsersTable from './UsersTable';

export default function Hmoe() {
  const [language] = useContext(LanguageContext)
  return (
    <MainStyled>
      <StyledMainHeadlin>
        <i className="fas fa-user-tag"></i>
        <h2>{language.myUsers}</h2>
      </StyledMainHeadlin>
      <UsersTable />
      <AddUserButton />
    </MainStyled>
  )
}
