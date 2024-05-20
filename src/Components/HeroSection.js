import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import TagRow from "./TagRow";


const HeroSection = ({ imgLink, Title, Description, BgColor, Tags, Width, Spacing }) => {
    return (
        <div style={{ marginBottom: '40px' }} >
            <div style={{ backgroundColor: BgColor }}>
                <div>
                    <img
                        alt="background"
                        style={{ display: 'block',width: Width,marginLeft: 'auto', marginRight: 'auto', padding: Spacing}}
                        src={imgLink}
                    />

                </div>

                <Link to="/" style={{ position: 'absolute', top: '72px', left: '144px' }}>
                    <Button text={'Back'} />
                </Link>
            </div>


            <div className="projectSection">
                <div className="display1" >
                    {Title}
                </div>
                <h2 >{Description}</h2>
                <TagRow tags={Tags} />

            </div>
        </div>

    )
}

export default HeroSection 