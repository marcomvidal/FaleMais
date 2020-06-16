import React, { Component } from 'react';
import { NavLink } from './NavLink';

export class NavBar extends Component {
  state = {
    links: [
      { id: '1', label: 'Tabela de tarifas', url: '/' },
      { id: '2', label: 'Calculadora FaleMais', url: '/calculadora' }
    ]
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Aramo</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.state.links.map(link => <NavLink key={link.id} link={link} />)}
          </ul>
        </div>
      </nav>
    );
  }
}