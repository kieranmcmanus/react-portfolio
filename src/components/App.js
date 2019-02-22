import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';
import Bio from './Bio';
import Projects from './Projects';
import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Header />
        <Bio />
        <Skills />
        <Projects />
      </div>
    )
  }
}

export default App;
