import React, { Component } from 'react';
import './App.css';
import Background from './img/purplebackground.png';
import Fade from 'react-reveal/Fade';



const myStyles = {
  'backgroundImage': `url( ${Background} )`,
  'minheight': '60vh',
  'backgroundSize': 'cover',
  'padding': '40px',
}

class Services extends Component {

  render() {
    return (
      <div className="services" style={myStyles} Fade>
        <div class="ProgressContainer">
          <Fade>
            <div class="progressBar">
              <h4>HTML5</h4>
              <div class="progressBarContainer">
                <div class="progressBarValue value-100"></div>
              </div>
            </div>
          </Fade>

          <Fade>
            <div class="progressBar">
              <h4>CSS</h4>
              <div class="progressBarContainer">
                <div class="progressBarValue value-70"></div>
              </div>
            </div>
          </Fade>

          <Fade>
            <div class="progressBar">
              <h4>Responsive Design</h4>
              <div class="progressBarContainer">
                <div class="progressBarValue value-80"></div>
              </div>
            </div>
          </Fade>

          <Fade>
            <div class="progressBar">
              <h4>JavaScript</h4>
              <div class="progressBarContainer">
                <div class="progressBarValue value-80"></div>
              </div>
            </div>
          </Fade>

          <Fade>
            <div class="progressBar">
              <h4>ReactJS</h4>
              <div class="progressBarContainer">
                <div class="progressBarValue value-70"></div>
              </div>
            </div>
          </Fade>

          <Fade>
            <div class="progressBar">
              <h4>Backend</h4>
              <div class="progressBarContainer">
                <div class="progressBarValue value-30"></div>
              </div>
            </div>
          </Fade>
        </div>
      </div >
    )
  }
};

export default Services;