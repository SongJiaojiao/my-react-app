import React from "react"
import Button from "./Button"

export default function Navbar() {
    const handleOpenPDF = () => {
        window.open('/Resume_JiaojiaoSong.pdf', '_blank');
      };

    return (
            <div id="navbar">               
                    <img
                        alt="gallery"
                        width={'420px'}
                        src='./name.svg'
                    />
                    <Button text={'Resume'} onClick={handleOpenPDF} />

            </div>
    )
}