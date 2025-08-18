import { Link } from 'react-router-dom';
import React from "react";
import { projects } from "../data";
import { IconArrowUpRight } from '@tabler/icons-react';

export default function Projects() {
    const getHoverClass = (project) => {
        switch (project.title) {
            case "Datamte":
                return "group-hover:scale-110";
            case "Search":
                return "group-hover:rotate-45 ";
            case "Trading Desktop":
                return "group-hover:-rotate-15 group-hover:scale-105";
            case "Student Dashboard":
                return "group-hover:skew-x-12 group-hover:scale-110";
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
                    >
                        <div className="rounded-3xl bg-espresso-100 transition-transform duration-300 hover:scale-[1.01] group-hover:scale-[1.01] p-4">
                            <div className="relative flex items-center justify-center text-center mx-auto aspect-[3/2]">
                                {project.title !== "Datamte" && (
                                    <img
                                        alt="background"
                                        className={`w-1/2 absolute transition-transform duration-200 ${getHoverClass(project)}`}
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
                                            className="absolute w-16 h-16 rotate-45 bottom-20 left-40 z-0 transition-all duration-500 ease-out group-hover:-translate-x-16 group-hover:-translate-y group-hover:rotate-90 pointer-events-none"
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
                            </div>
                            {/* <div className="w-full h-px bg-espresso-900 "></div> */}
                            <div className="flex flex-col justify-start items-start px-6 py-4 bg-espresso-50 rounded-3xl">
                                <div className="text-xl font-semibold ">
                                    {project.title}
                                </div>
                                <p className="text-gray-700">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
                
                <div className="grid grid-cols-2 gap-8">
                    {(() => {
                        const cardClasses = "flex flex-col justify-start pt-16 rounded-[16px] bg-espresso-100 transition-transform duration-300 hover:scale-[1.01] p-8 h-full cursor-pointer";
                        const textClasses = "text-lg font-medium flex items-center gap-2 transition-colors cursor-pointer";
                        
                        return (
                            <>
                                {/* Large card on top - spans full width */}
                                <div className="col-span-2">
                                    <div className={cardClasses} onClick={() => window.open('https://www.nuggets.studio/', '_blank')}>
                                        <div className={textClasses}>
                                            Nuggets
                                        </div>
                                        <p className="text-gray-700">Better recognize and cope with your emotions</p>
                                        <IconArrowUpRight className="w-6 h-6 text-gray-900 mt-2" />
                                    </div>
                                </div>

                                {/* Two smaller cards below */}
                                <div className={cardClasses} onClick={() => window.open('https://www.insideu.me/', '_blank')}>
                                    <div className={textClasses}>
                                        Inside Me
                                    </div>
                                    <p className="text-gray-700 mt-2">Challenge my negative thoughts</p>
                                    <IconArrowUpRight className="w-6 h-6 text-gray-900 mt-2" />
                                </div>

                                <div className={cardClasses} onClick={() => window.open('https://www.figma.com/community/widget/1353419988082585140/kanban', '_blank')}>
                                    <div className={textClasses}>
                                        Figma Kanban Widget
                                    </div>
                                    <p className="text-gray-700 mt-2">Organize your daily tasks</p>
                                    <IconArrowUpRight className="w-6 h-6 text-gray-900" />
                                </div>
                            </>
                        );
                    })()}
                </div>
                
                <div className="rounded-[32px] p-8 bg-espresso-100 h-fit">
                    <img className="w-28 h-28 rounded-full mb-6" src="/photo.png" alt="avatar" />
                    <h3 className="text-xl font-semibold mb-3">Thanks for stopping by</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Coming from a HCI & Learning Science background, I am naturally drawn to making products that can impact how people learn and grow. <br /><br />
                        Off the clock, I am also a passionate skier ⛷. And I believe life, just like Skiing, is all about embracing fear and using it as a driving force to move forward.<br /><br />
                        Drop me a message below if you want to talk about AI, Mental Wellness, or ski.
                    </p>
                </div>
            </div>
        </section>
    );
}