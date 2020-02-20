import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600,700&display=swap');
    font-family: 'Montserrat', sans-serif;
    background-color: #fafafa;
  }
`


