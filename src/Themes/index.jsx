import { ThemeProvider as StyledComponentProvider, createGlobalStyle } from 'styled-components'
import { COLORS } from './color'

const theme = {
  ...COLORS
}

export const ThemeProvider = ({ children }) => <StyledComponentProvider theme={theme}>{children}</StyledComponentProvider>


export const ThemeGlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`