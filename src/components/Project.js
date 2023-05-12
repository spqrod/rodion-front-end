import { Link } from "react-router-dom";
import "../styles/project.scss";
import drWatsonDental from "../images/dr-watson-dental.jpg";
import taradasiMedics from "../images/taradasi-medics.jpg";
import daryaZharabtsova from "../images/darya-zharabtsova.jpg";

export default function Project(props) {

    const projects = [
        {
            name: "Dr Watson Dental",
            description: "A website for a dental clinic with online appointment booking functionality.",
            builtWith: "React, NodeJS, Express",
            image: drWatsonDental
        },
        {
            name: "Darya Zharabtsova",
            description: "A private psychologist website with online consultation booking functionality.",
            builtWith: "React, NodeJS, Express",
            image: daryaZharabtsova
        },
        {
            name: "Taradasi Medics",
            description: "A website for a dental supplier.",
            builtWith: "React, NodeJS, Express",
            image: taradasiMedics
        }
    ];

    return (
        <div className="projectContainer">
            <div className="projectImageContainer">
                <img className="projectImage" src={projects[props.projectIndex].image} alt="" />
            </div>
            <div className="projectInfoContainer">
                <p>{projects[props.projectIndex].name}</p>
                <p>{projects[props.projectIndex].description}</p>
                <p>Built with:</p>
                <p>{projects[props.projectIndex].builtWith}</p>
                <Link>See the code</Link><br />
                <Link>See the website</Link>
            </div>
        </div>
    );
}