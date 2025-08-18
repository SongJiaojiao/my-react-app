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
            <p>Jiaojiao 2025 ✨</p>



        </div>
    )
}