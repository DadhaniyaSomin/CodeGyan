import React from 'react';
import './style.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nevigation from './componants/shared/Nevigation/Nevigation';
export default function App() {
  return (
    <BrowserRouter>
      <Nevigation />
      <Switch>
        <Route path="/" exect>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
