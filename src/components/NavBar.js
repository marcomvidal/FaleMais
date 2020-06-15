import React, { Component } from 'react';
import { NavLink } from './NavLink';

export class NavBar extends Component {
  state = {
    links: [
      { key: '1', label: 'Tabela de tarifas', url: '/' },
      { key: '2', label: 'Calculadora FaleMais', url: '/calculadora' }
    ]
  };

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Aramo</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {this.state.links.map(link => <NavLink link={link} />)}
          </ul>
        </div>
      </nav>
    );
  }
}