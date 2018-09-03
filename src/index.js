import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import AboutMe from './AboutMe';


import Services from './Services';
import registerServiceWorker from "./registerServiceWorker";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="Full Stack Developer" />
        <Header title="Carlos Lantigua" button="Click Me. I Dare You!" />
        <AboutMe />
        <Services />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
