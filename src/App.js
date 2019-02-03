import React, { Component } from 'react';
import Header from './Header';
import Bio from './Bio';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <Bio />
        <hr />
        <SocialProfiles />
        <hr />
        <Projects />
      </div>
    )
  }
}

export default App;
