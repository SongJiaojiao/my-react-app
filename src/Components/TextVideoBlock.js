import React from "react";

const TextVideoBlock = ({ videoLink, Title, Description, BgColor,borderRadius, Spacing}) => {
    return (
        <div style={{ backgroundColor: BgColor, padding:Spacing }}>
            <div className="projectSection">
                <h1 >
                    {Title}
                </h1>
                <p>{Description}</p>
                <div style={{ width: '100%',maxWidth:'760px', overflow: 'hidden', borderRadius: borderRadius }}>
                    <video style={{ width: '100%', display: 'block' }} autoPlay loop>
                        <source src={videoLink} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>

    )
}

export default TextVideoBlock