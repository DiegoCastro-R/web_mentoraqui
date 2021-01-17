import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Singup from './Pages/Signup';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Singup} />
    </BrowserRouter>
  );
};

export default App;
