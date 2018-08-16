import React, { Component } from 'react';
import Background from './img/backgroundImg.png';
import Avatar from './img/bitMoji.png';
import './Header.css';

const myStyles = {
  'backgroundImage': `url( ${Background} )`,
  'height': '40vh',
  'backgroundSize': 'cover'
}

class Header extends Component {
  render() {
    return (
      <header style={myStyles}>
        <div className="panel">
          <img src={Avatar} alt="My avatar"></img>
          <h1>{this.props.title}</h1>
          <p className="subTitle">&#123; <span className="this">this</span>.Job = Developer &#125;</p>
        </div>
      </header>
    );
  }
};

export default Header;