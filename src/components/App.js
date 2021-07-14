import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { HomePage, NotFoundPage } from 'components'
import AOS from 'aos'
import 'aos/dist/aos.css'

import theme from './themes/default'

const GlobalStyles = createGlobalStyle`
    body {
      margin: 0;
    }
`

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
