import { Link } from 'react-router-dom';
import React from "react";
import { projects } from "../data";
import '../index.css'

export default function Projects() {
    const toyProjects = {
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
        backgroundColor: 'var(--base02)',
        gap: '16px'
    }
    const avatar = {
        width: '112px',
        borderRadius: '64px',
        marginBottom: '24px'
    }
    const arrow = {
        width: '32px',

    }
    return (
        <section id="projects">

            <div className='projectsContainer'>
                {projects.map((project, index) => (
                    <a
                        href={project.link}
                        key={project.image}
                    >
                        <div className='cardParent' style={{backgroundColor:project.bgColor}}>
                            <div className="cardTop">
                                <img
                                    alt="background"
                                    className="backgroundShape"
                                    src={project.bgimage}
                                />
                                <img
                                    alt="gallery"
                                    class="heroImage"
                                    src={project.image}
                                />
                            </div>
                            <div className="cardDescription">
                                <h1>
                                    {project.title}
                                </h1>
                                <div className="p-medium">{project.description}</div>
                            </div>
                        </div>
                    </a>
                ))}
                <div className='projectContainer cardParent' style={toyProjects} >
                    <h2>My passion projects</h2>
                    <p>I've been passionate about Emotions lately: </p>
                    <a href="https://www.insideu.me/" target="_blank" className='toy'>Challenge my negative thoughts  <img style={arrow} src={'/arrowRight.svg'} /></a>
                    <a href="https://www.nuggets.studio/" target="_blank" className='toy'>Emotion Journal<img style={arrow} src={'/arrowRight.svg'} /></a>
                    <a href="https://www.figma.com/community/widget/1353419988082585140/kanban" target="_blank" className='toy'>A Kanban Figma Widget<img style={arrow} src={'/arrowRight.svg'} /></a>
                </div>
                <div className='projectContainer cardParent' style={{ padding: '40px', backgroundColor: 'var(--base02)' }} >

                    <img style={avatar} src={'/photo.png'} />
                    <h3>Thanks for stopping by</h3>


                    <p>Coming from a HCI & Learning Science background, I am naturally drawn to making products that can impact how people learn and grow. <br /><br />

                        Off the clock, I am also a passionate skier ⛷. And I believe life, just like Skiing, is all about embracing fear and using it as a driving force to move forward.<br /><br />

                        Drop me a message below if you want to talk about AI, Mental Wellness, or ski.</p>
                </div>
            </div>

        </section>
    );
}