import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>hello world</h1>
    </ThemeProvider>
  )
}

export default App
