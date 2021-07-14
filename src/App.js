import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles/GlobalStyles';
import Home from './pages/home/Home';
import Producing from './pages/producing/Producing';
import Writing from './pages/writing/Writing';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
