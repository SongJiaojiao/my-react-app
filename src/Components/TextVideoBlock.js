import React from "react";

const TextVideoBlock = ({ videoLink, Title, Description, BgColor, borderRadius, Spacing, ImgBgColor }) => {
    
    const formattedDescription = Description.replace(/\n\n/g, '<br /><br />').replace(/\n/g, '<br />');

    return (
        <div className="mb-16" style={{ backgroundColor: BgColor, padding: Spacing }}>
            <div className="projectSection">
                <h1>
                    {Title}
                </h1>
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }}></p>
                <div className="my-4" style={{ width: '100%', maxWidth: '760px', overflow: 'hidden', borderRadius: borderRadius, padding: Spacing, backgroundColor: ImgBgColor }}>
                    <video style={{ width: '100%', display: 'block' }} autoPlay loop>
                        <source src={videoLink} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default TextVideoBlock