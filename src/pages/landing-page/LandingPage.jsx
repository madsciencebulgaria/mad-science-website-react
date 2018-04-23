import React, { Component } from 'react';
import ValueProposition from './components/value-proposition/ValueProposition';
import SocialMediaBar from './components/social-media-bar/SocialMediaBar';
import TimelineList from './components/timeline/TimelineList';
import Testimonials from './components/testimonials/Testimonials';
import Donation from './components/donation/Donation';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    function parallax() {
      var prlx_lyr = document.getElementById('landing-page');
      prlx_lyr.style.top = -(window.pageYOffset / -4) + 'px';
    }

    window.addEventListener('scroll', parallax, false);

    return (
      <div id="landing-page">
        <h1 className="title-landing-page">Mad Science</h1>
        <img src="/images/example-logo.jpg" id="landing-page-logo" alt="" />
        <h2 className="center">Let us help you with your digital presence.</h2>
        <div className="mdl-grid">
          <div className="mdl-cell--2-offset-desktop mdl-cell--1-offset-tablet" />
          <div
            id="page-subtitle"
            className="mdl-cell mdl-cell--8-col-desktop mdl-cell--6-col-tablet"
          >
            <ValueProposition />
          </div>
          <SocialMediaBar />
          <div className="mdl-cell--5-offset-desktop mdl-cell--2-offset-tablet mdl-cell--1-offset-phone" />
          <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone">
            Add something here
          </div>
        </div>
        <TimelineList />
        <Testimonials />
        <Donation />
      </div>
    );
  }
}
