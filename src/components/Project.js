import { Link } from "react-router-dom";

export default function Project(props) {

    const projects = [
        {
            name: "Dr Watson Dental",
            description: "A website for a dental clinic with online appointment booking functionality.",
            builtWith: "React, NodeJS, Express"
        },
        {
            name: "Darya Zharabtsova",
            description: "A private psychologist website with online consultation booking functionality.",
            builtWith: "React, NodeJS, Express"
        },
        {
            name: "Taradasi Medics",
            description: "A website for a dental supplier.",
            builtWith: "React, NodeJS, Express"
        }
    ];

    return (
        <div className="projectContainer">
            <p>{projects[props.projectIndex].name}</p>
            <p>{projects[props.projectIndex].description}</p>
            <p>Built with:</p>
            <p>{projects[props.projectIndex].builtWith}</p>
            <Link>See the code</Link><br />
            <Link>See the website</Link>
        </div>
    );
}