import React, { Component } from 'react';
import './AboutMe.css';
import Fade from 'react-reveal/Fade';

class AboutMe extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutBox">
          <Fade right>
            <h1>About Me</h1>
          </Fade>
          <Fade>
            <p>Hi! I'm Carlos, A Software Developer from Eastern NC. To most of my friends, that means I am a hacker that can break into their bank accounts. I don't dare tell them that it's not true and that I just enjoy creating innovative solutions using technologies like <span className="redLetter"><Fade left>HTML5, CSS, Bootstrap, LESS, JavaScript, ReactJS, AngularJS, MongoDB, NodeJS</Fade></span> They ask me if I can break into their computers. I normally just laugh and explain that yes.. I can.</p>
          </Fade>
        </div>
        <div className="aboutBox">
          <Fade right>
            <h1>Interests</h1>
          </Fade>
          <Fade>
            <p>I have a 4 year old daughter that I get to train as my minion. We go to science museums where we plan out world domination by gathering information. I also enjoy teaching her about parts that make up a computer, this will come in handy when we unveil our domination plans. I also enjoy working on personal projects using different technologies and building computers on the side.</p>
          </Fade>
        </div>
      </div>
    )
  }
};

export default AboutMe;