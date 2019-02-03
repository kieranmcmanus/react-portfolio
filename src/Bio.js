import React, { Component } from 'react';
import profile from './assets/profile.png';

class Bio extends Component {
  // state = { displayBio: false };
  //
  // toggleDisplayBio = () => {
  //   this.setState({ displayBio: !this.state.displayBio });
  // }

  render() {

    return (
      <div>
      <img src={profile} alt='profile' className='profile'/>
        <h1>Hello!</h1>
        <p>I'm Kieran McManus, a New York based Front End Developer with experience in React.js, Node.js, Wordpress, PHP, and design.</p>
        <p> I love creating beautiful, functional web sites and apps no matter how big or small the venture.</p>
      </div>
      // {
      //   this.state.displayBio ? (
      //     <div>
      //       <p> My favorite language is JavaScript, especially React.js, with which this portfolio is built!</p>
      //       <p>Besides coding, I also love music, traveling, and my family.</p>
      //       <button onClick={this.toggleDisplayBio}>Show less</button>
      //     </div>
      //   ) : (
      //     <div>
      //       <button onClick={this.toggleDisplayBio}>READ MORE</button>
      //     </div>
      //   )
      // }
    )
  }
}

export default Bio;
