import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Singup from './Pages/Signup';
import About from './Pages/About';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Singup} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
};

export default App;
