import React, {useEffect} from "react";
import '../index.css'
import { animateText } from '../animatedText';

const About = () => {
    useEffect(() => {
        animateText();
    }, []);
    return (
        <section id="about">

            <div className="display2">
                Hello, I am Jiaojiao. I design products that 
                <div className="slideupSection">
                    <div className="slide-texts">
                    <p className="animate-next display2" style={{ backgroundColor: "#F5F3E8" }}>
                            <span>create compelling experiences.</span>
                            <span>shape complex ideas.</span>
                            <span>inspire innovations.</span>
                        </p>
                    </div>

                </div><br />
                Currently designing trading tools @Goldman Sachs
            </div>



        </section>
    );
}

export default About