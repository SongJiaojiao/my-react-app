import React from "react";

const BlockwithBullets = ({ imgLink, Title, Description, BgColor, Bullets, Spacing, ImgBgColor }) => {
    return (
        <div style={{ backgroundColor: BgColor }}>
            <div className="projectSection">
                <h1 >
                    {Title}
                </h1>
                {Description.length > 0 && <p >{Description}</p>}

                {Bullets.map((Bullets) => (
                    <a
                        key={Bullets.Title}>
                        <div className="w-full">
                            <h3>
                                {Bullets.Title}
                            </h3>
                            <p >{Bullets.Description}</p>
                        </div>

                    </a>
                ))}
                {imgLink &&
                    <img alt="background"
                        style={{ width: '100%', borderRadius: '16px', backgroundColor: ImgBgColor, padding: Spacing }}
                        src={imgLink} />
                }

            </div>



        </div>

    )
}

export default BlockwithBullets