import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovingComponent from 'react-moving-text'
import { GlobalStyles } from './globalStyles';
import theme from './theme';
import Header from './components/Header/header';
import Playground from './components/Playground/playground';
import Footer from './components/Footer/footer';
import ExamplePage from './components/ExamplePage/examplePage';


class App extends React.Component{
  render(){
    return(
      <Router>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Header />

          <Switch>
            <Route exact path="/react-moving-text/">
              <Playground />
            </Route>
            <Route path="/react-moving-text/example">
              <ExamplePage />
            </Route>
          </Switch>

          <Footer />
        </ThemeProvider>
      </Router>
    )
  }
}


export default App