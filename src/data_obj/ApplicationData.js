import medTechImg from '../assets/med-tech.jpg';
import autonomousVehiclesImg from '../assets/finance.jpg';

import agriculture from '../assets/Sports.jpg'
import store from '../assets/education.jpg'



const ApplicationsData = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'As the volume of EHR data and medical images continues to grow, the use of computer vision and other AI methods shows potential to enhance the effectiveness of clinicians.',
      image: medTechImg,
      imageAlt: 'Medical Technology',
      link: '/healthcare',
      className: 'med-tech-card',
      imagePosition: 'right', // image on right, content on left
      content: ["Healthcare Institutions (HI) have historically been beneficiaries of scientific discoveries and technological advances. From the mass adoption of inoculation to the discovery of penicillin, generally when healthcare methods improve, standards of living do also. This makes the incorporation of AI especially pertinent in the healthcare industry.",
        "Promising studies have shown efficacy in the use of models for detecting anomalies in medical images such as tumors or eye diseases (Medical Imaging AI), detecting risk factors in EHR data, and even providing clinicians with expert advice in various specialty areas (Med-PaLM).",
      "Potential benefits to be gained include:",
      {
        type: 'bullets',
        items: [
          'Early stage detection and diagnostics',
          'Enhanced patient data analytics ',
          'Increased capacity for treatment planning',
          'Precision medicine',
        
        ]
      },
      "CNN models trained on curated datasets have been shown to excel at early stage detection due to their large capacity for pattern recognition. While machines can still be hampered by internal biases typically stemming from data quality, they are mostly unencumbered by external factors that can impair human detection such as change blindness, and fatigue or distraction based interpretive errors.",
      "These interpretive errors can have serious consequences for identifying diseases, and as a result are a cause of litigation against clinicians (Interpretive Error in Radiology). Essentially the main benefits are speedy, accurate detections that are immune to perceptually induced interpretive errors.",
      "The growing amount of patient data from EHRs provides the opportunity for superior data analytics and insights. In many ways AI is simply another advancement in data analytics. Generally speaking the more high quality data we can provide the models, the better the outputs will be. Using EHRs and other patient information as our data source introduces another vector of improved patient care, by way of detecting patterns in the data that correlate with known or potentially unknown risk factors and flagging patients early for further investigation.",
      "Computer vision methods such as segmentation can also empower clinicians to better delineate anatomical structures visually, allowing for better planning and targeted interventions (Medical Imaging AI). The confluence of these advancements brings the possibility to realize precision/personalized medicine, which can allow clinicians to take into account a patient's lifestyle, environment, anatomy, and genes to provide insights tailored to the individual, and avoid the negative impacts of a one size fits all approach to treatments.",
      "While these advancements are exciting, they are still developing, broad in scope, and in many ways experimental. It’s important for HIs and med tech companies to properly:",
      {
        type: 'bullets',
        items: [
          'Identify impact goals',
          'Formulate problem and solution statements',
          'Increased capacity for treatment planning',
          'Carry out risk assessments',
        
        ]
      },
      "Before starting any modeling or data work, it's necessary to define impact goals by answering the following questions: Who is the end consumer of model outputs? How will they make sense of the outputs? What actionable steps can they take? How will we protect PII? How is success measured in terms of patient outcomes, business objectives, and technical requirements? This is not an exhaustive list, but by answering questions like these you’ll increase the chances that the future implementation work will be successful.",
      "Next, HIs and med tech companies can take these high level impact goals and identify areas in their workflows, systems or organization that make good candidates for automation or enhancement by AI. Depending on the demands of the problem HIs may go with analytical AI, gen AI (Gen AI vs Analytical) or just as importantly decide that AI is not necessary for the use case.",
      "It must be said that these tools are not without significant risk when implemented improperly or left unmonitored. Considerations of ethical, legal, reliability, and data privacy risks should be candidly discussed with stakeholders and form the crux of your responsible AI policy.",
      "In the case of gen AI, there's a known tendency towards hallucination which is when a model presents baseless information and expert opinion or facts. Gen AI is also non deterministic by nature, which means that for the same input there can be multiple outputs. These in many respects are features not bugs, being symptoms of their architecture as well a consequence of their ability to generalize (NU Hallucinations)",
      "Without proper monitoring of AI systems can suffer from model drift, which is when the distribution of input data shifts drastically from the distribution of training data, the end result being a rapid degrading of prediction accuracy. This means that all things being equal, models must be continuously fixed, improved, and retrained. In effect the decision to implement an AI system is a long term commitment to ensure that its outputs remain an accurate and unbiased reflection of the changing world."
    ],

    "links": [
             {
              "word": "(Med-PaLM)",
              "url": "https://sites.research.google/med-palm/"
              },{
              "word": "(Medical Imaging AI)",
                "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10740686/"
                },
                {
                  "word": "(Gen AI vs Analytical)",
                    "url": "https://hbr.org/2024/12/how-gen-ai-and-analytical-ai-differ-and-when-to-use-each"
                    },
                    {
                      "word": "(NU Hallucinations)",
                        "url": "https://casmi.northwestern.edu/news/articles/2024/the-hallucination-problem-a-feature-not-a-bug.html"
                        },
                        
                        {
                          "word": "(Interpretive Error in Radiology)",
                            "url": "https://ajronline.org/doi/10.2214/AJR.16.16963"
                            }]

                    
                
    },
    {
      id: 'finance',
      title: 'Finance',
      description: "With rising consumer expectations of what features are required to be competitive in today's digital applications, many finance companies are looking to AI for an edge.",
      image: autonomousVehiclesImg,
      imageAlt: 'finance',
      link: '/finance',
      className: 'finance-card',
      imagePosition: 'left', // image on left, content on right
      content:  [
        "Financial institutions (FI) impact the daily lives of billions of people across the globe, from providing tailored services to high net worth individuals to basic ones to the disadvantaged and unbanked. Many non FIs such as online marketplaces, coffee shops, and gas stations scale the reach of FIs by way of embedded finance and banking as a service.",
        "The rapid increase of digitized traditional financial services and products puts pressure on FIs to improve old offerings, create new ones, and meet rising consumer expectations of what features and functionality are required to be competitive in today's digital applications.",
        "All this must be done while remaining compliant with existing regulations, prioritizing data privacy, and remaining secure against highly sophisticated cyber criminal activity. With the advent of LLMs and generative AI, a large number of FIs are looking to incorporate its promising capabilities into their offerings.",
        "AI is not new to FIs. Industry leaders such as J.P Morgan and Morgan Stanely have been early adopters and enthusiastic proponents of the boon of AI/ML solutions in finance. FIs large pools of data makes for a ripe opportunity to gain some of the benefits. A short list is:",
        {
          type: 'bullets',
          items: [
            'Improved fraud detection ',
            'Faster research and information retrieval by analysts and advisors',
            'Real time personalized analytics, insights, and advice to clients',
            'Improved payment efficiency',
            'Improved cross and upselling through superior consumer data analytics',
            'Streamlined back office operation'
          
          ]
        },
        "Concerning fraud detection and payment efficiency, JP Morgan has seen a $1.5 billion reduction in expenditures. With their in-house solution coach AI, they've seen a 95% speed up in the time it takes their analysts to answer client concerns, playing to their advantage when client inquiries spiked during the tariff market scare. Processing time has also gone down as their fraud detection models have had a low rate of false positives (Reuters), (JP Morgan).",
        "For back office task automation, the World Economic Forum estimates that roughly 38% of work at banks has a high potential for automation, 33% and 32% for insurance and capital markets respectively. (WEF AI in Finance)",
        "These advantages however come with the potential for downside. Handling more client data increases the danger of leaks and breaches, while also increasing the human and capital resources allocated to ensuring privacy at input/output points of complex multi component pipelines.",
        "Getting information fast is good so long as it is correct, trusting the output from off the shelf or even fine tuned models may expose FIs to the risk of passing on model hallucinations to clients, eroding the bond of trust between the consumer and the FI.",
        "Business leaders at FIs can view of the AI/ML risk landscape via three lenses:",
        {
          type: 'bullets',
          items: [
            'The risk of bad actors',
            'The risk of third parties',
            'The risk of implementation',
          ]
        },
        "The risk of bad actors is clear from the pervasive occurrence of online scams. These scams can be global and elaborate billion dollar operations, as with sim farms that use gig workers to make fraudulent purchases with phished credit cards (WSJ Unpaid Toll Scam).They can also take the form of AI generated deepfakes, as seen with fraudsters who using existing videos of a finance worker's offshore managers, siphoned $25 million from the firm (CNN Deepfake).",
        "It's imperative for FIs to stay abreast of the latest methods employed by bad actors and analyze their own offerings to see if or where they might be at risk. Partnering with cybersecurity firms or creating internal tasks forces should be explored as options.",
        "Third party vendors selling AI solutions bring the risk of non compliance and misalignment with core business ethics and goals. It's important to work with these vendors in the early stages of design if possible, communicating priorities and standards. Due diligence on their offerings is also advised to ensure nothing is amiss.",
        "Implementation risks are an area where FIs can move proactively to exert control over events. Many recent reports have shown that a great deal of corporate AI initiatives are failing to provide significant ROI, stalling, or fail to reach production (MIT GenAI Divide). Some contributing factors are:",
        {
          type: 'bullets',
          items: [
            'Failing to tie solutions to measurable business goals',
            'Lack of infrastructure to maintain and monitor systems',

          ]
        },
        "Though the opportunity may be clear for finance, every firm is different and the greatest risk is in spending time and energy developing technology that you or your customers do not need. Therefore FIs should start by understanding the ideal customer experience and business outcomes, work backwards to identify impediments to this ideal, and brainstorm possible solutions to overcome them.",
        "During this process it's key to stay open to adjusting conceptions on what the actual problems are and what solutions should be explored. Some problems will call for AI/ML, while others may call for simple less glamorous solutions.",
        "If the problem does call for AI/ML, a culture of good data governance should be instilled throughout the firm. This entails the prioritization of data quality, security, and availability at the company, without this, the following AI/ML developments will be sterile and unlikely to produce results. Frameworks for responsible AI should be in place and well disseminated with the purpose of guiding all future decisions.",
        "Once the designing, prototyping, and testing work has been done, the system can be deployed. At this point many teams celebrate and race off to the next project. But in the world of ML, deployment rather than being the end of the job, is merely its beginning.",
        "Models can work perfectly in test environments, but major hiccups can be revealed once used in the real world. As the world changes the models outputs can become stale and its performance can rapidly degrade. To mitigate such failures FIs should adopt the attitude of long term commitment towards the project and invest in the maintenance and monitoring of all AI/ML solutions.",
        "Once the general and specific risks have been identified, and data prerequisites are in place, FIs may increase their likelihood of reaping efficiency gains, reducing costs, and avoiding high profile imbroglios. However, it must be kept in mind that these tools are widely available and are just as likely to drive down costs for competitors as well.",
        "When all firms have reached operational efficiency, where is competitive advantage to be had? The economist Michael Porter once said “without distinctive strategic direction, speed and flexibility lead nowhere”.",
        "In today's age, automation and hyper efficient workflows are necessary but not sufficient for sustaining advantage. Whatever the new technology or solution may be, it's important to maintain focus on creating tangible value for customers such that they are willing to pay a higher price for your offerings or are reluctant to use the ones of your competitors even at a discount."

      ],
      "links": [
        {
         "word": "(Reuters)",
         "url": "https://www.reuters.com/business/finance/jpmorgan-says-ai-helped-boost-sales-add-clients-market-turmoil-2025-05-05/"
         },{
         "word": "(JP Morgan)",
           "url": "https://www.jpmorgan.com/insights/payments/payments-optimization/ai-payments-efficiency-fraud-reduction#footnote-1"
           },
          {
             "word": "(WEF AI in Finance)",
               "url": "https://reports.weforum.org/docs/WEF_Artificial_Intelligence_in_Financial_Services_2025.pdf"
          },
           {
            "word": "(WSJ Unpaid Toll Scam)",
                   "url": "https://www.wsj.com/tech/cybersecurity/url-scam-texts-china-gangs-68e96097?mod=hp_featst_pos3"
          },
          {
           "word": "(CNN Deepfake)",
                  "url": "https://www.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk"
         },
         {
          "word": "(MIT GenAI Divide)",
                 "url": "https://www.artificialintelligence-news.com/wp-content/uploads/2025/08/ai_report_2025.pdf"
        }]

    },
    {
      id: 'higher-ed',
      title: 'Higher Education',
      description: 'As young students continue to look to higher education for pathways to stable careers and personal development, many institutions are exploring how they might track and improve student outcomes through AI.',
      image: store,
      imageAlt: 'Library',
      link: '/higher-ed',
      className: 'med-tech-card',
      imagePosition: 'right', // image on right, content on left
      content:  [
         "The role of higher education institutions (HEI) in society can not be understated, as young students look to these intuitions for pathways to stable careers and personal development, many HEIs are looking to improve their ability to improve and track student outcomes through the use of sophisticated data analytics and AI/ML solutions.",
         "When it comes to student outcomes, HEIs may want to increase retention and graduation rates while identifying students at risk of dropping out and if possible, address the causal factors of those risks. They may want to better allocate resources towards students most likely to thrive at their institution by way of targeting and attracting ideal students during the admission process.",
         "A short list of the potential use cases for AI/ML at HEIs:",

        {
          type: 'bullets',
          items: [
            'Risk modeling: Identifying students at risk for failing or dropping out',
            'Lead generation: Identify students most likely to attend and stay at the institution',
            'Course recommendations and personalization',
            'Cost containment'
          
          ]
        },
        "For risk modeling, researchers have found that classical ML models like logistic regression can be as effective in predicting students' success as an advisor who’s met a student up to eight times. An XGBoost model outperformed high school GPAs as an indicator for at-risk students by a factor of three (Association for Institutional Research). Finding students in danger of failing or dropping out early may allow HEIs to start interventions that can help keep these students on track, improving student outcomes and increasing their retention rates.",
        "The large amounts of student data combined with data on courses, extracurriculars, and other resources offered by HEIs makes course personalization an attractive possibility. Connecting these datasets and gaining prescriptive insights from them may provide students with adaptive recommendations on electives, programs, and other information that can impact their experience and retention rates at the school. This can be particularly advantageous to understaffed/under-resourced institutions that lack the capacity to provide tailored guidance for every student in need.",
        "While the benefits are significant, they come with prerequisites for realizing them as well as risks concerning fairness and equity. A prerequisite for personalization for example may involve connecting data systems that may be siloed and not designed for interoperability. For admissions or financial aid scoring HEIs may want to ensure they’ll have the ability to confirm the veracity of the data that determines the outputs of the models.",
        "The great opportunity for sophisticated analytic insights to improve outcomes for millions of students at HEIs, also opens up the risk for widespread detrimental effects if the proper considerations are not taken. HEIs looking to implement AI/ML solutions must be cognizant of the following:",

        {
          type: 'bullets',
          items: [
            'Bias in models can amplify and automate existing inequalities',
            'Inscrutable algorithmic student scorings pose legal and ethical questions',
            'Potential adverse effects of outputs on students',
          ]
        },
          "As it stands today, the correctness of the model outputs will be as good as the data it is trained on.  If the dataset the model has been trained on is biased in some way, as with for example an undersampling of one or more data subsets, the model's predictions will automate and amplify these biases, and if gone unchecked bring harm to students and institutions alike.",
          "It's important to keep in mind that even the best data driven systems or decisions can have adverse effects when implemented incorrectly. For example if a solution is put in place to identify students at risk of failing a class, showing the raw output to the student may demoralize them leading to a self fulfilling prophecy. Showing it directly to the instructor may affect their treatment of the student and decisions to allocate resources towards those students. After the consumer of the system's outputs receives the prediction, they must be provided with actionable steps to either remedy a situation for at-risk students, or capitalize on an opportunity identified by the system.",
          "Use cases such as predictive scoring for admissions, financial aid, recruiting and more may fall under consumer scoring which has come under some legislative scrutiny. According to the Government Accountability Office (GAO), some faculty do not know the data or methods that make up the model and the systems can act as inscrutable black boxes (GAO Consumer Scoring). While there's currently no federal law covering the use of algorithmic scoring in HEIs, its crucial to be aware of the potential risks and maintain policies of responsible and explainable AI.",
          "As more and more institutions advance in their data-driven insights and decisions capabilities,  it's important to start with the ideal outcomes for the students, institution and all other relevant stakeholders first, identifying relevant and necessary factors, measures of success and subsequent actionable steps. Once these are identified they must be translated into technical objectives again identifying the best metrics to track if the solution properly represents the predefined impact goals.",
          "For good or ill, ML based systems are powerful tools. Increasing their autonomy in the decision making processes where the outputs can influence the outcomes of real individuals is an initiative that must be taken up with care. Educational researchers must collaborate heavily with ML engineers, product designers and other technical experts to formulate impact goals, and be willing to adjust the problem formulatation as feedback comes in from impacted stakeholders."
        
      ],
      "links": [
        {
         "word": "(Association for Institutional Research)",
         "url": "https://www.airweb.org/docs/default-source/documents-for-pages/reports-and-publications/professional-file/apf-161-predictive-analytics-in-higher-education.pdf?sfvrsn=f31dcce4_1"
         },{
         "word": "(GAO Consumer Scoring)",
           "url": "https://www.gao.gov/assets/gao-22-104527.pdf"
           },
          {
             "word": "(WEF AI in Finance)",
               "url": "https://reports.weforum.org/docs/WEF_Artificial_Intelligence_in_Financial_Services_2025.pdf"
          },
           {
            "word": "(WSJ Unpaid Toll Scam)",
                   "url": "https://www.wsj.com/tech/cybersecurity/url-scam-texts-china-gangs-68e96097?mod=hp_featst_pos3"
          },
          {
           "word": "(CNN Deepfake)",
                  "url": "https://www.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk"
         },
         {
          "word": "(MIT GenAI Divide)",
                 "url": "https://www.artificialintelligence-news.com/wp-content/uploads/2025/08/ai_report_2025.pdf"
        }]

    },
 
  ];

export default ApplicationsData