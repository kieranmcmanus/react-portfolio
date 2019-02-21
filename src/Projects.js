import React, { Component } from 'react';
import PROJECTS from './data/projects';

class ProjectOdd extends Component {
  render() {

    const { title, image, description, link, linkDesc } = this.props.project;

    return (
      <div className='project'>
        <div className='projectImg'>
          <img src={image} alt='profile'/>
        </div>
        <div className='projectInfo'>
          <h3>{title}</h3>
          <a href={link}>{linkDesc}</a>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

class ProjectEven extends Component {
  render() {

    const { title, image, description, link, linkDesc } = this.props.project;

    return (
      <div className='project'>
        <div className='projectInfo'>
          <h3>{title}</h3>
          <a href={link}>{linkDesc}</a>
          <p>{description}</p>
        </div>
        <div className='projectImg'>
          <img src={image} alt='profile'/>
        </div>
      </div>
    )
  }
}

class Projects extends Component {
  render() {
    return (
      <div id='projects'>
        <h2 style={{ padding: 50 }}>Highlighted Projects</h2>
        <div>
          {
            PROJECTS.map(PROJECT => {
              let n = PROJECT.id;
              if (n % 2 === 1) {
                return (
                  <ProjectOdd key={PROJECT.id} project={PROJECT} />
                );
              } else {
                return (
                  <ProjectEven key={PROJECT.id} project={PROJECT} />
                );
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default Projects;
