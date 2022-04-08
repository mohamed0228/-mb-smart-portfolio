import React from "react";
import ProjectCards from "../Project";
import 'bootstrap/dist/css/bootstrap.min.css'

const portfolio = [
    {
        "id": 1,
        "name": "Flowers To Go",
        "image": "/images/162339409-96549c9a-393d-4223-a95c-7954687c1f0e.png",
        "github": "https://github.com/mohamed0228/project-3",
        "deploy": "https://flowers-to-go.herokuapp.com/",
        "topics": "HTML5, CSS, Javascript, node.js,graphql,mangoDB,mangoose,jwt,stripe, Bootstrap"
    },
    {
        "id": 2,
        "name": "Sniper Sneakers ",
        "image": "/images/sniper.png",
        "github": "https://github.com/kpehl/react-retreat",
        "deploy": "https://react-retreat.herokuapp.com/",
        "topics": " node, jawsdb, mysql, sequelize,dotenv, handelbars,express-session,model-view-controller"
    },
    {
        "id": 3,
        "name": "Soccer Central Fan",
        "image": "/images/soccer.png",
        "github": "https://github.com/cheesecakeassassin/group5-football-fanpage",
        "deploy": "https://cheesecakeassassin.github.io/group5-football-fanpage/",
        "topics": "node, server-side-api, javascript,jquery,local-storage"
    },
    {
        "id": 4,
        "name": "smart portfolio",
        "image": "/images/smart.png",
        "github": "https://github.com/mohamed0228/smart-portfolio",
        "deploy": "https://mohamed0228.github.io/smart-portfolio/",
        "topics": "html, css"
    },
    {
        "id": 5,
        "name": "Weather Dashboard",
        "image": "/images/weather.jpeg",
        "github": "https://github.com/mohamed0228/weather-forecast",
        "deploy": "https://mohamed0228.github.io/weather-forecast/",
        "topics": "moment.js, javascript, jQuery, localStorage, API"
    },
    {
        "id": 6,
        "name": "Budget Tracker",
        "image": "/images/budget.png",
        "github": "https://github.com/mohamed0228/MB-Budget-Tracker",
        "deploy": "https://enigmatic-plains-99724.herokuapp.com/",
        "topics": "node, express, javascript, mongoDB, mongoose, nodemon,heroku"
    },
    {
        "id": 7,
        "name": "Work Day Scheduler",
        "image": "/images/work.png",
        "github": "hhttps://github.com/mohamed0228/My-Work-Day-Scheduler",
        "deploy": "https://mohamed0228.github.io/My-Work-Day-Scheduler/",
        "topics": "HTML5, CSS, Javascript, JQuery, Bootstrap"
    }
   
]
function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
    return (
        <section className="cointainer">
            <div className="project">
                <h2 className="top-title"> bootcamp Portfolio</h2>
                <hr />

            </div>
           
            <Wrapper id="card-data">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics} />

                ))}

            </Wrapper>




        </section>
    )

}
export default Portfolio;