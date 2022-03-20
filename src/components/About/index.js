import React from "react";
// import imageOfMe from "../../images/me.jpeg"
function About() {
    return (
        <section className="container">
            <h2 className="nav-title-font">Mohammed Boussaada </h2>
            <hr />
            <div>
                <img className="mb-5" id="avatar" src={process.env.PUBLIC_URL + '/images/me.jpeg'} alt="Mohammed Boussaada" />
                <p>
                    Veterinarian and Web developer with a proven ability to adapt in both self-starting and environments while staying focused on achieving high quality results under strict deadlines.
                </p>
                <p>
                This quality and results - based approach drove me to choose the web development filed that will expand my learning and build upon my developer skills.
                </p>
                <hr/><hr/><br/><br/><br/><br/><br/>

            </div>
        </section>
    )
}
export default About;