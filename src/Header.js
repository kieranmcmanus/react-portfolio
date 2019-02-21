import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <div id='header'>
        <h1>Kieran McManus</h1>
        <h3>Front End Developer</h3>
        <a className="arrow-wrap" href="#bio"><span className="arrow"></span></a>
      </div>
    )
  }
}

export default Header;
