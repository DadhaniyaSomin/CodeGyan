import React from 'react';
import './style.css';
import Home From './pages/Home';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exect>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
