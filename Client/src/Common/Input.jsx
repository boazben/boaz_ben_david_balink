import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { LanguageContext } from '../App'
import { StyledField } from '../styles/Field.styled'
import { StyledInput } from '../styles/Input.styled'
import {English, Hebrew} from '../utils/dictionary'

export default function Input({input}) {
    const [valid, setValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    // const [errorMessage, setErrorMessage] = errorState
    const [language] = useContext(LanguageContext)

    useEffect(() => {
        Object.entries(language == English ? Hebrew.errors : English.errors).find(([key, value]) => {
            if (value === errorMessage) {
              setErrorMessage(language.errors[key])
              return true;
            }
          });
    }, [language])


    function isValid(str) {
        if(!str) {
            setValid(true)
            setErrorMessage('')
        }

        else if(input.validator(str).success){
            setValid(true)
            setErrorMessage('')
        }
        else if(!input.validator(str).success) {
            setValid(false)
            setErrorMessage(language.errors[input.validator(str).errorDictionary])
        }
    }
   
    
    
    return (
        <StyledField>
            <StyledInput valid={valid} width='300px' padding='5px'>
                    <i className={input.icon}></i>
                    <input 
                    name={input.dbField} 
                    onChange={(e) => isValid(e.target.value)} 
                    type={input.type} 
                    placeholder={input.placeholder}
                    max={input.max} min={input.min}
                    required
                    title={input.placeholder}
                    defaultValue={input.default}
                    />
            </StyledInput>
            <h3>{errorMessage}</h3>
        </StyledField>
    )
}
