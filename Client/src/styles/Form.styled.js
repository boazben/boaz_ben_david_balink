import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    max-width: 80%;


   h2 {
       height: 30px;
       margin: -20px 0 0 0;
       color: ${({theme}) => theme.colors.invalid};
       font-size: 18px;
   }
`