import styled from 'styled-components'

export const StyledHeader = styled.header`
    color: ${({theme}) => theme.colors.headerText};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    height:  ${({theme}) => theme.dimensions.headerHeight};

    
`