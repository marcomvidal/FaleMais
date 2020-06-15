import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Prices } from './pages/Prices';
import { Calculator } from './pages/Calculator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <React.Fragment>
    <NavBar />
    <BrowserRouter>
    <section className="container mt-1">
      <Switch>
        <Route path="/" exact component={Prices} />
        <Route path="/calculadora" component={Calculator} />
      </Switch>
    </section>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
