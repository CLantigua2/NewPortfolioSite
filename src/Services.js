import React, { Component } from 'react';
import './Services.css';
import Background from './img/purplebackground.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const myStyles = {
  'backgroundImage': `url( ${Background} )`,
  'minheight': '60vh',
  'backgroundSize': 'cover',
  'padding': '40px',
}

class Services extends Component {

  render() {
    return (
      <div className="services" style={myStyles}>
        <h3>services</h3>
        <h2>What I Offer</h2>
        <div className="row">
          <div>
            <span>
              <i className="fab fa-react"></i>
            </span>
            <h4>Responsive</h4>
            <p>Looks great on any size!</p>
          </div>
          <div>
            <span>
              <ion-icon name="brush"></ion-icon>
            </span>
            <h4>Redesigned</h4>
            <p>Freshly redesigned for bootstrap 4.</p>
          </div>
          <div>
            <span>
              <ion-icon name="thumbs-up"></ion-icon>
            </span>
            <h4>Favorited</h4>
            <p>Millions of users <ion-icon name="heart"></ion-icon> start Bootstrap!</p>
          </div>
          <div>
            <span>
              <ion-icon name="help"></ion-icon>
            </span>
            <h4>Question</h4>
            <p>I must ask you a question.</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Services;