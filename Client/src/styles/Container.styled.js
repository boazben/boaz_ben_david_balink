import styled from 'styled-components';

export const StyledContainer = styled.div`
    font-size: ${({size}) => size};
    font-width: ${({fontWidth}) => fontWidth};

    i {
        margin: ${({iMargin}) => iMargin}
    }
`