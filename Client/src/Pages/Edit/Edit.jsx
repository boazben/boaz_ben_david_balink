import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LanguageContext } from '../../App';
import UserForm from '../../Common/UserForm';
import { MainStyled } from '../../styles/Main.styled';
import { StyledMainHeadlin } from '../../styles/MainHeadline';
import serverReq from '../../utils/ServerReq';

export default function Edit() {
  const [language] = useContext(LanguageContext)
  const [user, setUser] = useState()
  const params = useParams()

  useEffect(() => {
    if(params.id) {
        getUser(params.id)
    }
}, [])

async function getUser(id) {
    try {
        const res = await serverReq('get', `/user?id=${id}&one=true`)
        if (!res.success) {
          console.log(res)
        }
        else setUser(res.data)
      } catch (error) {
        console.log(error.response?.data?.error || error.message || error);
      }
}

  return (
    <MainStyled>
      <StyledMainHeadlin>
      <i className="fas fa-user-edit"></i>
        <h2>{user ? `${user?.firstName} ${user?.lastName}` : language.edit}</h2>
      </StyledMainHeadlin>
      <UserForm toEdit={true} userState={[user, setUser]}/>
    </MainStyled>
  )
}
