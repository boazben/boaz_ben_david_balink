import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: ${({dis}) => dis};
    width: ${({width}) => width};
    justify-content: ${({jcFlex}) => jcFlex};
    align-items: ${({alFlex}) => alFlex};

    font-size: ${({size}) => size};
    font-width: ${({fontWidth}) => fontWidth};

    i {
        margin: ${({iMargin}) => iMargin}
    }
`