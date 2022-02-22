import React, { useContext } from 'react'
import { LanguageContext } from '../App'
import {Hebrew, English} from '../dictionary'
import { StyledIcon } from '../styles/Icon.styled'


export default function Language() {
    const [language, setLanguage] = useContext(LanguageContext)

    function change() {
        if (language.ChangeLanguage == 'Change to English') {
            setLanguage(English)
        }
        else if(language.ChangeLanguage == 'שינוי לעברית') {
            setLanguage(Hebrew)
        }
    }

  return (
    <StyledIcon onClick={change} size="28px" cursor="pointer" >
      <i className="fas fa-language"  title={language.ChangeLanguage}> </i>
    </StyledIcon>
  )
}
