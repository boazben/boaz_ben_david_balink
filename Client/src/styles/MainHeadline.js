import styled from 'styled-components';

export const StyledMainHeadlin = styled.div`
    color: ${({theme}) => theme.colors.mainHeadline};
    font-size: 20px;
    display: flex;
    align-items: center;
    margin: 5px;

    i {
        margin: 10px;
        font-size: 28px;
    }

    h2 {
        margin: 0;
    }
`