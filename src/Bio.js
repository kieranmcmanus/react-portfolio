import React, { Component } from 'react';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class Bio extends Component {

  render() {

    return (
      <div id='bio'>
        <h2>About Me</h2>
        <img src={profile} alt='profile' className='profile'/>
        <p style={{ paddingTop: 25 }}>I'm Kieran McManus, a New York based Front End Developer with experience in React.js, Node.js, Wordpress, PHP, and design.</p>
        <p> I love creating beautiful, functional web sites and apps no matter how big or small the venture.</p>
        <SocialProfiles />
      </div>
    )
  }
}

export default Bio;
