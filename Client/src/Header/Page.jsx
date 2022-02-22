import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../App'
import { StyledContainer } from '../styles/Container.styled'


export default function Page() {
  const [language] = useContext(LanguageContext)

  const location = useLocation();
  
  const [icon, setIcon] = useState(location.pathname.split('/')[1].includes('add') ? 'fas fa-address-book' : location.pathname.split('/')[1].includes('edit') ? 'fas fa-user-edit' : "fas fa-home")


  useEffect(() => {
    setIcon(location.pathname.split('/')[1].includes('add') ? 'fas fa-address-book' : location.pathname.split('/')[1].includes('edit') ? 'fas fa-user-edit' : "fas fa-home")
  }, [location])

  
  return (
    <StyledContainer size="18px" iMargin="5px">
      <i className={icon}></i>
      {language[`${window.location.href.split('/')[3] || 'home'}`]}
    </StyledContainer>
  )
}
