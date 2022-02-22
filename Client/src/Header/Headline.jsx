import React, { useContext } from 'react'
import { LanguageContext } from '../App'
import { StyledHeadline } from '../styles/Headline.styled'


export default function Headline() {
    const [language] = useContext(LanguageContext)

  return (
      <StyledHeadline>
        <i className="fas fa-users"></i>
        <h1>{language.headline}</h1>
      </StyledHeadline>
  )
}
