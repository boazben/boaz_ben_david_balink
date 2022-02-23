import styled from 'styled-components';

export const StyledTh = styled.th`
    min-width: ${({filed}) => filed.minWidth};

    div {
        justify-content: flex-start;
        width: 100%
    }

`