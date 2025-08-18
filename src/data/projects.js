export const projectsData = {
  dataAI: {
    hero: {
      imgLink: '/DataAI/dataAI.png',
      title: 'Datamte',
      description: 'Your AI companion for data questions',
      tags: ['Web', '2025 - NOW'],
      width: '500px',
      spacing: '64px 16px',
      bgColor: '#E3F2FD'
    },
    sections: [
      {
        type: 'textVideo',
        videoLink: '/DataAI/Release.mov',
        title: 'Vision',
        bgColor: 'bg-surface-primary',
        spacing: '0px',
        borderRadius: '16px',
        description: "At Meta, product builders—engineers, data scientists, and PMs—often spend too much time searching for data sources or figuring out SQL. With AI, these roles are shifting rapidly. Data analytics should no longer be locked behind deep domain expertise.\n\n I started this project with just 10 teammates, and it has since grown into a high-impact initiative with over 60 people. I’m leading the design of an end-to-end AI analytics tool that lets anyone simply ask a question and get data-backed answers instantly.\n\n Our goal is to give every employee the confidence to make data-driven decisions—so teams can ship better products and move faster.\n\n more details coming soon."
      }
    ]
  },
  
  search: {
    hero: {
      imgLink: '/Search/splash.png',
      title: 'Search',
      description: 'Fuel the discoverability of Marquee data',
      tags: ['Web', 'Mobile', '2023 - 2024'],
      width: '500px',
      spacing: '64px 16px',
      bgColor: 'var(--surface-lavender)'
    },
    sections: [
      {
        type: 'textImage',
        imgLink: '/Search/background.png',
        title: 'Background',
        bgColor: 'var(--surface-primary)',
        imgBgColor: 'var(--surface-lavender)',
        spacing: '0px',
        borderRadius: '16px',
        description: "Search is the gateway to Marquee's vast data such as research, assets, analytics, etc. Historically, the search was built on legacy systems and owned by an external engine. As Marquee expands its digital products, managing this system became increasinly challenging.\n\nIn 2023, we started revamping the search experience from ground up."
      },
      {
        type: 'blockWithBullets',
        imgLink: '/Search/problem.png',
        title: 'Problems',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender)',
        spacing: '0px',
        bullets: [
          {
            title: 'A bag of words',
            description: "The current search treats the query as a bag of words, meaning we often overweight matches to particular words without understanding the context."
          },
          {
            title: "Unclear about users' search intents",
            description: "There is a significant gap in understanding users' search intents. Understanding the meaning behind the keywords and presenting the information users truly seek is essential."
          }
        ]
      },
      {
        type: 'textImage',
        imgLink: '/Search/searchIntents.png',
        title: "Tailor results to users' search intents",
        bgColor: 'bg-surface-primary',
        borderRadius: '0px',
        description: "From the data we learnt that the top searched categories are: Company, Country, and Report. Throughout the interveiws we also identified what they are looking for with these queries. This led to the design strategy that, we want to tailor the search results to different user intents."
      },
      {
        type: 'textImage',
        imgLink: '/Search/goals.png',
        title: 'Objectives',
        description: "We follow a bottom-up approach to define our goals, starting with accuracy as the foundation. Ultimately, we would love the search to drive the data discovery of the entire Marquee ecosystem."
      },
      {
        type: 'textImage',
        imgLink: '/Search/ssd.png',
        title: 'Quick Suggestion',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender)',
        spacing: '32px',
        borderRadius: '16px',
        description: "As users type, they see live recommendations in the dropdown menu for quick access. To help them understand the relevancy of the results, I designed a quick preview feature that provides a visual snapshot of the result when they hover over it."
      },
      {
        type: 'textImage',
        imgLink: '/Search/srp.png',
        title: 'Answer the fundamental questions immediately',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender)',
        spacing: '32px',
        borderRadius: '16px',
        description: "Once we identify users' search intents, we present the most crucial data and insights immediately in the quick facts panel, avoiding extensive drilling down."
      },
      {
        type: 'textImage',
        imgLink: '/Search/mobile.png',
        title: 'Browse with speed and ease',
        bgColor: 'bg-surface-primary',
        borderRadius: '16px',
        imgBgColor: 'var(--surface-lavender)',
        spacing: '32px',
        description: "On mobile, the content follows a linear pattern to adapt to the natuaral behavior."
      },
      {
        type: 'textVideo',
        videoLink: '/Search/cardframework.mp4',
        title: 'Modular Card Framework',
        bgColor: 'bg-surface-primary',
        spacing: '0px',
        borderRadius: '16px',
        description: "The search is wired up to 20+ services, each with its unique API and structure. I came up with the modular card framework that can adapt to many different use cases while maintaining a consistent look."
      },
      {
        type: 'textImage',
        imgLink: '/Search/discover.png',
        title: 'Discover More Insights As You Go',
        bgColor: 'bg-surface-primary',
        spacing: '0px',
        borderRadius: '0px',
        description: "As we learn more about the users' context, we can pour this context into search and recommend the right content at the right time. Users can discover more relevant content where they naturally look for more, without the need to search."
      }
    ]
  },
  tradedesktop: {
    hero: {
      imgLink: '/Trade/splash.png',
      title: 'Trading Desktop',
      description: 'Monitor market movements and make decisions proactively',
      tags: ['Desktop', '2022'],
      width: '500px',
      spacing: '64px 16px',
      bgColor: 'var(--surface-wasabi)'
    },
    sections: [
      {
        type: 'textImage',
        imgLink: null,
        title: 'Background',
        bgColor: 'var(--surface-primary)',
        description: "Marquee is Goldman Sach's digital marketplace where users can gain market insights, access pricing data, and execute trades. I joined Marquee when it had grown into a expansive ecosystem with hundreds of applications, with a lot of them operating siloed. As it continued to grow, it became evident that a more scalable solution was needed to meet the growing demand.\n\nIn 2022, I partnered with product and engineering leaderships, and 3 business units to develop a strategic future state. The goal is to create an ecosystem where users can navigate through the financial market with ease, and drive growth for Marquee."
      },
      {
        type: 'blockWithBullets',
        imgLink: '/Trade/ToolIllustration.png',
        title: 'Problems',
        bgColor: 'bg-surface-primary',
        description: "We started interviews with the sales and trading to conduct an audit of the applications currently in use. Through this process, we identified the primary issues affecting their workflow:",
        bullets: [
          {
            title: 'App-hopping for basic tasks',
            description: 'Due to multiple legacy applications serving similar functions, users are navigating through at least 5 to 6 different applications, to perform trade analysis.'
          },
          {
            title: 'No systematic way to monitor trades',
            description: 'There are no tools that facilitate a streamlined workflow. Consequently, users resort to ad-hoc methods such as documenting in local spreadsheets or emails to manage the workflow.'
          }
        ]
      },
      {
        type: 'textImage',
        imgLink: '/Trade/Vision.png',
        title: 'The Vision',
        bgColor: 'bg-surface-primary',
        description: "Create Contextual Hubs that enable users monitor positions efficiently and make proactive decisions."
      },
      {
        type: 'textImage',
        imgLink: '/Trade/EqDeriv.png',
        title: 'Monitor trades with a single, unified view',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-wasabi)',
        borderRadius: '16px',
        spacing: '32px',
        description: "The new concept brings together information from various sources into one cohesive dashboard, allowing users to easily monitor and analyze trades without juggling between apps."
      },
      {
        type: 'textImage',
        imgLink: '/Trade/TradeAlerts.png',
        title: 'Stay ahead with trade alerts',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-wasabi)',
        spacing: '32px',
        borderRadius: '16px',
        description: "Our users need to be highly attentive and take proactive steps to stay ahead of the market. Trade alerts highlight the most crucial economics so they won't miss any opportunities."
      },
      {
        type: 'textVideo',
        videoLink: '/Trade/Analytics.mp4',
        title: 'Access insights in a single click',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-wasabi)',
        spacing: '32px',
        borderRadius: '16px',
        description: "We provide trade insights such live economics and price movements. This allows users to develop post-trade strategies with efficiency and context, saving them from piecing together information from various sources."
      },
      {
        type: 'textVideo',
        videoLink: '/Trade/Interoperability.mp4',
        title: 'Sync, link, and share information',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-wasabi)',
        spacing: '32px 0px 32px 32px',
        borderRadius: '16px',
        description: "Users can link different applications to share data between them. This enables them to create interactive workspaces to simultaneously update multiple views with only one command."
      }
    ]
  },
  lighthouse: {
    hero: {
      imgLink: '/lighthouse/splash.png',
      title: 'Student Dashboard',
      description: 'Transform student data into visual stories',
      tags: ['Capstone', '2018'],
      width: '100%',
      spacing: '0px',
      bgColor: 'transparent'
    },
    sections: [
      {
        type: 'textImage',
        imgLink: null,
        title: 'Data, both a Catalyst and a Burden for Teachers',
        bgColor: 'var(--surface-primary)',
        description: "Data-driven instruction is an older idea that we have been hearing for years. However, what does it really mean in teachers' everyday life?\n\nWe dug into Study Island as a starting point of this problem. Supporting over 24,000 schools, Study Island provides a wealth of data to improve teachers' teaching. However, a large number of teachers never access the data, or use it to inform teaching.\n\nWe realized it's not the quantity of the data that counts, but how it is being used. Thus, our goal is to encourage teachers to use the data more frequently in a way that truly helps with their teaching."
      },
      {
        type: 'blockWithBullets',
        imgLink: null,
        title: 'Frustrations in Teachers Workflow',
        bgColor: 'bg-surface-primary',
        description: "We started interviews with the sales and trading to conduct an audit of the applications currently in use. Through this process, we identified the primary issues affecting their workflow:",
        bullets: [
          {
            title: 'Hard to access data',
            description: 'Data is structured into 18 categories.Users get frustrated because they do not know which one might contain the information they are looking for.'
          },
          {
            title: 'Data interpretation is totally left to teachers',
            description: 'Data is currently display2ed in rows, columns and raw texts. But this is not how teachers think. They think in questions about their students.'
          },
          {
            title: 'Hard to take actions',
            description: 'A few experienced teachers have developed their own ways of interpreting data. For these power users, they are seeking explicit next-steps, which is not supported in the current platform.'
          }
        ]
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/homepage.gif',
        title: 'Access Data Right Away',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender-00)',
        spacing: '32px',
        borderRadius: '16px',
        description: "Lighthouse allows teachers to dive into data right away without going through any clicks or recalling. Everything teachers are curious about their students is in one place."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/report.gif',
        title: 'Move reports to the first level',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender-00)',
        spacing: '32px',
        borderRadius: '16px',
        description: "We allow teachers to recognize the report at a glance without recalling detailed information in the filters."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/shortcut.gif',
        title: 'Shortcut',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender-00)',
        spacing: '32px',
        borderRadius: '16px',
        description: "One step further, we allow teachers to pin the reports they frequently visit to the navigation bar."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/insights.gif',
        title: 'Synthesized Data Insigths',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender-00)',
        spacing: '32px',
        borderRadius: '16px',
        description: "Rather than framing data as an entity teachers need to understand, we shaped it into the information that rises naturally from teachers daily teaching. Who are struggling? What are they struggling with? We brought the answers of these questions to the front and center."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/recommendation.gif',
        title: 'Actionable Recommendations',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender-00)',
        spacing: '32px',
        borderRadius: '16px',
        description: "Assigning extra assignment may take a long time to complete manually in the report. We want to streamline this process and at the same time, give enough teacher control to edit questions or save it for later."
      },
      {
        type: 'textImage',
        title: 'Design Process',
        bgColor: 'var(--surface-primary)',
        imgBgColor: 'var(--surface-lavender-00)',
        description: ""
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/framework.png',
        title: 'Understand the Landscape',
        bgColor: 'bg-surface-primary',
        spacing: '32px 0px',
        borderRadius: '16px',
        description: "At the outset of the project, we did not have a clear mission or pre-existing insights for teachers experience using data. We started literature review and competitive analysis to understand the current landscape.\n\nWe translated the key concepts into a framework that captiond our direction. Our high-level after this stage was to design a platform that informs teaching decisions on an individual level."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/affinity.png',
        title: "Why Don't Teachers Use Data?",
        bgColor: 'bg-surface-primary',
        borderRadius: '16px',
        description: "In order to dive into Study Island's users experience using data, we talked to 13 teachers in 4 states. Although teachers have different purposes (Remediation, Test Prep, Practice) for using Study Island, their general workflow is quite similar: access, interpret and take actions.\n\nWe segmented our users into three groups based on their frequency of data usage and engagement with the platform. It is not surprising that, as Study Island is becoming a more integral piece into their daily teaching, their needs also evolve."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/storyboard.png',
        title: "Storyboarding to conceptulize the use cases",
        bgColor: 'bg-surface-primary',
        borderRadius: '16px',
        description: "I visualized the seven ideas in storyboards and the team pitched them to our clients. This allowed us to conceptulize the use cases and align our vision with our clients."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/homepage.png',
        title: "How might we make the data more accessible?",
        bgColor: 'bg-surface-primary',
        borderRadius: '16px',
        description: "Starting with the Homepage and Navigation Design is crucial as it's the gateway for teachers to efficiently access data. Through user research, we developed three design alternatives: direct report access, data summaries, and smart search.Our initial testing with teachers indicated a preference for immediate data insights, leading us to craft the homepage into a dashboard for a snapshot of the data."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/navigation.png',
        title: "Mirrors teachers' mental model",
        bgColor: 'bg-surface-primary',
        borderRadius: '16px',
        description: "At the outset of the project, we did not have a clear mission or pre-existing insights for teachers experience using data. We started literature review and competitive analysis to understand the current landscape.\n\nWe translated the key concepts into a framework that captiond our direction. Our high-level after this stage was to design a platform that informs teaching decisions on an individual level."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/cardsorting.png',
        title: "How might we minimize the effort of data interpretation?",
        bgColor: 'bg-surface-primary',
        imgBgColor: '#f7f7f7',
        spacing: '24px 0px',
        borderRadius: '16px',
        description: "We conducted a cardsorting with teachers to figure out what information they are most curious about their students."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/iteration3.gif',
        title: "How should we present the information?",
        bgColor: 'bg-surface-primary',
        borderRadius: '16px',
        description: "I designed Interactive Views, which users can click on different bars to view correlated data on the right and on the bottom."
      },
      {
        type: 'textImage',
        imgLink: '/lighthouse/recommendation.png',
        title: "How might we help drive decisions faster?",
        bgColor: 'bg-surface-primary',
        spacing: '0px 0px',
        borderRadius: '16px',
        description: "Teachers are super pressed for time. User testing showed they're all for recommendations that they can swiftly turn into extra practice for students. But, they also want to call the shots. To strike the right balance between getting things done quickly and giving teachers control, we provided users with the options to edit questions and dismiss the recommendations. This flexibility could be pivotal in fostering teachers' trust and encouraging adoption of the recommendations feature."
      }
    ]
  },
  roostify: {
    hero: {
      imgLink: '/Roostify/splash.png',
      title: 'Credit Service',
      description: 'A better credit experience to ease lender stress',
      tags: ['Mobile', 'Web', '2019'],
      width: '700px',
      spacing: '64px 16px',
      bgColor: 'var(--surface-lavender)'
    },
    sections: [
      {
        type: 'textImage',
        imgLink: null,
        title: 'Background',
        bgColor: 'var(--surface-primary)',
        spacing: '16px',
        description: "Home mortgage is painful. Not only for borrowers, but also for lenders who work through the mounds of paperwork. As part of the process, the credit inquiry is one of the foundational pieces of the loan process. However, the current credit experience is being challenged by the disparated workflow, manual documentation process, and poor communication with borrowers.\nOur goal is to ease lender stress by providing a more integrated, automated and collaborative credit experience, and ultimately, accelerate loan approval."
      },
      {
        type: 'blockWithBullets',
        imgLink: '/Roostify/sample.png',
        title: 'Insights',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender-00)',
        spacing: '24px',
        description: "We interviewed 5 loan officers around their experience pulling credit. Our goals were to understand their current process and the challenges they face.",
        bullets: [
          {
            title: 'Poor Legibility',
            description: 'The current credit report for lenders is long-winded and frustrating,causing the loan officers to often miss the details they want to catch or misinterpret the information.'
          },
          {
            title: 'Compromised Workflows',
            description: 'Credit score is not the only deciding factor for loan approval. Ancillary follow-up actions and additional communication can be a burden to loan officers due to the manual processing.'
          },
          {
            title: 'Delayed Responses',
            description: 'The data indicated that 50% of the documents submission happen out of business hours. But the existing mortgage technology has chained the loan officers to their desks and computers and they are struggling to make a decision when they are not in front of their computers.'
          }
        ]
      },
      {
        type: 'textImage',
        imgLink: '/Roostify/Comparison.png',
        title: "Bringing More Focus on What's Important",
        bgColor: 'bg-surface-primary',
        borderRadius: '16px',
        description: "Our users need to be highly attentive and take proactive steps to stay ahead of the market. Trade alerts highlight the most crucial economics so they won't miss any opportunities."
      },
      {
        type: 'textImage',
        imgLink: '/Roostify/card.png',
        title: "Decultter to better digest",
        bgColor: 'bg-surface-primary',
        borderRadius: '16px',
        imgBgColor: 'var(--surface-lavender-00)',
        spacing: '24px',
        description: "Our users need to be highly attentive and take proactive steps to stay ahead of the market. Trade alerts highlight the most crucial economics so they won't miss any opportunities."
      },
      {
        type: 'textImage',
        imgLink: '/Roostify/follow-up.gif',
        title: 'Streamline the follow-ups',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender-00)',
        spacing: '72px',
        borderRadius: '16px',
        description: "Lenders relied on emails to communicate with borrowers, which resulted in slow processing and anxiety for borrowers. The new credit service allows lenders and borrowers to collaborate on the same task without manually drafting emails. In the meantime, borrowers can worry less and feel supported."
      },
      {
        type: 'textImage',
        imgLink: '/Roostify/mobile2.gif',
        title: 'Review Anytime, Anywhere',
        bgColor: 'bg-surface-primary',
        imgBgColor: 'var(--surface-lavender-00)',
        spacing: '32px 36%',
        borderRadius: '16px',
        description: "Loan officers often get last minute requests from borrowers, during evenings and weekends. We understand the circumstances and give loan officers time back by allowing rapid retrieval of the credit information while they are often distracted."
      }
    ]
  },
  nuggets: {
    hero: {
      imgLink: '/DataAI/dataAI.png',
      title: 'Nuggets',
      description: 'Journal your thoughts and feelings',
      tags: ['Full-Stack', '2024'],
      width: '500px',
      spacing: '64px 16px',
      bgColor: '#E3F2FD'
    },
    sections: [
      {
        type: 'textImage',
        imgLink: null,
        title: 'About Nuggets',
        bgColor: 'var(--surface-primary)',
        description: "Nuggets is a mental wellness app that helps users better recognize and cope with their emotions through journaling and reflection. Built as a full-stack application with modern web technologies."
      }
    ]
  }
}; 