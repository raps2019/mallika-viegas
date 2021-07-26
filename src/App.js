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
import Project from './components/pages/project/Project';
import SideNavbarProvider from './contexts/SideNavbarProvider';
import { data } from './data';
// import { useDarkMode } from './hooks/useDarkMode';

function App() {
  // const { componentMounted } = useDarkMode();

  const categoryList = [...new Set(data.map((item) => item.category))];

  console.log(categoryList[0]);

  // if (!componentMounted) {
  //   return <div></div>
  // }

  const CategoryRoutes = [];

  categoryList.map((category) =>
    CategoryRoutes.push({
      path: `/${category}`,
      category: `${category}`,
      Component: Writing,
    })
  );

  return (
    <>
      <ViewportProvider>
        <SideNavbarProvider>
          <ThemeStore>
            <Theme>
              <Router>
                <GlobalStyle></GlobalStyle>
                <GlobalWindowContainer>
                  <Navbar
                  categoryList={categoryList}></Navbar>
                  <Switch>
                    <Route exact path="/" component={Home}></Route>
                    {CategoryRoutes.map(({ path, category, Component }) => (
                      <Route key={path} exact path={path}>
                        <Component category={category}></Component>
                      </Route>
                    ))}
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route
                      exact
                      path="/writing/:pathName"
                      component={Project}
                    ></Route>
                    <Route
                      exact
                      path="/producing/:pathName"
                      component={Project}
                    ></Route>
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
