import React, { createRef, useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { LanguageContext } from '../App'
import { StyledForm } from '../styles/Form.styled'
import serverReq from '../utils/ServerReq'
import Input from './Input'
import Validations from '../utils/validations'
import {English, Hebrew} from '../utils/dictionary'
import { StyledButton } from '../styles/Button.styled'
import { StyledContainer } from '../styles/Container.styled'

export default function UserForm({toEdit, userState}) {
    const [errorMessage, setErrorMessage] = useState('')
    const [language] = useContext(LanguageContext)
    const [user, setUser] = userState || []
    const params = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
        Object.entries(language == English ? Hebrew.errors : English.errors).find(([key, value]) => {
            if (value === errorMessage) {
              setErrorMessage(language.errors[key])
              return true;
            }
          });
    }, [language])

   
  
    const inputs = [
      {
        placeholder: language.firstName,
        type: "text",
        icon: "fas fa-user",
        validator: Validations.name,
        isNum: false,
        dbField: 'firstName',
        default: user ? user.firstName : ''
      },
      {
        placeholder: language.lastName,
        type: "text",
        icon: "fas fa-users",
        validator: Validations.name,
        isNum: false,
        dbField: 'lastName',
        default: user ? user.lastName : ''
      },
      {
        placeholder: language.age,
        type: "number",
        max: 120,
        min: 1,
        icon: "fas fa-calendar",
        validator: Validations.isAge,
        isNum: true,
        dbField: 'age',
        default: user ? user.age : ''
      },
      {
        placeholder: language.phone,
        type: "tel",
        icon: "fas fa-mobile-alt",
        validator: Validations.phone,
        isNum: true,
        dbField: 'phone',
        default: user ? user.phone : ''
      },
    ]
  
  
    async function submit(e) {
      try {
        e.preventDefault()
        const values = Object.values(e.target)
            .reduce((acc, input) => !input.name ? acc : ({
                ...acc,
                [input.name]: input.type == 'checkbox' ? input.checked : input.value
            }), {}
            )
  
            
            let validation;
            if(params.id) validation = Validations.isUser(values)
            else validation = Validations.isFullUser(values)
            
            if (!validation.success) {
              setErrorMessage(language.errors.invalid)
              return;
            }
  
          const userDetails = {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            age: Number(values.age)
          }

    
          
        let res;
        if(params.id) res = await serverReq('put', '/user/edit', {...userDetails, id: params.id})
        else res = await serverReq('post', '/user/add', userDetails)
        if (!res.success) {
            setErrorMessage(language.errors[validation.errorDictionary])
            return;
        }
        else navigate('/')
        
        } catch (error) {
            console.log(error);
            setErrorMessage(language.errors.wrong)          
        }
  
    }
  return (
    <StyledForm onSubmit={(e) => submit(e)}>
      
      {
        inputs.map((input, index) => {
          return <Input  key={index} input={input}/>
        })
      }
      <h2>{errorMessage}</h2>

      <StyledContainer dis='flex' width='100%' jcFlex='space-between'>
        <StyledButton 
        type="submit"
        width='150px' padding='10px' br='10px' fs='20px' fw='bold'
        >
          {toEdit ? language.submitEdit : language.submitAdd}
        </StyledButton>
      
          <Link to="/">
            <StyledButton width='150px' padding='10px' br='10px' fs='20px' fw='bold' bg='#cd633a' bgHover='#D78363'>
              {language.back}
            </StyledButton>
          </Link>
      </StyledContainer>
    </StyledForm>

      
  )
}
