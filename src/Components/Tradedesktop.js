import React from "react";
import HeroSection from "./HeroSection";
import TextImageBlock from "./TextImageBlock";
import TextVideoBlock from "./TextVideoBlock";
import BlockwithBullets from "./BlockwithBullets";
import PasswordProtected from "./PasswordProtected";
import { useAuth } from '../Contexts/authContext';
import '../index.css'
import Footer from "./Footer";

const Tradedesktop = () => {
    const { isAuthenticated } = useAuth();
    return (
        <section>
            <HeroSection imgLink={'/Trade/splash.png'} Title={'Trading Desktop'} Tags={['Desktop', '2022']} Width={'500px'} Spacing={'64px 16px'} BgColor={'var(--surface-wasabi)'} Description={'Monitor market movements and make decisions proactively'} />
            {isAuthenticated ? (
                <div>
                    <TextImageBlock imgLink={null} Title={'Background'} BgColor={'var(--surface-primary)'} Description={"Marquee is Goldman Sach's digital marketplace where users can gain market insights, access pricing data, and execute trades. I joined Marquee when it had grown into a expansive ecosystem with hundreds of applications, with a lot of them operating siloed. As it continued to grow, it became evident that a more scalable solution was needed to meet the growing demand. \n \n In 2022, I partnered with product and engineering leaderships, and 3 business units to develop a strategic future state. The goal is to create an ecosystem where users can navigate through the financial market with ease, and drive growth for Marquee."} />
                    <BlockwithBullets imgLink={'/Trade/ToolIllustration.png'} Title={'Problems'} BgColor={'bg-surface-primary'} Description={"We started interviews with the sales and trading to conduct an audit of the applications currently in use. Through this process, we identified the primary issues affecting their workflow:"} Bullets={[{ Title: 'App-hopping for basic tasks', Description: 'Due to multiple legacy applications serving similar functions, users are navigating through at least 5 to 6 different applications, to perform trade analysis.' }, { Title: 'No systematic way to monitor trades', Description: 'There are no tools that facilitate a streamlined workflow. Consequently, users resort to ad-hoc methods such as documenting in local spreadsheets or emails to manage the workflow.' }]}></BlockwithBullets>
                    <TextImageBlock imgLink={'/Trade/Vision.png'} Title={'The Vision'} BgColor={'bg-surface-primary'} Description={"Create Contextual Hubs that enable users monitor positions efficiently and make proactive decisions."} />

                    <TextVideoBlock videoLink={'/Trade/fullview.mp4'} Title={'Monitor trades with a single, unified view'} borderRadius={'16px'} BgColor={'bg-surface-primary'} Description={"The new concept brings together information from various sources into one cohesive dashboard, allowing users to easily monitor and analyze trades without juggling between apps."} />
                    <TextImageBlock imgLink={'/Trade/alert.png'} Title={'Stay ahead with trade alerts'} BgColor={'bg-surface-primary'} borderRadius={'16px'} Description={"Our users need to be highly attentive and take proactive steps to stay ahead of the market. Trade alerts highlight the most crucial economics so they won't miss any opportunities."} />
                    <TextVideoBlock videoLink={'/Trade/Analytics.mp4'} Title={'Access insights in a single click'} BgColor={'bg-surface-primary'} borderRadius={'16px'} Description={"We provide trade insights such live economics and price movements. This allows users to develop post-trade strategies with efficiency and context, saving them from piecing together information from various sources."} />
                    <TextVideoBlock videoLink={'/Trade/Interop.mp4'} Title={'Sync, link, and share information'} Spacing={'16px'} ImgBgColor={'var(--surface-wasabi'} BgColor={'bg-surface-primary'} borderRadius={'16px'} Description={"Users can link different applications to share data between them. This enables them to create interactive workspaces to simultaneously update multiple views with only one command."} />


                </div>)
                : (<PasswordProtected />)}

        </section>

    )
}

export default Tradedesktop;


