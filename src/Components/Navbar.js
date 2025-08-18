import React from "react"
import Button from "./Button"

export default function Navbar() {
    const handleOpenPDF = () => {
        window.open('/Resume_JiaojiaoSong.pdf', '_blank');
      };

    return (
            <div  className="flex justify-end">               
                    {/* <Button text={'Resume'} onClick={handleOpenPDF} /> */}
            </div>
    )
}