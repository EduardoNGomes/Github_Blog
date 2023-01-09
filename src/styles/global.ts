import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
* {
  font-size: 66.5%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: ${(props) => props.theme['base-background']}
}

body,input, textarea, button {
    font-family:  'Nunito', sans-serif;;
    font-weight: 400;
    font-size: 1.6rem;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    transition: all .3s;
    
}

input {
  outline: none;
  border-color: ${(props) => props.theme.blue};
}
li{
    list-style: none;
}
@media (max-width: 1024px) {
  *{
      font-size:60%;
  }
}
@media (max-width: 768px) {
  *{
      font-size:50%;
  }
}
`
