import { createGlobalStyle, DefaultTheme } from 'styled-components'



export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
*{
    box-sizing : border-box;
    -webkit-tap-highlight-color: transparent;
}

html{
    scroll-behavior: smooth;
}

body {
    font-family: Mukta-Light,sans-serif;
    margin : 0;
    background-color : ${props => props.theme.colors.lightColor};
}

h1,h2,h3,h4,h5,h6{
    color: ${props => props.theme.colors.lightColor};
    font-size: 2rem;
    font-family: Mukta-Regular,sans-serif;
    margin : 0 0 1rem 0 ;
}

p{
    font-family: Mukta-Light,sans-serif;
}

a{
    color: ${props => props.theme.colors.lightColor};
    outline: none;
    text-decoration: none;
    text-align: center;
}

button{
    cursor: pointer;
    outline: none;
    border: none;
    font-weight: 500;
    font-family: Mukta-Regular,sans-serif;
}

input {
    outline: none;
    border: none;
    font-weight: 500;
    font-family: Mukta-Regular,sans-serif;
    background-color:  ${props => props.theme.colors.lightColor};
    color:  ${props => props.theme.colors.darkColor} ;
    &::placeholder{
        color:  ${props => props.theme.colors.darkColor}
    }
}
`
