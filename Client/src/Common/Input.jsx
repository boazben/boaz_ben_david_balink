import React, { useEffect, useRef, useState } from 'react'
import { StyledInput } from '../styles/Input.styled'

export default function Input({input}) {
    const [valid, setValid] = useState(true)

    function isValid(str) {
        if(!str) {
            setValid(true)
        }

        else if(input.validator(str) && !valid){
            setValid(!valid)
        }
        else if(!input.validator(str) && valid) {
            setValid(!valid)
        }
    }
   

    return (
        <StyledInput valid={valid}>
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
    )
}
