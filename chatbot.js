// OIET Chatbot Widget - Complete Fixed Version with All Keywords

// DOM Elements
const icon = document.getElementById('OIET-chatbot-icon');
const widget = document.getElementById('OIET-chatbot-widget');
const closeBtn = document.getElementById('OIET-chatbot-close');
const form = document.getElementById('OIET-chatbot-form');
const input = document.getElementById('OIET-chatbot-input');
const messages = document.getElementById('OIET-chatbot-messages');

// Show widget when icon clicked
// Show widget when icon clicked
icon.addEventListener('click', () => {
  widget.classList.remove('hidden');
  input.focus();
  showWelcomeMessage(); // <-- This line triggers the welcome message!
});

// Show welcome message when widget opens
function showWelcomeMessage() {
  // Optional: clear previous messages if you want a fresh chat each time
  // messages.innerHTML = ""; // Uncomment to clear chat each open
  const welcomeText = `👋 Hello! I'm OIET Assistant
Welcome to OIET! I'm here to help you with:

• Information about our services
• Courses  we offer
• How classes are conducted?
• Course Duration?
• Payment Options
• Study Mode.

How can I assist you today?
  `.trim();
  typeWriterMessage('bot', welcomeText);
}

// Hide widget when close button clicked
closeBtn.addEventListener('click', () => {
  widget.classList.add('hidden');
});

// Send message and display bot response
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMsg = input.value.trim();
  if (!userMsg) return;
  appendMessage('user', userMsg);
  input.value = '';
  showTypingIndicator();
  setTimeout(() => {
    getBotResponse(userMsg);
  }, 1000);
});

// Add message to chat
function appendMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('chatbot-message');
  const bubble = document.createElement('div');
  bubble.classList.add(sender === 'user' ? 'message-user' : 'message-bot');
  bubble.textContent = text;
  msgDiv.appendChild(bubble);
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
}

// Show "Typing..." indicator
function showTypingIndicator() {
  removeTypingIndicator();
  const typingDiv = document.createElement('div');
  typingDiv.classList.add('chatbot-message', 'typing-indicator');
  const bubble = document.createElement('div');
  bubble.classList.add('message-bot');
  bubble.textContent = 'Typing...';
  typingDiv.appendChild(bubble);
  messages.appendChild(typingDiv);
  messages.scrollTop = messages.scrollHeight;
}

// Remove "Typing..." indicator
function removeTypingIndicator() {
  const indicators = messages.querySelectorAll('.typing-indicator');
  indicators.forEach(indicator => indicator.remove());
}

// Comprehensive FAQ database - Complete with all your original keywords and answers
const faqResponses = [


  // location

  // Contact Information and Digital Presence
{
  keywords: [
    "what is the physical address of oiet", "physical address of oiet", "where is oiet located", 
    "oiet physical address", "oiet location", "oiet address"
  ],
  answer: "Innovation Hub, Nakawa, Kampala, Uganda."
},
{
  keywords: [
    "what is the postal address for oiet", "postal address for oiet", "oiet postal address", 
    "po box oiet", "mailing address oiet", "oiet po box"
  ],
  answer: "P.O. Box 162044, Kampala."
},
{
  keywords: [
    "what is oiet's primary phone number", "oiet primary phone number", "primary phone number oiet",
    "main phone number oiet", "oiet phone number"
  ],
  answer: "+256 756722263."
},
{
  keywords: [
    "what is a secondary contact number for oiet", "secondary contact number for oiet", 
    "alternative phone number oiet", "second phone number oiet", "other phone number oiet"
  ],
  answer: "+256 706867547."
},
{
  keywords: [
    "what is the primary email address for oiet", "primary email address for oiet", 
    "oiet primary email", "main email oiet", "oiet email address"
  ],
  answer: "info@oiet.ac.ug."
},
{
  keywords: [
    "is there an alternative email for oiet", "alternative email for oiet", "other email oiet",
    "second email oiet", "oiet alternative email"
  ],
  answer: "Yes, info@otictech.com."
},
{
  keywords: [
    "what is oiet's official website", "oiet official website", "oiet website", 
    "official website oiet", "oiet web address"
  ],
  answer: "https://oiet.ac.ug."
},
{
  keywords: [
    "does oiet have a linkedin profile", "oiet linkedin profile", "linkedin profile oiet",
    "oiet on linkedin", "linkedin oiet"
  ],
  answer: "Yes, it can be found at https://www.linkedin.com/company/oiet/."
},
{
  keywords: [
    "what is oiet's handle on twitter", "oiet handle on twitter", "oiet twitter handle",
    "twitter handle oiet", "oiet on twitter", "oiet twitter", "oiet x handle"
  ],
  answer: "@OIETUganda."
},



  // Comparative & Course Selection Questions
  {
    keywords: [
      "choose between intelligent finance and risk intelligence", 
      "intelligent finance vs risk intelligence"
    ],
    answer: '"Intelligent Finance" is specifically tailored for financial professionals focused on credit scoring, lending, and customer financial behavior. "Risk Intelligence" is broader, aimed at managing various organizational risks (operational, strategic, etc.) and is suitable for roles like risk managers and business continuity planners across different industries.'
  },

  {
    keywords: [
      "what is the main difference between predictive marketing and intelligent finance marketing", 
      "predictive marketing vs intelligent finance"
    ],
    answer: '"Predictive Marketing" focuses entirely on marketing strategies like customer segmentation, ad targeting, and campaign optimization. While "Intelligent Finance" has a marketing component, it is specifically about marketing financial products and understanding customer financial behavior for cross-selling within a bank or microfinance institution.'
  },
  {
    keywords: [
      "cybersecurity bank cyber intelligence or intelligent finance", "I work in cybersecurity for a bank. Should I take Cyber Intelligence or Intelligent Finance?",
      "work in cybersecurity for bank"
    ],
    answer: 'If your role is focused on protecting the bank\'s digital assets from external threats and internal fraud, "Cyber Intelligence" is the right choice. If your role involves assessing the credit risk of borrowers and financial decision-making, "Intelligent Finance" is more suitable.'
  },
  {
    keywords: [
      "courses suitable public sector government agency", " Are any of these courses suitable for someone working in the public sector or for a government agency?"
    ],
    answer: 'Yes. The "Tax Intelligence" course is directly relevant for professionals in revenue authorities and public finance. "Cyber Intelligence" is crucial for government security agencies, and "Risk Intelligence" is valuable for public sector continuity and strategic planning.'
  },
  {
    keywords: [
      "new to field best foundational knowledge", 
      "which course foundational","I'm new to my field. Which course offers the best foundational knowledge?"
    ],
    answer: 'Each course is designed to be foundational within its specific sector (Finance, Marketing, etc.) and explicitly states that no prior AI experience is needed. The best course for you depends entirely on the industry you are in or wish to enter.'
  },

  // Logistics, Technical & Support Questions
  {
    keywords: [
      "technology software need online courses", 
      "software requirements", "What technology or software do I need for these online courses?"
    ],
    answer: 'The provided documents do not specify the exact technology stack. However, for any online course, you will generally need a reliable internet connection, a computer (desktop or laptop), and a modern web browser. Specific software requirements, if any, would be communicated upon enrollment.'
  },
  {
    keywords: [
      "miss live learner support session recorded", "what happens if i miss a lesson?",
      "support sessions recorded", "What happens if I miss a live learner support session? Will they be recorded?", "what happens if i miss a live learner support session"
    ],
    answer: 'The prospectus does not state whether the support sessions are recorded. We highly recommend attending them live to ask questions. For a definitive answer, please contact the institute directly.'
  },
  {
    keywords: [
      "final exam project required certificate", 
      "assessment method", "Is there a final exam or project required to get the certificate? "
    ],
    answer: 'The documents do not detail the final assessment method. Courses like these typically conclude with a final project or examination to demonstrate mastery of the concepts. You can request a detailed program brief for more information on assessment.'
  },
  {
    keywords: [
      "time dedicate coursework each week", 
      "weekly commitment", "How much time should I expect to dedicate to coursework each week outside of the support sessions "
    ],
    answer: 'While the exact weekly commitment is not specified, for a 6-month certificate program, students should typically plan for several hours of self-study, reading, and assignment work per week to succeed.'
  },
// costing and pricing
   {
    keywords: [
      "How much does the course cost? ", "how much does it cost?", "how much is the course fee?", "what is the course fee?", "how much do you charge for the course?"
    ],
    answer: 'The fee is UGX 1,200,000 for Ugandans and UGX 1,800,000 for international students.'
  },


{
  keywords: [
    "What are the payment options?", "payement options","how do i pay?", "how can i pay?", "payment methods", "payment options available", "how can i make payment?"
  ],
  answer: `You can pay via:

- Airtel Pay (Merchant Code): 4379529  
  Name: Otic Foundation

- MTN MoMo (Merchant Code): 720504  
  Name: Otic Foundation

- Bank Transfer - Stanbic Bank  
  Account Name: Otic Foundation  
  Account Number: 9030025213237 UGX`
},



  // course duration and access

   {
    keywords: [
       "how are the classes conducted?",
      "how are lessons conducted?", "how do i access the class?", "how is the course taught?", "how are the sessions conducted?", "how can i attend classes?", "mode of study", "delivery mode", "how do you teach?",
    ],
    answer: 'The course is delivered 100% online'
  },

    {
    keywords: [
     "When are the learner support sessions held?", 
    ],
    answer: 'Learner support sessions are held on Tuesdays at 7:30 PM and Saturdays at 10:00 AM. '
  },

     {
    keywords: [
     "are classes conducted physically?", "are there physical classes?", "are there in-person classes?", "are classes in person?", "are the classes physical?","physical classes"
    ],
    answer: 'No, all classes are conducted online.'
  },

  {
    keywords: [
      "access course content mobile device", 
      "mobile friendly", "Can I access the course content on a mobile device?"
    ],
    answer: 'The information does not specify if the learning platform is mobile-friendly. While many modern online learning systems are, you should confirm this with the institute if mobile access is important to you.'
  },
  {
    keywords: [
      "instructors courses qualifications faculty", "Who are the instructors for these courses? What are their qualifications?"
    ],
    answer: 'The provided materials do not list the specific instructors or their qualifications. For information about the faculty, please reach out to the OIET Institute at info@oiet.ac.ug.'
  },

  // Payment & Enrollment Questions
  {
    keywords: [
      "application deadline courses", 
      "enrollment deadlines", "Is there an application deadline for these courses?", "what is the deadline for application?", "what is the deadline for applying?"
    ],
    answer: 'The documents do not mention specific application deadlines. It\'s best to contact the admissions team via email or WhatsApp to inquire about the next intake and enrollment deadlines.'
  },
  {
    keywords: [
      "OIET foundation payment details", 
      "What is the Otic Foundation listed on the payment details? "
    ],
    answer: 'OIET Foundation is the name of the entity designated to receive payments for the courses via Airtel Pay, MTN MoMo, and Stanbic Bank.'
  },
  {
    keywords: [
      "pay course fee installments", 
      "installment plan", "Can I pay the course fee in installments?"
    ],
    answer: 'The payment options listed are for the full course fee. The documents do not mention an installment plan. Please contact the institute to ask if a payment plan option is available.'
  },
  {
    keywords: [
      "discount group corporate enrollments", 
      "corporate discount", "Is there a discount for group or corporate enrollments?", "can i get a discount?", "do you offer some discounts?"
    ],
    answer: 'The fee structure provided is for individual learners. For inquiries about potential discounts for enrolling multiple employees from the same company, you should contact the institute directly.'
  },
  {
    keywords: [
      "refund policy enroll cannot continue", 
      "refund policy"
    ],
    answer: 'The documents do not contain information about a refund policy. This is an important question to ask the administration before making a payment.'
  },
  {
    keywords: [
      "after payment next step access course", 
      "after making payment","After I make the payment, what is the next step? How do I get access to the course?"
    ],
    answer: 'After making a payment, you should receive a confirmation and instructions on how to access the online learning platform. It is advisable to send a proof of payment to info@oiet.ac.ug or the WhatsApp number to ensure your enrollment is processed promptly.'
  },

  // Career & Application Questions
  {
    keywords: [
      "job titles predictive marketing certificate", 
      "predictive marketing career", "What kind of job titles could I apply for after completing the Predictive Marketing certificate? "
    ],
    answer: 'You would be a strong candidate for roles such as Digital Marketing Strategist, Marketing Analyst, Customer Insights Manager, Campaign Manager, or E-commerce Personalization Specialist.'
  },
  {
    keywords: [
      "intelligent finance course fintech startup", 
      "fintech startup skills", "Can I apply the skills from the Intelligent Finance course if I work for a FinTech startup?"
    ],
    answer: 'Absolutely. The skills learned, such as AI-driven credit scoring and using alternative data, are highly relevant and crucial for FinTech startups that aim to disrupt traditional banking and lending services.'
  },
  {
    keywords: [
      "courses help start consulting business", 
      "consulting business"
    ],
    answer: 'Yes. Completing a specialized course like "Tax Intelligence" or "Predictive Marketing" can provide you with the expert knowledge and credentials to offer specialized AI consulting services in those domains.'
  },
  {
    keywords: [
      "ethical considerations ai addressed courses", 
      "ai ethics", "How are the ethical considerations of AI addressed in the courses?"
    ],
    answer: 'The prospectus for both the "Predictive Marketing" and "Intelligent Finance" courses explicitly lists discussing or recognizing ethical considerations, data privacy, and potential biases in AI as a key course objective.'
  },
  {
    keywords: [
      "small e-commerce business predictive marketing overkill", 
      "ecommerce predictive marketing", "I run a small e-commerce business. Is the Predictive Marketing course overkill for me?"
    ],
    answer: 'Not at all. The principles of customer segmentation, predicting purchase likelihood, and optimizing ad spend are crucial for businesses of all sizes. This course could give you a significant competitive edge by helping you market more efficiently.'
  },
  {
    keywords: [
      "certificates international recognition", 
      "international recognition"
    ],
    answer: 'The documents do not specify the accreditation or international recognition status of the certificates. This is a question you may want to ask the OIET Institute directly, especially if you plan to work abroad.'
  },

  // In-Depth Course Content Questions
  {
    keywords: [
      "intelligent finance stock market prediction algorithmic trading", 
      "stock market prediction"
    ],
    answer: 'The course description focuses heavily on credit scoring, financial decision-making for lending, and customer analytics. It does not mention stock market prediction or trading. For specifics, please request the detailed program brief.'
  },
  {
    keywords: [
      "cyber intelligence build ai models scratch existing tools", 
      "build ai models cyber intelligence", "For the Cyber Intelligence course, will we learn to build AI models from scratch or use existing AI-powered tools? "
    ],
    answer: 'Given that no coding experience is required, the course will likely focus on how to use and interpret the output of existing AI-powered cybersecurity tools and platforms, rather than building models from scratch.'
  },
  {
    keywords: [
      "predictive marketing ai content creation ad copy", 
      "ai content creation marketing", "Does the Predictive Marketing course cover AI for content creation (e.g., writing ad  copy)? "
    ],
    answer: 'The prospectus emphasizes customer analytics, segmentation, and prediction. While it touches on delivering relevant content, it does not explicitly mention AI-powered content generation. The focus is on analytics and strategy.'
  },
  {
    keywords: [
      "tax intelligence international tax laws fraud detection borders", 
      "international tax laws"
    ],
    answer: 'The prospectus mentions the need for these skills in Uganda, suggesting a focus on the local context. Whether it extends to international tax law is not specified. You can clarify this by requesting a program brief.'
  },
  {
    keywords: [
      "risk intelligence quantitative financial qualitative strategic risk", 
      "risk intelligence focus", " Is the Risk Intelligence course focused more on quantitative financial risk or qualitative strategic risk?"
    ],
    answer: 'The title "Predictive Risk Management & Strategic Resilience" suggests a blend of both. It aims to use predictive methods (often quantitative) to build strategic resilience (which involves qualitative assessment). The exact balance can be found in the detailed brief.'
  },
  {
    keywords: [
      "practical course real-world case studies", 
      "case studies practical", "How practical is the course? Will we work with real-world case studies?", "How practical is the course?", "Will we work with real-world case studies?"
    ],
    answer: 'The course descriptions imply a very practical approach, focusing on solving real-world challenges faced by businesses in Uganda. Using case studies is a common and effective method for this type of training.'
  },
  {
    keywords: [
      "propensity modeling predictive marketing", 
      "what is propensity modeling"
    ],
    answer: 'Propensity modeling is a statistical or machine learning technique used to predict the likelihood (or "propensity") of a customer to perform a certain action, such as making a purchase, clicking an ad, or unsubscribing from a service.'
  },
  {
    keywords: [
      "intelligent finance alternative data mobile phone credit scoring", 
      "alternative data credit scoring"
    ],
    answer: 'Yes, a key benefit mentioned is learning how "alternative data sources can expand responsible access to credit," which directly addresses this and is crucial for lending to underserved populations.'
  },

  // Institutional Questions
  {
    keywords: [
      "OIET institute accredited university", 
      "oiet accredited university", "Is the Otic Institute of Emerging Technologies an accredited university? "
    ],
    answer: 'The documents refer to the institution as an "Institute," not a university. The accreditation status is not mentioned. For official information on its registration and accreditation, you should inquire with the institute directly or check with the relevant national council for higher education.'
  },
  {
    keywords: [
      "courses taught english", 
      "language instruction", "Are all the courses taught in English?", "which language is used during lessons?"
    ],
    answer: 'The course materials are all in English, which strongly indicates that English is the language of instruction.'
  },
  {
    keywords: [
      "post-course support alumni network", 
      "alumni network"
    ],
    answer: 'The documents do not mention any post-course support or alumni network. This would be a good question to ask the administration, as an active alumni network can be very valuable for career development.'
  },
  {
    keywords: [
      "OIET institute other programs besides six courses", 
      "other programs"
    ],
    answer: 'The provided documents only detail these six AI Sector-Specific Programs. To find out about any other courses or workshops they may offer, you would need to contact them or visit their official website.'
  },

   {
    keywords: [
      "Do i need coding experience?", 
      "Do I need any prior AI or coding experience? "
    ],
    answer: 'No, prior AI development or coding experience is required to take this course. '
  },
  // Program specifics - Intelligent Finance
  {
    keywords: [
      "intelligent finance course about", 
      "what is intelligent finance"
    ],
    answer: 'This course provides intensive training on how to use Artificial Intelligence (AI) to revolutionize credit risk assessment, especially for inclusive lending, and to derive actionable insights from customer data.'
  },
  {
    keywords: [
      "intelligent finance course for", 
      "who intelligent finance"
    ],
    answer: 'It\'s ideal for financial professionals such as Loan Officers, Credit Analysts, Relationship Managers, Customer Service Managers, Branch Managers, Product Development Specialists, and Marketing Professionals within banks, microfinance institutions, and other financial services organizations in Uganda.'
  },
  {
    keywords: [
      "intelligent finance main goal", 
      "goal intelligent finance"
    ],
    answer: 'The main goal is to equip financial professionals with modern, AI-powered tools and an analytical mindset to navigate challenges in the financial sector and unlock new opportunities for growth and financial inclusion.'
  },

   {
    keywords: [
      "How long is the course? ", 
      "for how long?", "how long does the course take?", "how long does the course last for?", "how long will it take?"
    ],
    answer: 'The course duration is 6 months. '
  },

   {
    keywords: [
    
      "What is the purpose of the learner support sessions? ", "what is the use of learner support sessions?"
    ],
    answer: 'These sessions are designed to help you ask questions, get guidance, and stay on track with your coursework.  '
  },

  {
    keywords: [
      "intelligent finance skills learn", 
      "intelligent finance benefits"
    ],
    answer: 'You will learn to interpret AI-driven credit scores, contribute to inclusive lending, analyze customer behavior, support data-driven decisions, communicate AI insights effectively, and boost your career relevance in the finance sector.'
  },
  {
    keywords: [
      "intelligent finance help institution", 
      "institutional benefits"
    ],
    answer: 'Your institution can benefit from reduced credit losses, expanded market reach, increased customer loyalty and revenue, improved operational efficiency, and a fostered data-driven culture.'
  },
  {
    keywords: [
      "intelligent finance key objectives", 
      "course objectives"
    ],
    answer: 'By the end of the course, you will be able to explain the strategic importance of AI in finance, interpret AI-generated credit scores, analyze customer transaction data, identify opportunities for personalized financial products, communicate data-driven insights, and recognize ethical considerations in AI for financial services.'
  },
  {
    keywords: [
      "intelligent finance ugandan financial sector challenges", 
      "financial sector challenges"
    ],
    answer: 'The course addresses critical challenges such as credit exclusion, high default rates, generic customer engagement, and inefficient manual processes by teaching AI-driven solutions.'
  },

  // Smart Insurance
  {
    keywords: [
      "smart insurance course", 
      "what is smart insurance"
    ],
    answer: 'This is a certificate program focused on applying Artificial Intelligence (AI) to enhance insurance underwriting processes and improve customer retention strategies.'
  },
  {
    keywords: [
      "smart insurance enroll", 
      "who smart insurance"
    ],
    answer: 'This course is designed for professionals in the insurance industry, including underwriters, claims analysts, risk managers, customer retention specialists, and business development managers.'
  },
  {
    keywords: [
      "smart insurance primary objective", 
      "smart insurance goal"
    ],
    answer: 'The primary objective is to empower insurance professionals to leverage AI for more accurate risk assessment, personalized policy pricing, and proactive customer retention, thereby gaining a competitive edge.'
  },
  {
    keywords: [
      "smart insurance topics covered", 
      "smart insurance content"
    ],
    answer: 'While the detailed prospectus is not available, you can expect to cover AI applications in risk assessment, fraud detection, personalized insurance products, and customer churn prediction. For a detailed brief, please contact us directly.'
  },
  {
    keywords: [
      "smart insurance career benefit", 
      "smart insurance career"
    ],
    answer: 'You will gain specialized skills in applying cutting-edge AI to the insurance sector, making you a valuable asset to any modern insurance company and opening up new career opportunities.'
  },
  {
    keywords: [
      "smart insurance company benefits", 
      "insurance company benefits",
      "What are the benefits for an insurance company that sponsors its employees for this course?"
    ],
    answer: 'Companies can expect improved underwriting accuracy, reduced fraudulent claims, enhanced customer satisfaction and retention, and a more data-driven approach to strategic decisions.'
  },

  // Tax Intelligence
  {
    keywords: [
      "tax intelligence course about", 
      "what is tax intelligence"
    ],
    answer: 'This certificate program focuses on the application of Artificial Intelligence (AI) for detecting tax fraud, optimizing audit processes, and enhancing compliance analytics.'
  },
  {
    keywords: [
      "tax intelligence target audience", 
      "who tax intelligence"
    ],
    answer: 'This course is aimed at tax professionals, auditors, compliance officers, financial analysts, and government revenue authority personnel.'
  },
  {
    keywords: [
      "tax intelligence main purpose", 
      "tax intelligence purpose"
    ],
    answer: 'The course aims to equip professionals with the skills to use AI to identify patterns of tax evasion, streamline audit selections, and improve overall tax compliance, making the process more efficient and effective.'
  },
  {
    keywords: [
      "tax intelligence learn", 
      "tax intelligence curriculum"
    ],
    answer: 'You will likely learn about using AI for anomaly detection in tax filings, predictive modeling for audit selection, risk scoring of taxpayers, and analytics for ensuring regulatory compliance. For a detailed outline, please request a program brief.'
  },
  {
    keywords: [
      "tax intelligence career help", 
      "tax intelligence career benefits"
    ],
    answer: 'By gaining expertise in AI applications for tax, you will be at the forefront of a major technological shift in the industry, enhancing your professional profile and career prospects in both public and private sectors.'
  },
  {
    keywords: [
      "tax intelligence benefits authorities consulting firms", 
      "tax authorities benefits"
    ],
    answer: 'These organizations can benefit from increased efficiency in audits, higher rates of fraud detection, improved resource allocation, and a more robust and data-driven compliance framework.'
  },

  // Predictive Marketing
  {
    keywords: [
      "predictive marketing course about", 
      "what is predictive marketing"
    ],
    answer: 'This course empowers marketing and advertising professionals to use the power of Artificial Intelligence (AI) to understand and predict consumer actions, optimize campaign performance, and execute highly effective digital marketing initiatives.'
  },
  {
    keywords: [
      "predictive marketing attend", 
      "who predictive marketing"
    ],
    answer: 'The course is designed for Marketing Managers, Digital Marketing Specialists, Advertising Professionals, Brand Managers, E-commerce Managers, Marketing Analysts, and anyone involved in digital marketing strategy.'
  },
  {
    keywords: [
      "predictive marketing problem solve ugandan businesses", 
      "marketing challenges uganda"
    ],
    answer: 'It addresses significant marketing challenges such as inefficient ad spend, generic messaging, unpredictable campaign performance, customer data overload, and intense competitive pressure.'
  },
  {
    keywords: [
      "predictive marketing key benefits participants", 
      "predictive marketing benefits"
    ],
    answer: 'You will learn to master advanced customer segmentation, predict customer actions (propensity modeling), forecast marketing performance, optimize campaigns for ROI, enhance personalization, and advance your career in digital marketing.'
  },
  {
    keywords: [
      "predictive marketing company benefit", 
      "company marketing benefits"
    ],
    answer: 'Your company can achieve increased marketing ROI, deeper customer engagement, a proactive marketing strategy, a competitive advantage, and can foster a data-driven marketing culture.'
  },
  {
    keywords: [
      "predictive marketing able to do end course", 
      "predictive marketing outcomes"
    ],
    answer: 'You\'ll be able to explain how AI is used for customer segmentation, interpret propensity models, use predictive analytics to forecast campaign performance, identify personalization opportunities, and translate AI insights into actionable marketing strategies.'
  },
  {
    keywords: [
      "predictive marketing ethical considerations", 
      "marketing ethics"
    ],
    answer: 'Yes, a key objective is to discuss ethical considerations related to AI in marketing, including data privacy and bias.'
  },

  // Risk Intelligence
  {
    keywords: [
      "risk intelligence course", 
      "what is risk intelligence"
    ],
    answer: 'This is a certificate program that teaches how to apply Artificial Intelligence (AI) to predict and manage risks, thereby building strategic resilience for an organization.'
  },
  {
    keywords: [
      "risk intelligence intended for", 
      "who risk intelligence"
    ],
    answer: 'It is designed for risk management professionals, business continuity planners, strategic planners, financial analysts, and any manager responsible for organizational resilience and foresight.'
  },
  {
    keywords: [
      "risk intelligence core aim", 
      "risk intelligence aim"
    ],
    answer: 'The course aims to equip professionals with the ability to use AI for identifying potential risks, forecasting their impact, and developing proactive strategies to mitigate them, ensuring the organization can withstand and adapt to disruptions.'
  },
  {
    keywords: [
      "risk intelligence topics covered", 
      "risk intelligence curriculum"
    ],
    answer: 'You can expect the curriculum to cover AI applications in operational risk, financial risk, supply chain risk, and strategic risk management. To get a detailed list of topics, please request a program brief.'
  },
  {
    keywords: [
      "risk intelligence career benefits", 
      "risk intelligence career"
    ],
    answer: 'You will gain highly sought-after skills in predictive risk analytics, setting you apart as a forward-thinking risk professional and opening doors to senior roles in risk management and strategy.'
  },
  {
    keywords: [
      "risk intelligence benefit organization", 
      "organizational benefits risk"
    ],
    answer: 'An organization can build a more robust and resilient operation by proactively identifying and mitigating risks, leading to reduced losses, improved strategic planning, and a stronger competitive position.'
  },

  // Cyber Intelligence
  {
    keywords: [
      "cyber intelligence course about", 
      "what is cyber intelligence"
    ],
    answer: 'This certificate course is focused on using Artificial Intelligence (AI) for advanced fraud detection, cyber threat analysis, and effective incident response.'
  },
  {
    keywords: [
      "cyber intelligence enroll", 
      "who cyber intelligence"
    ],
    answer: 'The course is ideal for cybersecurity analysts, IT auditors, fraud investigators, information security managers, and any IT professional looking to specialize in AI-driven security.'
  },
  {
    keywords: [
      "How can I ask questions during the course?"
    ],
    answer: 'The bi-weekly learner support sessions are the designated times to ask questions, seek guidance, and interact with instructors and peers. You can also reach out via email or WhatsApp for additional support.'
  },
  {
    keywords: [
      "cyber intelligence main objective", 
      "cyber intelligence objective"
    ],
    answer: 'The primary goal is to empower cybersecurity professionals to use AI to proactively detect threats, analyze vast amounts of security data, and automate response actions to better protect organizational assets.'
  },
  {
    keywords: [
      "cyber intelligence learn", 
      "cyber intelligence curriculum"
    ],
    answer: 'The curriculum will likely cover topics such as using machine learning for malware detection, anomaly detection in network traffic, AI-powered fraud prevention systems, and automating incident response playbooks. For a full syllabus, please contact us.'
  },
  {
    keywords: [
      "cyber intelligence advance cybersecurity career", 
      "cyber intelligence career"
    ],
    answer: 'You will gain expertise in one of the fastest-growing areas of cybersecurity. These skills will make you highly valuable to employers and qualify you for advanced roles in threat intelligence and security operations.'
  },
  {
    keywords: [
      "cyber intelligence organization benefit", 
      "organizational cybersecurity benefits"
    ],
    answer: 'Your organization will benefit from a stronger security posture, faster threat detection and response times, reduced risk of financial loss from fraud, and the ability to stay ahead of evolving cyber threats.'
  },

    {
    keywords: [
      "main currency for course fees"
    ],
    answer: "The main currency for course fees is the Ugandan Shilling (UGX)."
  },
  // Leadership and Governance
  {
    keywords: [
      "who is the executive director at oiet", "executive director oiet", "who leads oiet", "who is the ceo",
      "who holds the position of executive director at oiet", "oiet director", "who is the director of oiet"
    ],
    answer: "Martin Ayebazibwe is the Executive Director."
  },
  {
    keywords: [
      "who is the advisory board lead at oiet", "advisory board lead oiet",
      "who leads oiet advisory board", "head of advisory board oiet"
    ],
    answer: "Daniel Reime is the Advisory Board Lead."
  },
  {
    keywords: [
      "name one member of oiet's advisory board", "advisory board member oiet",
      "who is on the oiet advisory board", "yasmin kayali sabra advisory board"
    ],
    answer: "Ms. Yasmin Kayali Sabra is an Advisory Board Member."
  },
  {
    keywords: [
      "name another member of the advisory board", "thomas thorsell-arntsen advisory board",
      "advisory board oiet members"
    ],
    answer: "Mr. Thomas Thorsell-Arntsen is an Advisory Board Member."
  },
  {
    keywords: [
      "can you name a third advisory board member", "kenneth oduka advisory board",
      "third advisory board member oiet"
    ],
    answer: "Mr. Kenneth Oduka serves as an Advisory Board Member."
  },
  {
    keywords: [
      "who is the fourth listed member of the advisory board", "abhishesh pal advisory board",
      "fourth advisory board member oiet"
    ],
    answer: "Dr. Abhishesh Pal is an Advisory Board Member."
  },
  {
    keywords: [
      "what does the presence of a robust advisory board indicate",
      "why is advisory board important oiet", "role of advisory board oiet"
    ],
    answer: "It indicates a strong governance structure and a commitment to expert guidance."
  },

  // Future Outlook and Expansion
  {
    keywords: [
      "what is otic technologies", "define otic technologies", "otic technologies meaning", "otic technologies company"
    ],
    answer: "Otic Technologies is the consultancy arm of the broader Otic Group ecosystem."
  },
  {
    keywords: [
      "what does otic technologies do", "otic technologies activities", "otic technologies business"
    ],
    answer: "It partners with global organizations to deploy AI solutions and create youth employment through business process outsourcing."
  },
  {
    keywords: [
      "What is OIET's strategic target for training by 2030?", "oiet 2030 training goal", "how many ugandans will oiet train"
    ],
    answer: "To train 1 million AI-competent Ugandans by 2030."
  },
  {
    keywords: [
      "What is OIET's expansion goal within Uganda?", "oiet uganda expansion", "schools oiet wants to reach"
    ],
    answer: "To reach over 4,000 secondary schools in Uganda."
  },
  {
    keywords: [
      "geographic growth plan for oiet", "oiet impact africa", "oiet africa expansion"
    ],
    answer: "To extend its impact across the African continent."
  },
  {
    keywords: [
      "key areas of innovation focus for oiet", "oiet innovation focus", "oiet technology focus"
    ],
    answer: "Artificial Intelligence and Machine Learning, Robotics and Automation, Blockchain Technology, and Data Science and Analytics."
  },

  // Company & Leadership
  {
    keywords: [
      "OIET institute leadership", "OIET leadership team"
    ],
    answer: 'The leadership team at OIET comprises experienced professionals in AI and education, dedicated to fostering innovation and excellence in training.'
  },
  {
    keywords: [
      "OIET institute emerging technologies", "what is oiet"
    ],
    answer: 'OIET is a specialized educational institution in Uganda focused on training in artificial intelligence and other emerging technologies.'
  },
  {
    keywords: [
      "oiet mission", "oiet mission statement"
    ],
    answer: 'The institute\'s mission is "Empowering Minds, Shaping the Future of AI."'
  },
  {
    keywords: [
      "oiet target audience training", "oiet training audience"
    ],
    answer: 'OIET provides hands-on training for both beginners and experienced professionals who want to excel in AI technologies.'
  },
  {
    keywords: [
      "oiet established foundation", "OIET foundation"
    ],
    answer: 'OIET was founded on the legacy of the OIET Foundation.'
  },
  {
    keywords: [
      "OIET foundation primary goal", "OIET foundation goal"
    ],
    answer: 'The OIET Foundation is a social enterprise dedicated to using technology, especially artificial intelligence, to address significant societal challenges.'
  },
  {
    keywords: [
      "founder ceo OIET foundation", "nesta paul katende"
    ],
    answer: 'The Founder & CEO of the OIET Foundation is Nesta Paul Katende.'
  },
  {
    keywords: [
      "OIET foundation ambitious goal ugandans", "1 million ugandans"
    ],
    answer: 'The foundation aims to create 1 million AI-competent Ugandans by the year 2030.'
  },
  {
    keywords: [
      "OIET foundation learners impacted", "2500 learners"
    ],
    answer: 'The foundation has already impacted over 2,500 learners.'
  },
  {
    keywords: [
      "OIET foundation online community size", "1000 members"
    ],
    answer: 'The OIET Foundation has built an online community with over 1,000 members.'
  },
  {
    keywords: [
      "OIET foundation governmental recognition", "government endorsement"
    ],
    answer: 'Yes, the Government of Uganda has formally endorsed the organization as the national AI skilling implementation partner.'
  },

  // Miscellaneous Definitions and Facts
  {
    keywords: [
      "what does AI stand for", "ai meaning", "ai definition"
    ],
    answer: "Artificial Intelligence."
  },
  {
    keywords: [
      "what does ict stand for", "ict meaning", "define ict", "ict in full",
      "ict full form", "what is ict", "ict definition"
    ],
    answer: "Information and Communications Technology."
  },
  {
    keywords: [
      "what does uce stand for", "uce meaning", "define uce", "uce", "uce definition"
    ],
    answer: "Uganda Certificate of Education."
  },
  {
    keywords: [
      "what does uace stand for", "uace meaning", "define uace", "uace in full"
    ],
    answer: "Uganda Advanced Certificate of Education."
  },
  {
    keywords: [
      "what does niisp stand for", "niisp meaning", "define niisp"
    ],
    answer: "National ICT Initiatives Support Programme."
  },
  {
    keywords: [
      "what is the main currency for course fees", "ugx currency", "course fee currency"
    ],
    answer: "The Ugandan Shilling (UGX)."
  },
  {
    keywords: [
      "what type of organization is otic foundation", "otic foundation organization type"
    ],
    answer: "A visionary social enterprise."
  },
  {
    keywords: [
      "what does real-world application focus mean", "real-world application curriculum"
    ],
    answer: "It means the training mirrors actual industry challenges."
  },
  {
    keywords: [
      "what are the benefits of partnership with national ict innovation hub", "national ict innovation hub partnership benefit"
    ],
    answer: "It provides OIET with a government-supported facility and its associated resources."
  },
  {
    keywords: [
      "does oiet offer programs for marketing professionals", "marketing programs oiet"
    ],
    answer: "Yes, the Certificate in AI for Predictive Marketing & Customer Analytics."
  },

  // services 

    {
    keywords: [
      "what services do you offer?", "which services do you offer?", "what programs do you have?", "what courses do you offer?", "what programs do you offer?", "what courses do you have?"
    ],
    answer: "We offer 6 specialized AI certificate programs: Intelligent Finance, Risk Intelligence, Predictive Marketing, Cyber Intelligence, Tax Intelligence, and Smart Insurance"
  },
  {
    keywords: [
      "what is the core aim of oiet collaborative projects", "oiet collaborative projects aim"
    ],
    answer: "To unlock individual potential and foster a culture of innovation that addresses local and global challenges."
  },
  {
    keywords: [
      "oiet role in uganda workforce development", "oiet workforce development"
    ],
    answer: "It serves as a crucial bridge between the current workforce's capabilities and the demands of an AI-driven future economy."
  },
  {
    keywords: [
      "inclusive lending program", "which program covers inclusive lending",
    ],
    answer: "This is covered in the Intelligent Finance program (Certificate in AI for Credit Scoring & Financial Decision-Making)."
  },
  {
    keywords: [
      "how does oiet achieve vision of empowered african population", "oiet vision achievement"
    ],
    answer: "By providing innovative, accessible, and sector-specific education, research, and collaborative projects."
  },

    {
    keywords: [
     "What is OIET's vision for Africa? "
    ],
    answer: "OIET envisions a future where Africa is at the forefront of global innovation, powered by a skilled and empowered population that leverages AI and emerging technologies to create transformative solutions." 
  },
  {
    keywords: [
      "otic group ecosystem", "broader ecosystem oiet operates in"
    ],
    answer: "OIET operates within the Otic Group ecosystem, which also includes Otic Technologies."
  },
// greettngs

 {
    keywords: [
      "hello", "hey", "hi", "greetings", "good morning", "good afternoon", "good evening", "how are you", "how is it going", "whats up", "whats up?", "how are you doing", "how are you today", "how is your day",
      "how is your day going", "how are you doing today", "how is everything", "how is everything going", "how are you doing today?", "how is your day going?", "how is your day today?", "how are you today?"
    ],
    answer: "Hello! How can I assist you today?"
  },


];
 
function findFaqAnswer(userMsg) {
  const msg = userMsg.toLowerCase().replace(/[^\w\s]/g, "").trim();
  let bestMatch = null;
  let bestScore = 0;
  
  for (let faq of faqResponses) {
    for (let keyword of faq.keywords) {
      const kw = keyword.toLowerCase().replace(/[^\w\s]/g, "").trim();
      
      // Exact match gets highest priority
      if (msg === kw) {
        return faq.answer;
      }
      
      // Check if the user message contains the entire keyword phrase
      if (msg.includes(kw)) {
        return faq.answer;
      }
      
      // Check if the keyword contains the user message (for shorter queries)
      if (kw.includes(msg) && msg.length > 3) {
        return faq.answer;
      }
      
      // Word-based scoring for partial matches
      const msgWords = msg.split(" ").filter(word => word.length > 2);
      const kwWords = kw.split(" ").filter(word => word.length > 2);
      
      if (msgWords.length > 0 && kwWords.length > 0) {
        let matchingWords = 0;
        for (let msgWord of msgWords) {
          for (let kwWord of kwWords) {
            if (msgWord === kwWord || msgWord.includes(kwWord) || kwWord.includes(msgWord)) {
              matchingWords++;
              break;
            }
          }
        }
        
        // Calculate score as percentage of matching words
        const score = matchingWords / Math.max(msgWords.length, kwWords.length);
        
        if (score > bestScore && score > 0.5) { // At least 50% match
          bestScore = score;
          bestMatch = faq;
        }
      }
    }
  }
  
  return bestMatch ? bestMatch.answer : null;
}

// Bot response logic with improved fallback
function getBotResponse(userMsg) {
  let botReply = findFaqAnswer(userMsg);
  
  if (!botReply) {
    const msg = userMsg.toLowerCase();
    
    if (msg.includes('course') || msg.includes('program'))  {
      botReply = "We offer 6 specialized AI certificate programs: Intelligent Finance, Risk Intelligence, Predictive Marketing, Cyber Intelligence, Tax Intelligence, and Smart Insurance. Which area interests you most?";
    } else if (msg.includes('apply') || msg.includes('join') || msg.includes('enroll')) {
      botReply = "To apply for any of our programs, contact us at info@oiet.ac.ug or WhatsApp +256 744 513045. Each course costs UGX 1,200,000 for Ugandans and runs for 6 months online. Which program interests you?";
    } else if (msg.includes('ai') || msg.includes('artificial intelligence')) {
      botReply = "OIET specializes in AI training across 6 key sectors. Our mission is 'Empowering Minds, Shaping the Future of AI' with no coding experience required. What specific AI application interests you?";
    } else {
      botReply = "Thank you for your message! I can help you with information about our AI certificate programs, fees, admission, career opportunities, and more. You can also contact our team directly at info@oiet.ac.ug or ask me another specific question!";
    }
  }
  
  typeWriterMessage('bot', botReply);
}

// show case 


// Typewriter effect for bot messages
function typeWriterMessage(sender, text, speed = 30) {
  removeTypingIndicator();
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('chatbot-message');
  const bubble = document.createElement('div');
  bubble.classList.add(sender === 'user' ? 'message-user' : 'message-bot');
  msgDiv.appendChild(bubble);
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;

  let i = 0;
  function type() {
    bubble.textContent = text.substring(0, i);
    messages.scrollTop = messages.scrollHeight;
    if (i < text.length) {
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}