import React from "react";
import HeroSection from "./HeroSection";
import TextImageBlock from "./TextImageBlock";
import BlockwithBullets from "./BlockwithBullets";
import { projectsData } from "../data/projects";

const Lighthouse = () => {
    const lighthouseData = projectsData.lighthouse;

    return (
        <section>
            <HeroSection 
                imgLink={lighthouseData.hero.imgLink}
                Title={lighthouseData.hero.title}
                Description={lighthouseData.hero.description}
                Tags={lighthouseData.hero.tags}
                Width={lighthouseData.hero.width}
                Spacing={lighthouseData.hero.spacing}
                BgColor={lighthouseData.hero.bgColor}
            />
            
            <div className="max-w-4xl mx-auto px-8 sm:px-8 md:px-24 lg:px-24 xl:px-24 2xl:px-24 py-8">
                {lighthouseData.sections.map((section, index) => {
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

export default Lighthouse;


