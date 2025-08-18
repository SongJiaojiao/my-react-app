import React from "react";

const TextImageBlock = ({ imgLink, Title, Description, BgColor, Spacing, ImgBgColor, borderRadius }) => {

    const formattedDescription = Description.replace(/\n\n/g, '<br /><br />').replace(/\n/g, '<br />');

    return (
        <div style={{ backgroundColor: BgColor }}>
            <div className="mb-16">
                <h1>
                    {Title}
                </h1>
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }}></p>
                
                {imgLink &&
                <div className="my-6 max-w-2xl" style={{ backgroundColor: ImgBgColor, borderRadius: borderRadius, padding: Spacing }}>
                    <img alt="background" src={imgLink} style={{ objectFit: 'cover', width: '100%', display: 'block' }}/>
                </div>
                }
            </div>
        </div>
    )
}

export default TextImageBlock