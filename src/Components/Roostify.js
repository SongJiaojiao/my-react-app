import React from "react";
import HeroSection from "./HeroSection";
import TextImageBlock from "./TextImageBlock";
import BlockwithBullets from "./BlockwithBullets";
import '../index.css'
import Footer from "./Footer";

const Roostify = () => {
    return (
        <section>
            <HeroSection imgLink={'/Roostify/splash.png'} Title={'Credit Service'} Tags={['Mobile', 'Web','2019']} Width={'700px'}  Spacing={'64px 16px'}BgColor = {'var(--surface-lavender)'} Description={'A better credit experience to ease lender stress'} />
            <TextImageBlock imgLink={null} Title={'Background'} BgColor = {'var(--surface-primary)'} spacing = {'16px'}Description ={"Home mortgage is painful. Not only for borrowers, but also for lenders who work through the mounds of paperwork. As part of the process, the credit inquiry is one of the foundational pieces of the loan process. However, the current credit experience is being challenged by the disparated workflow, manual documentation process, and poor communication with borrowers.\n Our goal is to ease lender stress by providing a more integrated, automated and collaborative credit experience, and ultimately, accelerate loan approval."} />
            <BlockwithBullets imgLink={'/Roostify/sample.png'} Title={'Insights'} BgColor = {'bg-surface-primary'} ImgBgColor={'var(--surface-lavender-00)'} Spacing = {'24px'}Description ={"We interviewed 5 loan officers around their experience pulling credit. Our goals were to understand their current process and the challenges they face."} Bullets={[{Title:'Poor Legibility',Description:'The current credit report for lenders is long-winded and frustrating,causing the loan officers to often miss the details they want to catch or misinterpret the information.'},{Title:'Compromised Workflows',Description:'Credit score is not the only deciding factor for loan approval. Ancillary follow-up actions and additional communication can be a burden to loan officers due to the manual processing.'},{Title:'Delayed Responses',Description:'The data indicated that 50% of the documents submission happen out of business hours. But the existing mortgage technology has chained the loan officers to their desks and computers and they are struggling to make a decision when they are not in front of their computers.'}]}></BlockwithBullets>
            
            <TextImageBlock imgLink={'/Roostify/Comparison.png'} Title={"Bringing More Focus on What's Important"} BgColor = {'bg-surface-primary'} borderRadius ={'16px'} Description ={"Our users need to be highly attentive and take proactive steps to stay ahead of the market. Trade alerts highlight the most crucial economics so they won't miss any opportunities."} />
            <TextImageBlock imgLink={'/Roostify/card.png'} Title={"Decultter to better digest"} BgColor = {'bg-surface-primary'} borderRadius ={'16px'} ImgBgColor={'var(--surface-lavender-00)'} Spacing = {'24px'} Description ={"Our users need to be highly attentive and take proactive steps to stay ahead of the market. Trade alerts highlight the most crucial economics so they won't miss any opportunities."} />
            <TextImageBlock imgLink={'/Roostify/follow-up.gif'} Title={'Streamline the follow-ups'} BgColor = {'bg-surface-primary'} ImgBgColor={'var(--surface-lavender-00)'} Spacing = {'72px'} borderRadius ={'16px'} Description ={"Lenders relied on emails to communicate with borrowers, which resulted in slow processing and anxiety for borrowers. The new credit service allows lenders and borrowers to collaborate on the same task without manually drafting emails. In the meantime, borrowers can worry less and feel supported."} />
            <TextImageBlock imgLink={'/Roostify/mobile2.gif'} Title={'Review Anytime, Anywhere'} ImgBgColor = {'var(--surface-lavender-00'} Spacing={'32px 36%'}BgColor = {'bg-surface-primary'}borderRadius ={'16px'} Description ={"Loan officers often get last minute requests from borrowers, during evenings and weekends. We understand the circumstances and give loan officers time back by allowing rapid retrieval of the credit information while they are often distracted."} />
   

        </section>

    )
}

export default Roostify;


