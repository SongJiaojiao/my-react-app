import React from "react";
import HeroSection from "./HeroSection";
import TextImageBlock from "./TextImageBlock";
import BlockwithBullets from "./BlockwithBullets";
import { projectsData } from "../data/projects";

const Roostify = () => {
    const roostifyData = projectsData.roostify;

    return (
        <section>
            <HeroSection 
                imgLink={roostifyData.hero.imgLink}
                Title={roostifyData.hero.title}
                Description={roostifyData.hero.description}
                Tags={roostifyData.hero.tags}
                Width={roostifyData.hero.width}
                Spacing={roostifyData.hero.spacing}
                BgColor={roostifyData.hero.bgColor}
            />
            
            <div className="max-w-4xl mx-auto px-8 sm:px-8 md:px-24 lg:px-24 xl:px-24 2xl:px-24 py-8">
                {roostifyData.sections.map((section, index) => {
                    switch (section.type) {
                        case 'textImage':
                            return (
                                <TextImageBlock
                                    key={index}
                                    imgLink={section.imgLink}
                                    Title={section.title}
                                    Description={section.description}
                                    BgColor={section.bgColor}
                                    ImgBgColor={section.imgBgColor}
                                    Spacing={section.spacing}
                                    borderRadius={section.borderRadius}
                                />
                            );
                        case 'blockWithBullets':
                            return (
                                <BlockwithBullets
                                    key={index}
                                    imgLink={section.imgLink}
                                    Title={section.title}
                                    BgColor={section.bgColor}
                                    ImgBgColor={section.imgBgColor}
                                    Spacing={section.spacing}
                                    Description={section.description}
                                    Bullets={section.bullets}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </section>
    );
};

export default Roostify;


