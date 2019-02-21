import React, { Component } from 'react';
import SKILLS from './data/skills';

class Skill extends Component {
  render() {
    const { image, title } = this.props.skill;

    return (
        <span className='skill'>
          <img src={image} alt={title}/>
          <em>{title}</em>
        </span>
    )
  }
}

class Skills extends Component {
  render() {
    return (
      <div id='skills'>
        <h2>Skills</h2>
        <div className='skills'>
          {
            SKILLS.map(SKILL => {
              return <Skill key={SKILL.id} skill={SKILL} />;
            })
          }
        </div>
      </div>
    )
  }
}

export default Skills;
