import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../App';
import { MainStyled } from '../../styles/Main.styled';
import ServerReq from '../../utils/ServerReq'
import AddUserButton from './AddUserButton';
import UsersTable from './UsersTable';

export default function Hmoe() {
  return (
    <MainStyled>
      <UsersTable />
      <AddUserButton />
    </MainStyled>
  )
}
