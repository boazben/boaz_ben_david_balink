import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

    body {
        font-family: 'Heebo', sans-serif;
        margin: 0;
        padding: 0;
        background-color: ${({theme}) => theme.colors.bg}
    }
`
export default GlobalStyles