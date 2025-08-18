import React from "react";

const BlockwithBullets = ({ imgLink, Title, Description, BgColor, Bullets, Spacing, ImgBgColor }) => {
    return (
        <div className="my-16" style={{ backgroundColor: BgColor }}>
            <h1 className="mb-2">
                {Title}
            </h1>
            {Description && Description.length > 0 && <p>{Description}</p>}

            {Bullets && Bullets.map((bullet, index) => (
                <div key={index} className="mb-4">
                    <p className="font-semibold">
                        {bullet.Title}
                    </p>
                    <p>{bullet.Description}</p>
                </div>
            ))}
            
            {imgLink &&
                <img 
                    alt="background"
                    style={{ width: '100%', borderRadius: '16px', backgroundColor: ImgBgColor, padding: Spacing }}
                    src={imgLink} 
                />
            }
        </div>
    )
}

export default BlockwithBullets