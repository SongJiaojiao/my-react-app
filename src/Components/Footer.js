import React from "react"
import linkedin from '../Img/linkedin-in.svg'
import email from '../Img/envelope-solid.svg'
import dribbble from '../Img/dribbble.svg'


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
            <p>Jiaojiao 2024 ✨</p>
            <div style = {socialIcons}>
                <a            
                    href="mailto:songjiaojiao1229@gmail.com"
                    target="blank">
                    <img
                        className = 'socialIcon'
                        alt="email"
                    
                        src={email}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/jiaojiao-song-136006113/"
                    target="blank">
                    <img
                    className = 'socialIcon'
                        alt="linkedin"
              
                        src={linkedin}
                    />
                </a>
                <a
                    href="https://dribbble.com/-SONG"
                    target="blank">
                    <img
                    className = 'socialIcon'
                        alt="dribbble"

                        src={dribbble}
                    />
                </a>
            </div>



        </div>
    )
}