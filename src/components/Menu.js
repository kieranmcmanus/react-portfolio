import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Menu extends Component {

  state = { isTop: true };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  render() {
    if (this.state.isTop === false) {
      return (
        <Navbar collapseOnSelect expand="xl" bg="light" variant="light" fixed="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content-center"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link href="#header">Home</Nav.Link>
              <Nav.Link href="#bio">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        // <nav className="main_nav">
        //   <ul className="name">
        //     <li><a href="index.html">Kieran McManus</a></li>
        //   </ul>
        //   <ul className="menu">
        //     <li><a href="#bio">About</a></li>
        //     <li><a href="#projects">Projects</a></li>
        //   </ul>
        // </nav>
      )
    } else {
      return (
        // <nav className="nav2">
        //   <a id="hamburger" href="#"><i className="fa fa-bars"></i></a>
        //   <ul>
        //     <li><a href="index.html">Home</a></li>
        //     <li><a href="#about">About</a></li>
        //     <li><a href="#work">Projects</a></li>
        //     <li><a href="#contact">Contact</a></li>
        //   </ul>
        // </nav>
        null
      )
    }
  }
}

export default Menu;
