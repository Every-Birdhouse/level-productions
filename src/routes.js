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
import NavBar from './components/NavBar';
import Footer from './components/Footer';


// What do we want the default route to be?
const Routes = (props) => (
  <Router {...props}>
    <div>
      <NavBar />
      <Switch>
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
