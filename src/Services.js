import React, { Component } from 'react';
import './App.css';
import Background from './img/purplebackground.png';


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
        <div class="ProgressContainer">
          <div class="progressBar">
            <h4>HTML5</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-100"></div>
            </div>
          </div>

          <div class="progressBar">
            <h4>CSS</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-70"></div>
            </div>
          </div>

          <div class="progressBar">
            <h4>Responsive Design</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-80"></div>
            </div>
          </div>

          <div class="progressBar">
            <h4>JavaScript</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-70"></div>
            </div>
          </div>

          <div class="progressBar">
            <h4>ReactJS</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-60"></div>
            </div>
          </div>

          <div class="progressBar">
            <h4>Backend</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-30"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Services;