import styled from 'styled-components';

export const MainStyled = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: calc(100vh - ${({theme}) => theme.dimensions.headerHeight});
`