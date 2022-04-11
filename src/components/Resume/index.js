import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Mohammed Boussaada</h2>
          <ul>
            <li>
              veterinarian , full-stack web developer
              
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/mohamed0228/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://docs.google.com/document/d/11yCKUxjBVXJfs6DeM5knT9t4u8rzs4MxCc7L8-X6utI/edit?usp=sharing"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
            
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Resume;