import React from "react";
import { IconBrandLinkedin, IconBrandDribbble, IconMail } from '@tabler/icons-react';
import Button from "./Button";

const About = () => {
    return (
        <section className="py-24">
            <div className="text-7xl font-bold leading-relaxed font-slackside mb-4" >Jiaojiao Song</div>
            <div className="text-xl font-regular leading-relaxed">
                I play with pixels to build memorable experiences. <br/>
                Currently building agentic data analytics @Meta
            </div>
            <div className="flex gap-4 mt-8">
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
            </div>
        </section>
    );
}

export default About