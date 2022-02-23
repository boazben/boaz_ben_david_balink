import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../App'
import { StyledPosition } from '../../styles/Absolute.styled'
import { StyledButton } from '../../styles/Button.styled'
import {English} from '../../utils/dictionary'

export default function AddUserButton() {
  const [language] = useContext(LanguageContext)

  return (
    <Link to='/add' >
      <StyledPosition position='absolute' bottom='50px' left={language == English ? '50px' : ''} right={language != English ? '50px' : ''}>
        <StyledButton br='50%' size='60px' fs='40px'>
          +
        </StyledButton>
      </StyledPosition>
    </Link>
  )
}
