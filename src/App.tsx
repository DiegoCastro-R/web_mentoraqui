import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Singup from './Pages/Signup';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import NotFound from './Pages/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Singup} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
