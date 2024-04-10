import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    const { resumeData } = this.props;

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map(item => (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>
                      <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map(item => (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>
                      <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Proficient Skills</span></h1>
          </div>
          <p>{resumeData.skillsDescription}</p>
          <div className="nine columns main-col">
            <ul className="skills" style={{ columns: "2", columnGap: "1rem" }}>
              {
                resumeData.skills && resumeData.skills.map(item => (
                  <div>
                    <h3>{item.skillname}</h3>
                  </div>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="row otherskills">
          <div className="three columns header-col">
            <h1><span>Other Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div style={{ columns: "2", columnGap: "1rem" }}>
              {
                resumeData.otherskills && resumeData.otherskills.map(item => (
                  <div>
                    <h3>{item.skillname}</h3>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>


    );
  }
}

