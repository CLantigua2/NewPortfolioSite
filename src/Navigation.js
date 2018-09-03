import React, { Component } from "react";
import './App.css';

class Navigation extends Component {
  render() {
    const sections = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
    const navLinks = sections.map(section => {
      return (
        <li><a href={'#' + section}>{section}</a></li>
      )
    });
    return (
      <nav>
        <h1 className="logo">{this.props.logoTitle}</h1>

        <ul>
          {navLinks}
        </ul>
      </nav>


    );
  }
}

export default Navigation;
