import styled from 'styled-components'

export const StyledInput = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${({valid , theme, noBorder}) => noBorder ? 'none': valid ? theme.colors.valid : theme.colors.invalid}};
    color: ${({theme}) => theme.colors.input.shadow};
    background-color: ${({theme}) => theme.colors.input.bg};
    padding: ${({padding}) => padding};
    border-radius: 10px;

    i {
        width: 20px;
        flex-shrink: 0;
        font-size: 18px;
    }

    input {
        margin: 0 10px;
        height: 30px;
        border: none;
        background-color:${({theme}) => theme.colors.input.bg};
        width: ${({width}) => width};
        font-size: ${({theme})=> theme.fonts.input.size};
        
    }

    input:focus {
        outline: none;
    }

    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 18px ${({theme}) => theme.colors.input.bg} inset !important;
        -webkit-text-fill-color: #262B2E !important;
   
    }

    input:-webkit-autofill::first-line {
        font-size: ${({theme})=> theme.fonts.input.size} !important;
        font-family: ${({theme}) => theme.fonts.heebo};
    
    }
`