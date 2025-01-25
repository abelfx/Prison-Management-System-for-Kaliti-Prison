import React from "react";
import { Link } from "react-router-dom";
import "./Welcomepage.css";
import prison_logo from "../../img/prison_logo6.png";

const Welcome = () => {
  return (
    <div className="main-container">
      <header className="site-header">
        <div className="container">
          <div className="pic-name">
            <img src={prison_logo} alt="side image" />
            <h1 className="brand-logo">Prison Management</h1>
          </div>

          <nav className="navigation">
            <Link to="/login" className="nav-item">
              Login
            </Link>
            <Link to="/Signup" className="nav-item">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <section className="main-content">
        <div className="content-container">
          <h1 className="title-header">Prison Management System</h1>
          <p className="hero-description">
            <strong>OUR MISSION</strong>
            <br />
            PROVIDE A CONTINUUM OF SERVICES TO MEET THE NEEDS OF THOSE ENTRUSTED
            TO OUR CARE, CREATING A SAFE AND PROFESSIONAL ENVIRONMENT WITH THE
            OUTCOME OF REDUCED VICTIMIZATION, SAFER COMMUNITIES AND AN EMPHASIS
            ON THE PREMIUM OF LIFE.
          </p>
          <div className="button-container">
            <button className="btn-learn-more">
              <Link to="/LearnMore" className="btn-link">
                Learn More
              </Link>
            </button>

            <button className="btn-get-manual">
              <Link className="btn-link">Get Manual</Link>
            </button>
          </div>
        </div>
        <img src={prison_logo} alt="side image" className="image-logo" />
      </section>

      <div className="choice-section">
        <article className="choice">
          <img src={prison_logo} alt="side image" />
          <p>
            victims services exist to aid individuals who have been victimized
            by inmates under the department's custody or supervision and notify
            victims before an inmate's release
          </p>
          <Link to="/login" className="link">
            Inmate Management
          </Link>
        </article>
        <article className="choice">
          <img src={prison_logo} alt="side image" />
          <p>
            victims services exist to aid individuals who have been victimized
            by inmates under the department's custody or supervision and notify
            victims before an inmate's release
          </p>
          <Link to="/login" className="link">
            Staff Management
          </Link>
        </article>
        <article className="choice">
          <img src={prison_logo} alt="side image" />
          <p>
            victims services exist to aid individuals who have been victimized
            by inmates under the department's custody or supervision and notify
            victims before an inmate's release
          </p>
          <Link to="/login" className="link">
            Medical Management
          </Link>
        </article>
      </div>

      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Prison Management System. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Welcome;
