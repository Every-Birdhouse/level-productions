import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import AgeCheck from './components/AgeCheck';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const Routes = (props) => (
  <Router {...props}>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={AgeCheck} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/contact-us" component={ContactUs} />
        <Route component={NotFound} />
      </Switch>
      {/*<Footer />*/}
    </div>
  </Router>
);

export default Routes;
