import React from 'react';

const Footer = ({ resumeData }) => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url}>
                    <i className={item.className} />
                  </a>
                </li>
              ))
            }
          </ul>
          <ul className="copyright">
            <li>&copy; Copyright 2014 CeeVee</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;