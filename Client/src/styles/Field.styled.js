import styled from 'styled-components';

export const StyledField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

     h3 {
        height: 45px;
        width: 80%;
        margin: 0;
        font-size: 14px;font-weight: normal;
        color: ${({theme}) => theme.colors.invalid}
    }
`