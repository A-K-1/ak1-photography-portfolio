import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { HomePage, NotFoundPage } from 'components'

import theme from './themes/default'
import data from './data/default'

injectGlobal`
  body {
    margin: 0;
    width: 100vw;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme} data={data}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
