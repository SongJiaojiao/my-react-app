import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import TagRow from "./TagRow";


const HeroSection = ({ imgLink, Title, Description, BgColor, Tags, Width, Spacing }) => {
    return (
        <div className="mb-16">
            <div style={{ backgroundColor: BgColor }}>
                <div>
                    <img
                        alt="background"
                        className="block mx-auto"
                        style={{ width: Width, padding: Spacing }}
                        src={imgLink}
                    />
                </div>

                <Link to="/" className="fixed top-8 left-16 z-50">
                    <Button text={'Back'} variant="secondary" />
                </Link>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col justify-start gap-2 mt-8 pt-18 px-8 sm:px-8 md:px-24 lg:px-24 xl:px-24 2xl:px-24">
                <div className="text-4xl font-medium leading-tight tracking-wide text-gray-800">
                    {Title}
                </div>
                <h3 className="leading-8 tracking-wide text-gray-800 m-0">
                    {Description}
                </h3>
                <TagRow tags={Tags} />
            </div>
        </div>
    )
}

export default HeroSection 