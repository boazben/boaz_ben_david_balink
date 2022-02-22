import React, { useContext } from 'react'
import { LanguageContext } from '../App'
import {Hebrew, English} from '../utils/dictionary'
import { StyledIcon } from '../styles/Icon.styled'


export default function Language() {
    const [language, setLanguage] = useContext(LanguageContext)

    function change() {
        if (language.ChangeLanguage == 'Change to English') {
            localStorage.language = 'en'
            setLanguage(English)
        }
        else if(language.ChangeLanguage == 'שינוי לעברית') {
          localStorage.language = 'he'  
          setLanguage(Hebrew)
        }
    }

  return (
    <StyledIcon onClick={change} size="28px" cursor="pointer" >
      <i className="fas fa-language"  title={language.ChangeLanguage}> </i>
    </StyledIcon>
  )
}
