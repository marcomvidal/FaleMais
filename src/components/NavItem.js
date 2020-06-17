import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link to={this.props.link.url} className="nav-link">
            {this.props.link.label}
        </Link>
      </li>
    )
  }
}