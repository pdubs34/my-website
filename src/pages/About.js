// About.js

import React from 'react';
import '../styles/about.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <section>
        <h2>Introduction</h2>
        <p>Hi, I'm [Your Name]. I'm currently studying [Your Major/Field] at [Your University].</p>
      </section>

      <section>
        <h2>Hobbies</h2>
        <ul>
          <li>Hobby 1: Description or details</li>
          <li>Hobby 2: Description or details</li>
          {/* Add more hobbies as needed */}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>[Year] - [Degree], [University]</li>
          <li>[Year] - [Degree], [University]</li>
          {/* Add more education details as needed */}
        </ul>
      </section>

      {/* Add more sections for work experience, skills, achievements, etc. */}
      
    </div>
  );
}

export default About;
