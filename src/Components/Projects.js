import { Link } from 'react-router-dom';
import React from "react";
import { projects } from "../data";
import { IconArrowUpRight } from '@tabler/icons-react';
import TagRow from './TagRow';

export default function Projects() {
    const getHoverClass = (project) => {
        switch (project.title) {
            case "Datamte":
                return "group-hover:scale-110";
            case "Search":
                return "group-hover:rotate-45 ";
            case "Inside Me":
                return "group-hover:scale-[700%] transition-transform duration-300 ease-out transition-transform ";
            case "Student Dashboard":
                return "group-hover:skew-x-12 group-hover:scale-250";
            default:
                return "group-hover:rotate-[15deg]";
        }
    };

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mx-auto">
                {projects.map((project, index) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="block group"
                            target={project.link.startsWith('http') ? "_blank" : undefined}
                            rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                            <div className="rounded-3xl bg-espresso-100 transition-transform duration-300 hover:scale-[1.01] group-hover:scale-[1.01] p-4">
                                <div className="relative flex items-center justify-center text-center mx-auto aspect-[3/2]">
                                                                    {project.title !== "Datamte" && project.title !== "Nuggets" && (
                                    <img
                                        alt="background"
                                        className={`absolute transition-transform duration-200 object-contain ${project.title === "Inside Me" ? "w-8 h-8" : "w-1/2"} ${getHoverClass(project)}`}
                                        src={project.bgimage}
                                    />
                                )}
                                    <img
                                        alt="gallery"
                                        className="w-8/12 relative object-contain z-10"
                                        src={project.image}
                                    />
                                    
                                                                    {/* Stars for Datamte project */}
                                {project.title === "Datamte" && (
                                    <>
                                        <img 
                                            src="/DataAI/star.svg" 
                                            alt="star" 
                                            className="absolute w-16 h-16 rotate-45 bottom-16 left-24 z-0 transition-all duration-500 ease-out group-hover:-translate-x-16 group-hover:-translate-y group-hover:rotate-90 pointer-events-none"
                                        />
                                        <img 
                                            src="/DataAI/star.svg" 
                                            alt="star" 
                                            className="absolute w-6 h-6 rotate-45 top-32 right-48  z-0 transition-all duration-500 ease-out group-hover:translate-x-8 group-hover:-translate-y-24 group-hover:rotate-180 group-hover:scale-110 pointer-events-none"
                                        />
                                        <img 
                                            src="/DataAI/star.svg" 
                                            alt="star" 
                                            className="absolute w-10 h-10 rotate-45 bottom-8 right-40  z-0 transition-all duration-500 ease-out group-hover:translate-x-24 group-hover:translate-y-2 group-hover:rotate-180 pointer-events-none"
                                        />
                                    </>
                                )}
                                
                                {/* Flowers for Nuggets project */}
                                {project.title === "Nuggets" && (
                                    <>
                                        <img 
                                            src="Shapes/flower.svg" 
                                            alt="flower" 
                                            className="absolute w-24 h-24 bottom-8 left-20 z-0 transition-all duration-500 ease-out group-hover:rotate-180 group-hover:scale-125 pointer-events-none"
                                        />
                                        <img 
                                            src="Shapes/flower.svg" 
                                            alt="flower" 
                                            className="absolute w-8 h-8  top-8 right-24 z-0 transition-all duration-500 ease-out group-hover:-rotate-180 group-hover:scale-110 pointer-events-none"
                                        />
                                    </>
                                )}
                                </div>
                                {/* <div className="w-full h-px bg-espresso-900 "></div> */}
                                <div className="flex flex-col justify-start items-start px-6 py-4 bg-espresso-50 rounded-3xl">
                                    <div className="flex justify-between items-center w-full">
                                        <div className="text-xl font-semibold">
                                            {project.title}
                                        </div>
                                        <TagRow tags={[project.type]} />
                                    </div>
                                    <p className="text-gray-700">{project.description}</p>
                                </div>
                            </div>
                        </a>
                ))}
                
                <div className="rounded-[32px] p-8 bg-espresso-100">
                    <div className="flex items-start justify-start mb-4">
                        <img className="rounded-full w-16 h-16 object-cover" src="/photo.png" alt="avatar" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Thanks for stopping by</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Coming from a HCI & Learning Science background, I am naturally drawn to making products that can impact how people learn and grow. <br /><br />
                        Off the clock, I am also a passionate skier ⛷. And I believe life, just like Skiing, is all about embracing fear and using it as a driving force to move forward.<br /><br />
                    </p>
                </div>
            </div>
        </section>
    );
}