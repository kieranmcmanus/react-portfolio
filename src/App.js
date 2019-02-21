import React, { Component } from 'react';
import Header from './Header';
import Bio from './Bio';
import Projects from './Projects';
import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Bio />
        <Skills />
        <Projects />
      </div>
    )
  }
}

export default App;
