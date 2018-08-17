import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from './Navigation';
import Header from './Header';
import AboutMe from './AboutMe';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Services from './Services';
import registerServiceWorker from "./registerServiceWorker";
library.add(fab, faCheckSquare, faCoffee);

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
