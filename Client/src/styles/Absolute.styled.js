import styled from 'styled-components';

export const StyledPosition = styled.div`
    position: ${({ position}) =>  position};
    top: ${({top}) => top};
    bottom: ${({bottom}) => bottom};
    left: ${({left}) => left};
    right: ${({right}) => right};
`