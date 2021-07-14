import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles/GlobalStyles';
import ViewportProvider from './contexts/ViewportProvider';
import { ThemeStore, Theme } from './contexts/ThemeStore';
import Home from './pages/home/Home';
import Producing from './pages/producing/Producing';
import Writing from './pages/writing/Writing';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Navbar from './navbar/Navbar';

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
