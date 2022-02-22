import styled from 'styled-components'

export const StyledInput = styled.div`
    display: flex;
    border-bottom: 2px solid ${({valid , theme}) => valid ? theme.colors.valid : theme.colors.invalid}}
    margin: 5px;

    input {
        border: none;
        background-color: ${({theme}) => theme.colors.bg};
        width: 300px;
    }

    input:focus {
        outline: none;
    }

    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
`