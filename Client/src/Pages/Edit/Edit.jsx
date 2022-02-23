import React from 'react'
import { useParams } from 'react-router-dom'
import UserForm from '../../Common/UserForm';
import { MainStyled } from '../../styles/Main.styled';

export default function Edit() {


  return (
    <MainStyled>
      <UserForm toEdit={true}/>
    </MainStyled>
  )
}
