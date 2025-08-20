import React from "react"
import { IconBrandLinkedin, IconBrandDribbble, IconMail } from '@tabler/icons-react';
import Button from "./Button";

export default function Footer() {

    const footer = {
        display: 'flex',
        justifyContent:'space-between',
        marginTop:'48px'
    }
    const socialIcons = {
        display: 'flex',
        flexDirection:'row',
        gap:'24px',
        alignItems:'center'

    }

    return (
        <div style={footer}>
            <p>Jiaojiao 2025 ✨</p>
            {/* <div style={socialIcons}>
                <Button 
                    icon={<IconBrandLinkedin className="w-5 h-5" />}
                    type="icon"
                    onClick={() => window.open('https://www.linkedin.com/in/jiaojiao-s-136006113/', '_blank')}
                />
                <Button 
                    icon={<IconMail className="w-5 h-5" />}
                    type="icon"
                    onClick={() => window.open('mailto:songjiaojiao1229@gmail.com', '_blank')}
                />
                <Button 
                    icon={<IconBrandDribbble className="w-5 h-5" />}
                    type="icon"
                    onClick={() => window.open('https://dribbble.com/-SONG', '_blank')}
                />
            </div> */}
        </div>
    )
}