import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us" id="about">
      <div>
        <img className="about-us-image" src="image/about-us.svg" alt="image" />
      </div>
      <div>
        <p className="about-us-heading">About Us</p>
        <div className="about-us-content">
          <p className="about-us-mainpart">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
