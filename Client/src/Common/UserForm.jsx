import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { LanguageContext } from '../App'
import { StyledForm } from '../styles/Form.styled'
import serverReq from '../utils/ServerReq'
import Input from './Input'
import Validations from '../utils/validations'

export default function UserForm({toEdit}) {
    const [errorMessage, setErrorMessage] = useState('')
    const [language] = useContext(LanguageContext)
    const [user, setUser] = useState()
    const params = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
        setErrorMessage()
    }, [language])

    useEffect(() => {
        if(params.id) {
            getUser(params.id)
        }
    }, [])

    async function getUser(id) {
        try {
            const res = await serverReq('get', `/user?id=${id}&one=true`)
            console.log(res);
            if (!res.success) {
              console.log(res)
            }
            else setUser(res.data)
          } catch (error) {
            console.log(error.response?.data?.error || error.message || error);
          }
    }
  
    const inputs = [
      {
        placeholder: language.firstName,
        type: "text",
        icon: "",
        validator: Validations.name,
        isNum: false,
        dbField: 'firstName',
        default: user ? user.firstName : ''
      },
      {
        placeholder: language.lastName,
        type: "text",
        icon: "",
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
        icon: "",
        validator: Validations.isAge,
        isNum: true,
        dbField: 'age',
        default: user ? user.age : ''
      },
      {
        placeholder: language.phone,
        type: "tel",
        icon: "",
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
              setErrorMessage(language.errors[validation.errorDictionary])
              return;
            }
  
          const userDetails = {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            age: Number(values.age)
          }
  
        console.log({...userDetails, id: params.id});
          
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
      <div>{errorMessage}</div>
        <input type="submit" />
        <Link to="/">back</Link>
      </StyledForm>
  )
}
