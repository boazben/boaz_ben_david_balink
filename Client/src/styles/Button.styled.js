import styled from 'styled-components';

export const StyledButton = styled.button`
    width: ${({width, size}) => size ? size : width ? width : 'auto;'};
    height: ${({height, size}) =>  size ? size : height ? height : 'auto;'};
    border: none;
    border-radius: ${({br}) => br};
    background-color: ${({bg, theme}) => bg ? bg : theme.colors.table.headerBg};
    color: ${({theme, color}) => color ? color : theme.colors.bg};
    cursor: pointer;
    font-size: ${({fs}) => fs};
    font-weight: ${({fw}) => fw};
    padding: ${({padding}) => padding};

    &:hover {
        background-color: ${({bgHover, theme}) => bgHover ? bgHover : theme.colors.table.headerBgHover};
    }

`