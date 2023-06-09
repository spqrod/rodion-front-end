import "../styles/home.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import htmlIcon from "../images/html.svg";
import cssIcon from "../images/css.svg";
import jsIcon from "../images/js.svg";
import sassIcon from "../images/sass.svg";
import expressjsIcon from "../images/expressjs.svg";
import gitIcon from "../images/git.svg";
import githubIcon from "../images/github-mark.svg";
import materialIcon from "../images/material.svg";
import mongodbIcon from "../images/mongodb.svg";
import nodejsIcon from "../images/nodejs.svg";
import reactIcon from "../images/react.svg";
import webpackIcon from "../images/webpack.svg";
import restapiIcon from "../images/rest-api.png";
import terminalIcon from "../images/terminal.svg";
import w3cIcon from "../images/w3c.svg";
import Project from "../components/Project";
import ReCAPTCHA from "react-google-recaptcha";


export default function Home() {

    const [index, setIndex] = useState(0);

    function handleClick(e) {
        let listIndex = e.target.attributes.index.value;
        setIndex(listIndex);
    };
    
    function createTimeline() {
        const numberOfYearsSince2013 = new Date().getFullYear() - 2013 + 1;
        const array = [];
        for (let i = 0; i < numberOfYearsSince2013
            ; i++) {
            array.push( <div className="timelineYear" key={i}>{2013 + i}</div> );
        }
        return array;
    };

    const captchaRef = useRef(null);

    async function handleFormSubmit(e) {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();

        const { name, email, message } = e.target.elements;

        const messageDetails = {
            name: name.value,
            email: email.value,
            message: message.value,
            token
        };

        const response = await fetch("https://drwatsondental.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(messageDetails),
        });
        
        const result = await response.json();
        alert(result.status);
    };

    function revealLegalConsentCheckbox() {
        const legalConsentCheckboxContainer = document.querySelector(".legalConsentCheckboxContainer");
        legalConsentCheckboxContainer.classList.add("active");
    }

    function revealReCaptcha() {
        const reCaptcha = document.querySelector(".reCaptcha");
        reCaptcha.classList.add("active");
    }

    return (
        <main className="homePage">

            <section className="heroSection">
                <div className="infoContainer">
                    <h1>Hej!</h1>
                    <h1>I'm Rodion.</h1>
                </div>
                <div className="imageContainer">
                    <img className="image" src={require("../images/hero-photo.jpeg")} alt="" />
                </div>
            </section>

            <section className="aboutSection">
                <h2>About</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eum ratione hic cupiditate, quod, laudantium, nemo voluptas maiores deleniti nisi eaque odit obcaecati rerum voluptatibus eveniet? Dolorem consequatur, similique molestiae fugit tenetur iure cumque. Facilis assumenda cumque, maiores ab quas tenetur porro dolorem ducimus soluta repellat laborum dolore quis, enim animi odit provident eum! Molestiae doloremque non quis cupiditate nesciunt ad dignissimos vel voluptatum velit voluptate mollitia dolorum excepturi quod accusantium iusto architecto iure animi quo quaerat saepe, soluta est optio ut! Laudantium itaque cupiditate iure beatae, accusamus animi harum aspernatur totam iusto dolor similique sed earum autem culpa doloremque.</p>
            </section>

            <section className="stackSection">
                <h2>My Toolbox</h2>
                <div className="stackContainer">
                    <div className="stackItemsContainer">
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={htmlIcon} alt="" />
                            </div>
                            <p className="stackItemName">HTML</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={cssIcon} alt="" />
                            </div>
                            <p className="stackItemName">CSS</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={jsIcon} alt="" />
                            </div>
                            <p className="stackItemName">JavaScript</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={reactIcon} alt="" />
                            </div>
                            <p className="stackItemName">React</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={webpackIcon} alt="" />
                            </div>
                            <p className="stackItemName">Webpack</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={sassIcon} alt="" />
                            </div>
                            <p className="stackItemName">Sass</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={materialIcon} alt="" />
                            </div>
                            <p className="stackItemName">MaterialUI</p>
                        </div>
                    </div>
                    <div className="stackItemsContainer">
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={nodejsIcon} alt="" />
                            </div>
                            <p className="stackItemName">NodeJS</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={mongodbIcon} alt="" />
                            </div>
                            <p className="stackItemName">MongoDB</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={expressjsIcon} alt="" />
                            </div>
                            <p className="stackItemName">ExpressJS</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={restapiIcon} alt="" />
                            </div>
                            <p className="stackItemName">Rest API</p>
                        </div>
                    </div>
                    <div className="stackItemsContainer">
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={gitIcon} alt="" />
                            </div>
                            <p className="stackItemName">Git</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={githubIcon} alt="" />
                            </div>
                            <p className="stackItemName">Github</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={terminalIcon} alt="" />
                            </div>
                            <p className="stackItemName">Command Line</p>
                        </div>
                        <div className="stackItemContainer">
                            <div className="stackImgContainer">
                                <img className="stackItemImg" src={w3cIcon} alt="" />
                            </div>
                            <p className="stackItemName">W3C</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projectsSection">
                <h2>Some of my Work</h2>
                <div className="projectsContainer">
                    <div className="projectsList">
                        <ul>
                            <li>
                                <button className="projectsListItem" type="button" onClick={handleClick} index="0">
                                    Dr Watson Dental
                                </button>
                            </li>
                            <li>
                                <button className="projectsListItem" type="button" onClick={handleClick} index="1">
                                    Darya Zharabtsova
                                </button>
                            </li>
                            <li>
                                <button className="projectsListItem" type="button" onClick={handleClick} index="2">
                                    Taradasi Medics
                                </button>
                            </li>
                        </ul>
                    </div>
                    <Project projectIndex={index}/>
                </div>




{/* 

                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Dr Watson Dental" {...a11yProps(0)} />
                    <Tab label="Darya Zharabtsova" {...a11yProps(1)} />
                    <Tab label="Taradasi Medics" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className="projectContainer">
                        <img className="projectImg" src="" alt="" />
                        <p className="projectName">Project Name 1</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nobis!</p>
                        <p>Tech used: React, NodeJS, MongoDB</p>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel> */}
            </section>

            <section className="experienceSection">
                <h2>My Story</h2>
                <div className="experienceContainer">
                    {createTimeline()}
                    <div className="experienceItemContainer appliedMathematics">
                        <p>Applied Mathematics - Bachelor Studies</p>
                        <p>Switched to Computer Science</p>
                        <p>2013 - 2014</p>
                    </div>
                    <div className="experienceItemContainer computerScience">
                        <p>Computer Science - Bachelor Studies</p>
                        <p>2014 - 2018</p>
                    </div>
                    <div className="experienceItemContainer hotel">
                        <p>Small Hotel and Apartment Complex</p>
                        <p>Director</p>
                        <p>2018 - 2022</p>
                    </div>
                    <div className="experienceItemContainer wordpress">
                        <p>Wordpress Developer (part time)</p>
                        <p>Freelance</p>
                        <p>2020 - 2022</p>
                    </div>
                    <div className="experienceItemContainer javascript">
                        <p>Full Stack Javascript Developer</p>
                        <p>Freelance</p>
                        <p>2022 - present</p>
                    </div>
                </div>
            </section>

            <section className="aboutSection">
                <h2>Off topic</h2>
                <div className="aboutContainer">
                    <div className="aboutImageContainer">
                        <img className="aboutImage" src={require("../images/hiking.jpeg")} alt="" />
                    </div>
                    <div className="aboutInfoContainer">
                        <p>
                            I consider myself a well organized person with good time and task managements skills. My big 3 tools for this I use 24/7 are Calendar, Reminders and Obsidian. The former is an amazing open-source app I use for writing, planning and drawing mind maps and plans. 
                        </p>
                        <p>
                            <em>Not all those who wander are lost.</em><br/>
                            My main thing after coding is hiking. I love getting into the wild, wandering with or without maps and sleeping under the stars.
                        </p>
                        <p>
                            I also enjoy reading good literature from Homer to Sci-Fi to self-development. My favourite authors are John R. R. Tolkien, Stephen Fry, Sir Arthur Conan Doyle, Robert Greene.
                        </p>
                    </div>
                </div>
            </section>

            <section className="contactSection">
                <h2>Contact</h2>
                <div className="contactContainer">
                    <form className="contactForm" onSubmit={handleFormSubmit}>
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <input type="email" name="email" id="email" required placeholder="Email" onChange={revealLegalConsentCheckbox}/>
                        <textarea name="message" id="message" cols="30" rows="10" required placeholder="Message"></textarea>
                        <div className="legalConsentCheckboxContainer">
                            <input className="legalConsentCheckbox" type="checkbox" name="legalConsentCheckbox" id="legalConsentCheckbox" required onChange={revealReCaptcha} />
                            <label htmlFor="legalConsentCheckbox">I agree to Privacy Policy and Terms of Service</label>
                        </div>
                        <ReCAPTCHA 
                            className = "reCaptcha"
                            sitekey = { process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY }
                            ref = { captchaRef }
                        />
                        <button className="button">Send</button>
                    </form>
                    <div className="contactLinksContainer">
                        <Link className="contactLink" to="">GitHub</Link>
                        <Link className="contactLink" to="">LinkedIn</Link>
                        <Link className="contactLink" to="">Facebook</Link>
                    </div>
                </div>

            </section>

        </main>
    );
};