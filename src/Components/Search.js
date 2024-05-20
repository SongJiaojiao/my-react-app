import React from "react";
import HeroSection from "./HeroSection";
import TextImageBlock from "./TextImageBlock";
import TextVideoBlock from "./TextVideoBlock";
import BlockwithBullets from "./BlockwithBullets";
import PasswordProtected from "./PasswordProtected";
import '../index.css'
import { useAuth } from '../Contexts/authContext';
import Footer from "./Footer";

const Search = () => {

    const { isAuthenticated } = useAuth();
    return (
        <section>
            <HeroSection imgLink={'/Search/splash.png'} Title={'Search'} Tags={['Web', 'Mobile', '2023 - Now']} Width={'500px'} Spacing={'64px 16px'} BgColor={'var(--surface-lavender)'} Description={'Fuel the discoverability of Marquee data'} />

            {isAuthenticated ? (
                <div>
                    <TextImageBlock imgLink={'/Search/background.png'} Title={'Background'} BgColor={'var(--surface-primary)'} ImgBgColor={'var(--surface-lavender'} Spacing={'0px'} borderRadius={'16px'} Description={"Search is the gateway to Marquee's vast data such as research, assets, analytics, etc. Historically, the search was built on legacy systems and owned by an external engine. As Marquee expands its digital products, managing this system became increasinly challenging. \n \nIn 2023, we started revamping the search experience from ground up."} />
                    <BlockwithBullets imgLink={'/Search/problem.png'} Title={'Problems'} BgColor={'bg-surface-primary'} ImgBgColor={'var(--surface-lavender'} Spacing={'0px'} Description={""} Bullets={[{ Title: '"A bag of words"', Description: "The current search treats the query as a bag of words, meaning we often overweight matches to particular words without understanding the context." }, { Title: "Unclear about users' search intents", Description: "There is a significant gap in understanding users' search intents. Understanding the meaning behind the keywords and presenting the information users truly seek is essential." }]}></BlockwithBullets>
                    <TextImageBlock imgLink={'/Search/searchIntents.png'} Title={"Tailor results to users' search intents"} BgColor={'bg-surface-primary'} borderRadius={'0px'} Description={"From the data we learnt that the top searched categories are: Company, Country, and Report. Throughout the interveiws we also identified what they are looking for with these queries. This led to the design strategy that, we want to tailor the search results to different user intents."} />
                    <TextImageBlock imgLink={'/Search/goals.png'} Title={'Objectives'} Description={"We follow a bottom-up approach to define our goals, starting with accuracy as the foundation. Ultimately, we would love the search to drive the data discovery of the entire Marquee ecosystem."} />

                    <TextVideoBlock videoLink={'/Search/quicksuggestion.mp4'} Title={'Quick Suggestion'} BgColor={'bg-surface-primary'} ImgBgColor={'var(--surface-lavender'} Spacing={'24px'} borderRadius={'16px'} Description={"As users type, they see live recommendations in the dropdown menu for quick access. To help them understand the relevancy of the results, I designed a quick preview feature that provides a visual snapshot of the result when they hover over it."} />
                    <TextVideoBlock videoLink={'/Search/Quickfacts.mp4'} Title={'Answer the fundamental questions immediately'} BgColor={'bg-surface-primary'} ImgBgColor={'var(--surface-lavender'} Spacing={'0px'} borderRadius={'16px'} Description={"Once we identify users' search intents, we present the most crucial data and insights immediately in the quick facts panel, avoiding extensive drilling down. "} />
                    <TextVideoBlock videoLink={'/Search/mobile.mov'} Title={'Browse with speed and ease'} BgColor={'bg-surface-primary'} borderRadius={'16px'} Description={"On mobile, the content follows a linear pattern to adapt to the natuaral behavior. "} />
                    <TextVideoBlock videoLink={'/Search/cardframework.mp4'} Title={'Modular Card Framework'} BgColor={'bg-surface-primary'} Spacing={'0px'} borderRadius={'16px'} Description={"The search is wired up to 20+ services, each with its unique API and structure. I came up with the modular card framework that can adapt to many different use cases while maintaining a consistent look."} />

                    <TextImageBlock imgLink={'/Search/discover.png'} Title={'Discover More Insights As You Go'} BgColor={'bg-surface-primary'} Spacing={'0px'} borderRadius={'0px'} Description={"As we learn more about the users' context, we can pour this context into search and recommend the right content at the right time. Users can discover more relevant content where they naturally look for more, without the need to search. "} />
                    
                </div>
            ) :
                (<PasswordProtected />)}
           
                

        </section>

    )
}

export default Search;


