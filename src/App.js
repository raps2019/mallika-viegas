import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle, {
  GlobalWindowContainer,
} from './globalStyles/GlobalStyles';
import ViewportProvider from './contexts/ViewportProvider';
import { ThemeStore, Theme } from './contexts/ThemeStore';
import Home from './components/pages/home/Home';
import Producing from './components/pages/producing/Producing';
import Writing from './components/pages/writing/Writing';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import SideNavbarProvider from './contexts/SideNavbarProvider';

function App() {
  return (
    <>
      <ViewportProvider>
        <SideNavbarProvider>
          <ThemeStore>
            <Theme>
              <Router>
                <GlobalStyle></GlobalStyle>
                <GlobalWindowContainer>
                  <Navbar></Navbar>
                  <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/producing" component={Producing}></Route>
                    <Route path="/writing" component={Writing}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                  </Switch>
                </GlobalWindowContainer>
              </Router>
            </Theme>
          </ThemeStore>
        </SideNavbarProvider>
      </ViewportProvider>
    </>
  );
}

export default App;
