import React from "react";

const TextImageBlock = ({ imgLink, Title, Description, BgColor, Spacing, ImgBgColor,borderRadius }) => {

    const formattedDescription = Description.split('\n').map((text, index,array) => (
        <React.Fragment key={index}>
            {text}
            {index !== array.length - 1 && <br />} 
        </React.Fragment>
    ));

    return (
        <div style={{ backgroundColor: BgColor }}>

            <div className="projectSection">
                <h1 >
                    {Title}
                </h1>
                {formattedDescription && <p>{formattedDescription}</p>}
                
                {imgLink &&
                <div style={{ maxWidth:'760px',backgroundColor: ImgBgColor,borderRadius: borderRadius,padding:Spacing }}>
                    <img alt="background"  src={imgLink} style={{ objectFit:' cover',width:'100%' ,display: 'block' }}/>
                </div>
                }
            </div>

        </div>



    )
}

export default TextImageBlock