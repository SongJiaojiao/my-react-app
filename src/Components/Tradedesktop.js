import React from "react";
import HeroSection from "./HeroSection";
import TextImageBlock from "./TextImageBlock";
import TextVideoBlock from "./TextVideoBlock";
import BlockwithBullets from "./BlockwithBullets";
import PasswordProtected from "./PasswordProtected";
import { useAuth } from '../Contexts/authContext';
import { projectsData } from "../data/projects";

const Tradedesktop = () => {
    const { isAuthenticated } = useAuth();
    const tradeData = projectsData.tradedesktop;

    return (
        <section>
            <HeroSection 
                imgLink={tradeData.hero.imgLink}
                Title={tradeData.hero.title}
                Description={tradeData.hero.description}
                Tags={tradeData.hero.tags}
                Width={tradeData.hero.width}
                Spacing={tradeData.hero.spacing}
                BgColor={tradeData.hero.bgColor}
            />
            
            {isAuthenticated ? (
                <div className="max-w-4xl mx-auto px-8 sm:px-8 md:px-24 lg:px-24 xl:px-24 2xl:px-24 py-8">
                    {tradeData.sections.map((section, index) => {
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
                            case 'textVideo':
                                return (
                                    <TextVideoBlock
                                        key={index}
                                        videoLink={section.videoLink}
                                        Title={section.title}
                                        BgColor={section.bgColor}
                                        ImgBgColor={section.imgBgColor}
                                        Spacing={section.spacing}
                                        borderRadius={section.borderRadius}
                                        Description={section.description}
                                    />
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
            ) : (
                <PasswordProtected />
            )}
        </section>
    );
};

export default Tradedesktop;


