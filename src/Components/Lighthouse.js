import React from "react";
import HeroSection from "./HeroSection";
import TextImageBlock from "./TextImageBlock";
import BlockwithBullets from "./BlockwithBullets";
import '../index.css'

const Lighthouse = () => {
    return (
        <section>
            <HeroSection imgLink={'/lighthouse/splash.png'} Title={'Student Dashboard'} Width={'100%'} Tags={['Capstone', '2018']} BgColor={'var(--surface-wasabi)'} Description={'Transform student data into visual stories'} />
            <TextImageBlock imgLink={null} Title={'Data, both a Catalyst and a Burden for Teachers'} BgColor={'var(--surface-primary)'} Description={"Data-driven instruction is an older idea that we have been hearing for years. However, what does it really mean in teachers' everyday life?\n\nWe dug into Study Island as a starting point of this problem. Supporting over 24,000 schools, Study Island provides a wealth of data to improve teachers' teaching. However, a large number of teachers never access the data, or use it to inform teaching.\n\nWe realized it's not the quantity of the data that counts, but how it is being used. Thus, our goal is to encourage teachers to use the data more frequently in a way that truly helps with their teaching."} />
            <BlockwithBullets imgLink={null} Title={'Frustrations in Teachers Workflow'} BgColor={'bg-surface-primary'} Description={"We started interviews with the sales and trading to conduct an audit of the applications currently in use. Through this process, we identified the primary issues affecting their workflow:"} Bullets={[{ Title: 'Hard to access data', Description: 'Data is structured into 18 categories.Users get frustrated because they do not know which one might contain the information they are looking for.' }, { Title: 'Data interpretation is totally left to teachers', Description: 'Data is currently display2ed in rows, columns and raw texts. But this is not how teachers think. They think in questions about their students.' }, { Title: 'Hard to take actions', Description: 'A few experienced teachers have developed their own ways of interpreting data. For these power users, they are seeking explicit next-steps, which is not supported in the current platform.' }]}></BlockwithBullets>
            <TextImageBlock imgLink={'/lighthouse/homepage.gif'} Title={'Access Data Right Away'} BgColor={'bg-surface-primary'} ImgBgColor={'var(--surface-lavender-00'} Spacing={'32px'} borderRadius={'16px'} Description={"Lighthouse allows teachers to dive into data right away without going through any clicks or recalling. Everything teachers are curious about their students is in one place."} />
            <TextImageBlock imgLink={'/lighthouse/report.gif'} Title={'Move reports to the first level'} BgColor={'bg-surface-primary'} ImgBgColor={'var(--surface-lavender-00'} Spacing={'32px'} borderRadius={'16px'} Description={"We allow teachers to recognize the report at a glance without recalling detailed information in the filters."} />
            <TextImageBlock imgLink={'/lighthouse/shortcut.gif'} Title={'Shortcut'} BgColor={'bg-surface-primary'} ImgBgColor={'var(--surface-lavender-00'} Spacing={'32px'} borderRadius={'16px'} Description={"One step further, we allow teachers to pin the reports they frequently visit to the navigation bar."} />
            <TextImageBlock imgLink={'/lighthouse/insights.gif'} Title={'Synthesized Data Insigths'} BgColor={'bg-surface-primary'} ImgBgColor={'var(--surface-lavender-00'} Spacing={'32px'} borderRadius={'16px'} Description={"Rather than framing data as an entity teachers need to understand, we shaped it into the information that rises naturally from teachers daily teaching. Who are struggling? What are they struggling with? We brought the answers of these questions to the front and center."} />
            <TextImageBlock imgLink={'/lighthouse/recommendation.gif'} Title={'Actionable Recommendations'} BgColor={'bg-surface-primary'} ImgBgColor={'var(--surface-lavender-00'} Spacing={'32px'} borderRadius={'16px'} Description={"Assigning extra assignment may take a long time to complete manually in the report. We want to streamline this process and at the same time, give enough teacher control to edit questions or save it for later."} />
            <TextImageBlock Title={'Design Process'} BgColor={'var(--surface-primary)'} ImgBgColor={'var(--surface-lavender-00'} Description={""} />
            <TextImageBlock imgLink={'/lighthouse/framework.png'} Title={'Understand the Landscape'} Spacing={'32px 0px'} borderRadius={'16px'} Description={"At the outset of the project, we did not have a clear mission or pre-existing insights for teachers experience using data. We started literature review and competitive analysis to understand the current landscape.\n\nWe translated the key concepts into a framework that captiond our direction. Our high-level after this stage was to design a platform that informs teaching decisions on an individual level."} />
            <TextImageBlock imgLink={'/lighthouse/affinity.png'} Title={"Why Don't Teachers Use Data?"} borderRadius={'16px'} Description={"In order to dive into Study Island's users experience using data, we talked to 13 teachers in 4 states. Although teachers have different purposes (Remediation, Test Prep, Practice) for using Study Island, their general workflow is quite similar: access, interpret and take actions.\n\nWe segmented our users into three groups based on their frequency of data usage and engagement with the platform. It is not surprising that, as Study Island is becoming a more integral piece into their daily teaching, their needs also evolve."} />
            <TextImageBlock imgLink={'/lighthouse/storyboard.png'} Title={"Storyboarding to conceptulize the use cases"} borderRadius={'16px'} Description={"I visualized the seven ideas in storyboards and the team pitched them to our clients. This allowed us to conceptulize the use cases and align our vision with our clients."} />

            <TextImageBlock imgLink={'/lighthouse/homepage.png'} Title={"How might we make the data more accessible?"} borderRadius={'16px'} Description={"Starting with the Homepage and Navigation Design is crucial as it's the gateway for teachers to efficiently access data. Through user research, we developed three design alternatives: direct report access, data summaries, and smart search.Our initial testing with teachers indicated a preference for immediate data insights, leading us to craft the homepage into a dashboard for a snapshot of the data."} />
            <TextImageBlock imgLink={'/lighthouse/navigation.png'} Title={"Mirrors teachers' mental model"}  borderRadius={'16px'} Description={"At the outset of the project, we did not have a clear mission or pre-existing insights for teachers experience using data. We started literature review and competitive analysis to understand the current landscape.\n\nWe translated the key concepts into a framework that captiond our direction. Our high-level after this stage was to design a platform that informs teaching decisions on an individual level."} />
            <TextImageBlock imgLink={'/lighthouse/cardsorting.png'} Title={"How might we minimize the effort of data interpretation?"} ImgBgColor={'#f7f7f7'} Spacing={'24px 0px'} borderRadius={'16px'} Description={"We conducted a cardsorting with teachers to figure out what information they are most curious about their students."} />
            <TextImageBlock imgLink={'/lighthouse/iteration3.gif'} Title={"How should we present the information?"} borderRadius={'16px'} Description={"I designed Interactive Views, which users can click on different bars to view correlated data on the right and on the bottom."} />
            <TextImageBlock imgLink={'/lighthouse/recommendation.png'} Title={"How might we help drive decisions faster?"} Spacing={'0px 0px'} borderRadius={'16px'} Description={"Teachers are super pressed for time. User testing showed they’re all for recommendations that they can swiftly turn into extra practice for students. But, they also want to call the shots. To strike the right balance between getting things done quickly and giving teachers control, we provided users with the options to edit questions and dismiss the recommendations. This flexibility could be pivotal in fostering teachers' trust and encouraging adoption of the recommendations feature."} />
           

        </section>

    )
}

export default Lighthouse;

