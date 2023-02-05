import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="contact">
        <h2 className="section-title">Contact Me</h2>
        <div className="row">
          <div className="contact-info">
            <h4>LinkedIn</h4>
            <a href={`https://linkedin.com/in/${resumeData.linkedinId}`}>{resumeData.linkedinId}</a>
          </div>
        </div>
      </section>
    );
  }
}