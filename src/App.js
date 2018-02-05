import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import  Experience  from './components/Experience';
import  Education  from './components/Education';
import  Language  from './components/Language';
import  Divers  from './components/Divers';
import  Skills  from './components/Skills';
import  Project  from './components/Project';

class App extends Component {

  ExperienceShow()
  {
    let Arrays = [];
  resume.experiences.map((item,i)=>{
  Arrays.push(  <Experience item={ item } key={ i }/>)
  });
  return Arrays;
  }

langaueShow()
{
  let Lang = [];
resume.languages.map((item,i)=>{
Lang.push(  <Language item={ item } key={ i }/>)
});
return Lang;
}

educationShow()
{
  let Educations1=[];
  resume.education.map((item,i)=>{
  Educations1.push(  <Education item={ item } key={ i } />)
  });
  return Educations1;
}

diversShow()
{
  let Diverse=[];
  resume.interests.map((item,i)=>{
  Diverse.push(  <Divers item={ item } key={ i } />)
  });
  return Diverse;
}

skillsShow()
{
  let Skills1=[];
  resume.skills.map((item,i)=>{
  Skills1.push(  <Skills item={ item } key={ i } />)
  });
  return Skills1;
}

projectShow()
{
  let Projects=[];
  resume.projects.map((item,i)=>{
  Projects.push(  <Project item={ item } key={ i } />)
  });
  return Projects;
}

  render() {
    console.log(resume);
    return (
      <div className="wrapper">
          <div className="sidebar-wrapper">
              <div className="profile-container">
                  <img className="profile img-circle" src={ resume.image } alt="" />
                <h1 className="name">{ resume.name }</h1>
              <h3 className="tagline">Full Stack Developer</h3>
              </div>

              <div className="contact-container container-block">
                  <ul className="list-unstyled contact-list">
                      <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{ resume.email }</a></li>
                    <li className="phone"><i className="fa fa-phone"></i>{ resume.phone }</li>
              <li className="github"><i className="fa fa-github"></i><a href={ resume.githubURL } >{ resume.github }</a></li>
              <li className="twitter"><i className="fa fa-twitter"></i><a href={ resume.twitterURL }>{ resume.twitter }</a></li>
            <li className="youtube"><i className="fa fa-youtube"></i><a href={ resume.youtube }>youtube</a></li>
                  </ul>
              </div>
              <div className="education-container container-block">
                  <h2 className="container-block-title">Education</h2>
                { this.educationShow() }
              </div>

              <div className="languages-container container-block">
                  <h2 className="container-block-title">Languages</h2>
                { this.langaueShow() }
              </div>
              <div className="interests-container container-block">
                  <h2 className="container-block-title">Divers</h2>
                  { this.diversShow() }


              </div>

          </div>

          <div className="main-wrapper">

              <section className="section summary-section">
                  <h2 className="section-title"><i className="fa fa-user"></i>Profile de carrière</h2>
                <div className="summary">
                      <p>
                        { resume.profile }{ resume.p }{ resume.p1 }
                      </p>
                  </div>
              </section>
              <section className="section projects-section">
                  <h2 className="section-title"><i className="fa fa-archive"></i>Projet de fin d’études</h2>
                { this.projectShow() }
              </section>
              <section className="section experiences-section">
                  <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                { this.ExperienceShow() }

              </section>



              <section className="skills-section section">
                  <h2 className="section-title"><i className="fa fa-rocket"></i>Domaines de compétencess</h2>
                <div className="skillset">
                      <div className="item">
                        { this.skillsShow() }
                      </div>
                  </div>
              </section>

          </div>
      </div>
    );
  }
}

export default App;
