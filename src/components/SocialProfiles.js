import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

class SocialProfile extends Component {
  render() {
    const { image, link } = this.props.socialProfile;

    return (
        <span style={{ margin: 5 }}>
          <a href={link} target="_blank"><i className={image}></i></a>
        </span>
    )
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <div id='social'>
          {
            SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
              return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
            })
          }
        </div>
      </div>
    )
  }
}

export default SocialProfiles;
