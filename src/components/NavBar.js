import React, { Component } from 'react';
import { NavItem } from './NavItem';
import { links } from '../data/links';

export class NavBar extends Component {
  state = {
    links: links
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Aramo</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.state.links.map(link =>
              <NavItem
                key={link.id}
                link={link}
                onNavigate={this.onNavigate} />)}
          </ul>
        </div>
      </nav>
    );
  }
}