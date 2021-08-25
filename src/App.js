import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle, {
  GlobalWindowContainer,
} from './globalStyles/GlobalStyles';
import ViewportProvider from './contexts/ViewportProvider';
import { ThemeStore, Theme } from './contexts/ThemeStore';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Project from './components/pages/project/Project';
import SideNavbarProvider from './contexts/SideNavbarProvider';
import { data } from './data';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import ItemList from './components/pages/itemList/ItemList';

function App() {
  const categoryList = [...new Set(data.map((item) => item.category))];

  const CategoryRoutes = [];

  categoryList.map((category) =>
    CategoryRoutes.push({
      path: `/${category}`,
      category: `${category}`,
      Component: ItemList,
    })
  );

  return (
    <>
      <ViewportProvider>
        <SideNavbarProvider>
          <ThemeStore>
            <Theme>
              <Router>
                <ScrollToTop />
                <GlobalStyle></GlobalStyle>
                <GlobalWindowContainer>
                  <Navbar categoryList={categoryList}></Navbar>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={() => (
                        <Home categoryList={categoryList}></Home>
                      )}
                    ></Route>

                    {CategoryRoutes.map(({ path, category, Component }) => (
                      <Route key={path} exact path={path}>
                        <Component category={category}></Component>
                      </Route>
                    ))}
                    {CategoryRoutes.map(({ path }) => (
                      <Route
                        exact
                        key={`${path}/:pathName`}
                        path={`${path}/:pathName`}
                        component={Project}
                      ></Route>
                    ))}
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                  </Switch>
                  <Footer></Footer>
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
