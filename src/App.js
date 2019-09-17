import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import theme from './style/theme'
import GlobalStyle from './style/global'
import Start from './views/Start'
import About from './views/About'
import CategoryPage from './views/CategoryPage'
import SubcategoryPage from './views/SubcategroyPage'

// const history = createBrowserHistory()

const App = ({ history }) => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Start}></Route>
            <Route path="/about" component={About}></Route>
            <Route
              path="/:category/:subcategory"
              component={SubcategoryPage}
            ></Route>
            <Route path="/:category" component={CategoryPage}></Route>
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  )
}

export default App
