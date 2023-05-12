import "../styles/home.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useState } from "react";
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



export default function Home() {

    const [index, setIndex] = useState(0);

    function handleClick(e) {
        let listIndex = e.target.attributes.index.value;
        setIndex(listIndex);
    };



    return (
        <main className="homePage">

            <section className="heroSection">
                <h1>Rodion Lizunkov</h1>
                <h1>Web Developer</h1>
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
                <h2>Experience</h2>
            </section>

            <section className="aboutSection">
                <h2>Off topic</h2>
            </section>

            <section className="contactSection">
                <h2>Contact</h2>
            </section>

        </main>
    );
};