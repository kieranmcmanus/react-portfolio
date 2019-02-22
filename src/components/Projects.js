import React, { Component } from 'react';
import PROJECTS from '../data/projects';

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

  state = { isMobile: false };

  componentDidMount() {
    const isMobile = window.innerWidth <= 750;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile })
    }
    document.addEventListener('resize', () => {
      const isMobile = window.innerWidth <= 750;
      if (isMobile !== this.state.isMobile) {
        this.setState({ isMobile })
      }
    });
  }

  render() {
    if (this.state.isMobile === false) {
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
    } else {
      return (
        <div id='projects'>
          <h2 style={{ padding: 50 }}>Highlighted Projects</h2>
          <div>
            {
              PROJECTS.map(PROJECT => {
                return (
                  <ProjectEven key={PROJECT.id} project={PROJECT} />
                );
              })
            }
          </div>
        </div>
      );
    }

    // return (
    //   <div id='projects'>
    //     <h2 style={{ padding: 50 }}>Highlighted Projects</h2>
    //     <div>
    //       {
    //         PROJECTS.map(PROJECT => {
    //           let n = PROJECT.id;
    //           if (this.state.isMobile === false) {
    //             if (n % 2 === 1) {
    //               return (
    //                 <ProjectOdd key={PROJECT.id} project={PROJECT} />
    //               );
    //             } else {
    //               return (
    //                 <ProjectEven key={PROJECT.id} project={PROJECT} />
    //               );
    //             }
    //           } else {
    //             return (
    //               <ProjectOdd key={PROJECT.id} project={PROJECT} />
    //             );
    //           }
    //         })
    //       }
    //     </div>
    //   </div>
    // )
  }
}

export default Projects;
