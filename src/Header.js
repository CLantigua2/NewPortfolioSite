import React, { Component } from 'react';
import Background from './img/purplebackground.png';
import Avatar from './img/bitMoji.png';
import './App.css';

const myStyles = {
  'backgroundImage': `url( ${Background} )`,
  'height': '100%',
  'minheight': '60vh',
  'backgroundSize': 'cover',
  'padding': '40px',
}

class Header extends Component {
  render() {
    return (
      <header style={myStyles}>
        <div className="panel">
          <img src={Avatar} alt="My avatar"></img>
          <h1>{this.props.title}</h1>
          <p className="subTitle">&#123; <span className="this">this</span>.Job = Developer &#125;</p>
          <a href="https://www.youtube.com/channel/UCdqrDHyv3IMnilJBjFTbK0g" target="_blank">{this.props.button}</a>
        </div>
      </header>
    );
  }
};

export default Header;