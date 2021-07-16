import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles/GlobalStyles';
import ViewportProvider from './contexts/ViewportProvider';
import { ThemeStore, Theme } from './contexts/ThemeStore';
import Home from './components/pages/home/Home';
import Producing from './components/pages/portfolio/producing/Producing';
import Writing from './components/pages/portfolio/writing/Writing';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <ViewportProvider>
        <ThemeStore>
          <Theme>
            <Router>
              <GlobalStyle></GlobalStyle>
              <Navbar></Navbar>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/producing" component={Producing}></Route>
                <Route path="/writing" component={Writing}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
              </Switch>
            </Router>
          </Theme>
        </ThemeStore>
      </ViewportProvider>
    </>
  );
}

export default App;
