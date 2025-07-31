// OIET Chatbot Widget - Full Detail FAQ Integration

// DOM Elements
const icon = document.getElementById('OIET-chatbot-icon');
const widget = document.getElementById('OIET-chatbot-widget');
const closeBtn = document.getElementById('OIET-chatbot-close');
const form = document.getElementById('OIET-chatbot-form');
const input = document.getElementById('OIET-chatbot-input');
const messages = document.getElementById('OIET-chatbot-messages');

// Show widget when icon clicked
icon.addEventListener('click', () => {
  widget.classList.remove('hidden');
  input.focus();
});

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

// Comprehensive FAQ database - all course, institute, logistics, payment, leadership details
const faqResponses = [
  // Comparative & Course Selection Questions





  
  {
    keywords: [
      "choose between intelligent finance and risk intelligence", "intelligent finance vs risk intelligence"
    ],
    answer: '"Intelligent Finance" is specifically tailored for financial professionals focused on credit scoring, lending, and customer financial behavior. "Risk Intelligence" is broader, aimed at managing various organizational risks (operational, strategic, etc.) and is suitable for roles like risk managers and business continuity planners across different industries.'
  },
  {
    keywords: [
      "difference between predictive marketing and intelligent finance marketing", "predictive marketing vs intelligent finance"
    ],
    answer: '"Predictive Marketing" focuses entirely on marketing strategies like customer segmentation, ad targeting, and campaign optimization. While "Intelligent Finance" has a marketing component, it is specifically about marketing financial products and understanding customer financial behavior for cross-selling within a bank or microfinance institution.'
  },
  {
    keywords: [
      "cybersecurity bank cyber intelligence or intelligent finance", "work in cybersecurity for bank"
    ],
    answer: 'If your role is focused on protecting the bank\'s digital assets from external threats and internal fraud, "Cyber Intelligence" is the right choice. If your role involves assessing the credit risk of borrowers and financial decision-making, "Intelligent Finance" is more suitable.'
  },
  {
    keywords: [
      "courses suitable public sector government agency"
    ],
    answer: 'Yes. The "Tax Intelligence" course is directly relevant for professionals in revenue authorities and public finance. "Cyber Intelligence" is crucial for government security agencies, and "Risk Intelligence" is valuable for public sector continuity and strategic planning.'
  },
  {
    keywords: [
      "new to field best foundational knowledge", "which course foundational"
    ],
    answer: 'Each course is designed to be foundational within its specific sector (Finance, Marketing, etc.) and explicitly states that no prior AI experience is needed. The best course for you depends entirely on the industry you are in or wish to enter.'
  },
  // Logistics, Technical & Support Questions
  {
    keywords: ["technology software need online courses", "software requirements"],
    answer: 'The provided documents do not specify the exact technology stack. However, for any online course, you will generally need a reliable internet connection, a computer (desktop or laptop), and a modern web browser. Specific software requirements, if any, would be communicated upon enrollment.'
  },
  {
    keywords: ["miss live learner support session recorded", "support sessions recorded"],
    answer: 'The prospectus does not state whether the support sessions are recorded. We highly recommend attending them live to ask questions. For a definitive answer, please contact the institute directly.'
  },
  {
    keywords: ["final exam project required certificate", "assessment method"],
    answer: 'The documents do not detail the final assessment method. Courses like these typically conclude with a final project or examination to demonstrate mastery of the concepts. You can request a detailed program brief for more information on assessment.'
  },
  {
    keywords: ["time dedicate coursework each week", "weekly commitment"],
    answer: 'While the exact weekly commitment is not specified, for a 6-month certificate program, students should typically plan for several hours of self-study, reading, and assignment work per week to succeed.'
  },
  {
    keywords: ["access course content mobile device", "mobile friendly"],
    answer: 'The information does not specify if the learning platform is mobile-friendly. While many modern online learning systems are, you should confirm this with the institute if mobile access is important to you.'
  },
  {
    keywords: ["instructors courses qualifications faculty"],
    answer: 'The provided materials do not list the specific instructors or their qualifications. For information about the faculty, please reach out to the OIET Institute at info@oiet.ac.ug.'
  },
  // Payment & Enrollment Questions
  {
    keywords: ["application deadline courses", "enrollment deadlines"],
    answer: 'The documents do not mention specific application deadlines. It\'s best to contact the admissions team via email or WhatsApp to inquire about the next intake and enrollment deadlines.'
  },
  {
    keywords: ["OIET foundation payment details", "what is OIET foundation"],
    answer: 'OIET Foundation is the name of the entity designated to receive payments for the courses via Airtel Pay, MTN MoMo, and Stanbic Bank.'
  },
  {
    keywords: ["pay course fee installments", "installment plan"],
    answer: 'The payment options listed are for the full course fee. The documents do not mention an installment plan. Please contact the institute to ask if a payment plan option is available.'
  },
  {
    keywords: ["discount group corporate enrollments", "corporate discount"],
    answer: 'The fee structure provided is for individual learners. For inquiries about potential discounts for enrolling multiple employees from the same company, you should contact the institute directly.'
  },
  {
    keywords: ["refund policy enroll cannot continue", "refund policy"],
    answer: 'The documents do not contain information about a refund policy. This is an important question to ask the administration before making a payment.'
  },
  {
    keywords: ["after payment next step access course", "after making payment"],
    answer: 'After making a payment, you should receive a confirmation and instructions on how to access the online learning platform. It is advisable to send a proof of payment to info@oiet.ac.ug or the WhatsApp number to ensure your enrollment is processed promptly.'
  },
  // Career & Application Questions
  {
    keywords: ["job titles predictive marketing certificate", "predictive marketing career"],
    answer: 'You would be a strong candidate for roles such as Digital Marketing Strategist, Marketing Analyst, Customer Insights Manager, Campaign Manager, or E-commerce Personalization Specialist.'
  },
  {
    keywords: ["intelligent finance course fintech startup", "fintech startup skills"],
    answer: 'Absolutely. The skills learned, such as AI-driven credit scoring and using alternative data, are highly relevant and crucial for FinTech startups that aim to disrupt traditional banking and lending services.'
  },
  {
    keywords: ["courses help start consulting business", "consulting business"],
    answer: 'Yes. Completing a specialized course like "Tax Intelligence" or "Predictive Marketing" can provide you with the expert knowledge and credentials to offer specialized AI consulting services in those domains.'
  },
  {
    keywords: ["ethical considerations ai addressed courses", "ai ethics"],
    answer: 'The prospectus for both the "Predictive Marketing" and "Intelligent Finance" courses explicitly lists discussing or recognizing ethical considerations, data privacy, and potential biases in AI as a key course objective.'
  },
  {
    keywords: ["small e-commerce business predictive marketing overkill", "ecommerce predictive marketing"],
    answer: 'Not at all. The principles of customer segmentation, predicting purchase likelihood, and optimizing ad spend are crucial for businesses of all sizes. This course could give you a significant competitive edge by helping you market more efficiently.'
  },
  {
    keywords: ["certificates international recognition", "international recognition"],
    answer: 'The documents do not specify the accreditation or international recognition status of the certificates. This is a question you may want to ask the OIET Institute directly, especially if you plan to work abroad.'
  },
  // In-Depth Course Content Questions
  {
    keywords: ["intelligent finance stock market prediction algorithmic trading", "stock market prediction"],
    answer: 'The course description focuses heavily on credit scoring, financial decision-making for lending, and customer analytics. It does not mention stock market prediction or trading. For specifics, please request the detailed program brief.'
  },
  {
    keywords: ["cyber intelligence build ai models scratch existing tools", "build ai models cyber intelligence"],
    answer: 'Given that no coding experience is required, the course will likely focus on how to use and interpret the output of existing AI-powered cybersecurity tools and platforms, rather than building models from scratch.'
  },
  {
    keywords: ["predictive marketing ai content creation ad copy", "ai content creation marketing"],
    answer: 'The prospectus emphasizes customer analytics, segmentation, and prediction. While it touches on delivering relevant content, it does not explicitly mention AI-powered content generation. The focus is on analytics and strategy.'
  },
  {
    keywords: ["tax intelligence international tax laws fraud detection borders", "international tax laws"],
    answer: 'The prospectus mentions the need for these skills in Uganda, suggesting a focus on the local context. Whether it extends to international tax law is not specified. You can clarify this by requesting a program brief.'
  },
  {
    keywords: ["risk intelligence quantitative financial qualitative strategic risk", "risk intelligence focus"],
    answer: 'The title "Predictive Risk Management & Strategic Resilience" suggests a blend of both. It aims to use predictive methods (often quantitative) to build strategic resilience (which involves qualitative assessment). The exact balance can be found in the detailed brief.'
  },
  {
    keywords: ["practical course real-world case studies", "case studies practical"],
    answer: 'The course descriptions imply a very practical approach, focusing on solving real-world challenges faced by businesses in Uganda. Using case studies is a common and effective method for this type of training.'
  },
  {
    keywords: ["propensity modeling predictive marketing", "what is propensity modeling"],
    answer: 'Propensity modeling is a statistical or machine learning technique used to predict the likelihood (or "propensity") of a customer to perform a certain action, such as making a purchase, clicking an ad, or unsubscribing from a service.'
  },
  {
    keywords: ["intelligent finance alternative data mobile phone credit scoring", "alternative data credit scoring"],
    answer: 'Yes, a key benefit mentioned is learning how "alternative data sources can expand responsible access to credit," which directly addresses this and is crucial for lending to underserved populations.'
  },
  // Institutional Questions
  {
    keywords: ["OIET institute accredited university", "oiet accredited university"],
    answer: 'The documents refer to the institution as an "Institute," not a university. The accreditation status is not mentioned. For official information on its registration and accreditation, you should inquire with the institute directly or check with the relevant national council for higher education.'
  },
  {
    keywords: ["courses taught english", "language instruction"],
    answer: 'The course materials are all in English, which strongly indicates that English is the language of instruction.'
  },
  {
    keywords: ["post-course support alumni network", "alumni network"],
    answer: 'The documents do not mention any post-course support or alumni network. This would be a good question to ask the administration, as an active alumni network can be very valuable for career development.'
  },
  {
    keywords: ["OIET institute other programs besides six courses", "other programs"],
    answer: 'The provided documents only detail these six AI Sector-Specific Programs. To find out about any other courses or workshops they may offer, you would need to contact them or visit their official website.'
  },
  // Program specifics - Intelligent Finance, Smart Insurance, Tax Intelligence, Predictive Marketing, Risk Intelligence, Cyber Intelligence
  {
    keywords: ["intelligent finance course about", "what is intelligent finance"],
    answer: 'This course provides intensive training on how to use Artificial Intelligence (AI) to revolutionize credit risk assessment, especially for inclusive lending, and to derive actionable insights from customer data.'
  },
  {
    keywords: ["intelligent finance course for", "who intelligent finance"],
    answer: 'It\'s ideal for financial professionals such as Loan Officers, Credit Analysts, Relationship Managers, Customer Service Managers, Branch Managers, Product Development Specialists, and Marketing Professionals within banks, microfinance institutions, and other financial services organizations in Uganda.'
  },
  {
    keywords: ["intelligent finance main goal", "goal intelligent finance"],
    answer: 'The main goal is to equip financial professionals with modern, AI-powered tools and an analytical mindset to navigate challenges in the financial sector and unlock new opportunities for growth and financial inclusion.'
  },
  {
    keywords: ["intelligent finance skills learn", "intelligent finance benefits"],
    answer: 'You will learn to interpret AI-driven credit scores, contribute to inclusive lending, analyze customer behavior, support data-driven decisions, communicate AI insights effectively, and boost your career relevance in the finance sector.'
  },
  {
    keywords: ["intelligent finance help institution", "institutional benefits"],
    answer: 'Your institution can benefit from reduced credit losses, expanded market reach, increased customer loyalty and revenue, improved operational efficiency, and a fostered data-driven culture.'
  },
  {
    keywords: ["intelligent finance key objectives", "course objectives"],
    answer: 'By the end of the course, you will be able to explain the strategic importance of AI in finance, interpret AI-generated credit scores, analyze customer transaction data, identify opportunities for personalized financial products, communicate data-driven insights, and recognize ethical considerations in AI for financial services.'
  },
  {
    keywords: ["intelligent finance ugandan financial sector challenges", "financial sector challenges"],
    answer: 'The course addresses critical challenges such as credit exclusion, high default rates, generic customer engagement, and inefficient manual processes by teaching AI-driven solutions.'
  },
  {
    keywords: ["smart insurance course", "what is smart insurance"],
    answer: 'This is a certificate program focused on applying Artificial Intelligence (AI) to enhance insurance underwriting processes and improve customer retention strategies.'
  },
  {
    keywords: ["smart insurance enroll", "who smart insurance"],
    answer: 'This course is designed for professionals in the insurance industry, including underwriters, claims analysts, risk managers, customer retention specialists, and business development managers.'
  },
  {
    keywords: ["smart insurance primary objective", "smart insurance goal"],
    answer: 'The primary objective is to empower insurance professionals to leverage AI for more accurate risk assessment, personalized policy pricing, and proactive customer retention, thereby gaining a competitive edge.'
  },
  {
    keywords: ["smart insurance topics covered", "smart insurance content"],
    answer: 'While the detailed prospectus is not available, you can expect to cover AI applications in risk assessment, fraud detection, personalized insurance products, and customer churn prediction. For a detailed brief, please contact us directly.'
  },
  {
    keywords: ["smart insurance career benefit", "smart insurance career"],
    answer: 'You will gain specialized skills in applying cutting-edge AI to the insurance sector, making you a valuable asset to any modern insurance company and opening up new career opportunities.'
  },
  {
    keywords: ["smart insurance company benefits", "insurance company benefits"],
    answer: 'Companies can expect improved underwriting accuracy, reduced fraudulent claims, enhanced customer satisfaction and retention, and a more data-driven approach to strategic decisions.'
  },
  {
    keywords: ["tax intelligence course about", "what is tax intelligence"],
    answer: 'This certificate program focuses on the application of Artificial Intelligence (AI) for detecting tax fraud, optimizing audit processes, and enhancing compliance analytics.'
  },
  {
    keywords: ["tax intelligence target audience", "who tax intelligence"],
    answer: 'This course is aimed at tax professionals, auditors, compliance officers, financial analysts, and government revenue authority personnel.'
  },
  {
    keywords: ["tax intelligence main purpose", "tax intelligence purpose"],
    answer: 'The course aims to equip professionals with the skills to use AI to identify patterns of tax evasion, streamline audit selections, and improve overall tax compliance, making the process more efficient and effective.'
  },
  {
    keywords: ["tax intelligence learn", "tax intelligence curriculum"],
    answer: 'You will likely learn about using AI for anomaly detection in tax filings, predictive modeling for audit selection, risk scoring of taxpayers, and analytics for ensuring regulatory compliance. For a detailed outline, please request a program brief.'
  },
  {
    keywords: ["tax intelligence career help", "tax intelligence career benefits"],
    answer: 'By gaining expertise in AI applications for tax, you will be at the forefront of a major technological shift in the industry, enhancing your professional profile and career prospects in both public and private sectors.'
  },
  {
    keywords: ["tax intelligence benefits authorities consulting firms", "tax authorities benefits"],
    answer: 'These organizations can benefit from increased efficiency in audits, higher rates of fraud detection, improved resource allocation, and a more robust and data-driven compliance framework.'
  },
  {
    keywords: ["predictive marketing course about", "what is predictive marketing"],
    answer: 'This course empowers marketing and advertising professionals to use the power of Artificial Intelligence (AI) to understand and predict consumer actions, optimize campaign performance, and execute highly effective digital marketing initiatives.'
  },
  {
    keywords: ["predictive marketing attend", "who predictive marketing"],
    answer: 'The course is designed for Marketing Managers, Digital Marketing Specialists, Advertising Professionals, Brand Managers, E-commerce Managers, Marketing Analysts, and anyone involved in digital marketing strategy.'
  },
  {
    keywords: ["predictive marketing problem solve ugandan businesses", "marketing challenges uganda"],
    answer: 'It addresses significant marketing challenges such as inefficient ad spend, generic messaging, unpredictable campaign performance, customer data overload, and intense competitive pressure.'
  },
  {
    keywords: ["predictive marketing key benefits participants", "predictive marketing benefits"],
    answer: 'You will learn to master advanced customer segmentation, predict customer actions (propensity modeling), forecast marketing performance, optimize campaigns for ROI, enhance personalization, and advance your career in digital marketing.'
  },
  {
    keywords: ["predictive marketing company benefit", "company marketing benefits"],
    answer: 'Your company can achieve increased marketing ROI, deeper customer engagement, a proactive marketing strategy, a competitive advantage, and can foster a data-driven marketing culture.'
  },
  {
    keywords: ["predictive marketing able to do end course", "predictive marketing outcomes"],
    answer: 'You\'ll be able to explain how AI is used for customer segmentation, interpret propensity models, use predictive analytics to forecast campaign performance, identify personalization opportunities, and translate AI insights into actionable marketing strategies.'
  },
  {
    keywords: ["predictive marketing ethical considerations", "marketing ethics"],
    answer: 'Yes, a key objective is to discuss ethical considerations related to AI in marketing, including data privacy and bias.'
  },
  {
    keywords: ["risk intelligence course", "what is risk intelligence"],
    answer: 'This is a certificate program that teaches how to apply Artificial Intelligence (AI) to predict and manage risks, thereby building strategic resilience for an organization.'
  },
  {
    keywords: ["risk intelligence intended for", "who risk intelligence"],
    answer: 'It is designed for risk management professionals, business continuity planners, strategic planners, financial analysts, and any manager responsible for organizational resilience and foresight.'
  },
  {
    keywords: ["risk intelligence core aim", "risk intelligence aim"],
    answer: 'The course aims to equip professionals with the ability to use AI for identifying potential risks, forecasting their impact, and developing proactive strategies to mitigate them, ensuring the organization can withstand and adapt to disruptions.'
  },
  {
    keywords: ["risk intelligence topics covered", "risk intelligence curriculum"],
    answer: 'You can expect the curriculum to cover AI applications in operational risk, financial risk, supply chain risk, and strategic risk management. To get a detailed list of topics, please request a program brief.'
  },
  {
    keywords: ["risk intelligence career benefits", "risk intelligence career"],
    answer: 'You will gain highly sought-after skills in predictive risk analytics, setting you apart as a forward-thinking risk professional and opening doors to senior roles in risk management and strategy.'
  },
  {
    keywords: ["risk intelligence benefit organization", "organizational benefits risk"],
    answer: 'An organization can build a more robust and resilient operation by proactively identifying and mitigating risks, leading to reduced losses, improved strategic planning, and a stronger competitive position.'
  },
  {
    keywords: ["cyber intelligence course about", "what is cyber intelligence"],
    answer: 'This certificate course is focused on using Artificial Intelligence (AI) for advanced fraud detection, cyber threat analysis, and effective incident response.'
  },
  {
    keywords: ["cyber intelligence enroll", "who cyber intelligence"],
    answer: 'The course is ideal for cybersecurity analysts, IT auditors, fraud investigators, information security managers, and any IT professional looking to specialize in AI-driven security.'
  },
  {
    keywords: ["How can I ask questions during the course? "],
    answer: 'The bi-weekly learner support sessions are the designated times to ask questions, seek guidance, and interact with instructors and peers. You can also reach out via email or WhatsApp for additional support.'
  },
  {
    keywords: ["cyber intelligence main objective", "cyber intelligence objective"],
    answer: 'The primary goal is to empower cybersecurity professionals to use AI to proactively detect threats, analyze vast amounts of security data, and automate response actions to better protect organizational assets.'
  },
  {
    keywords: ["cyber intelligence learn", "cyber intelligence curriculum"],
    answer: 'The curriculum will likely cover topics such as using machine learning for malware detection, anomaly detection in network traffic, AI-powered fraud prevention systems, and automating incident response playbooks. For a full syllabus, please contact us.'
  },
  {
    keywords: ["cyber intelligence advance cybersecurity career", "cyber intelligence career"],
    answer: 'You will gain expertise in one of the fastest-growing areas of cybersecurity. These skills will make you highly valuable to employers and qualify you for advanced roles in threat intelligence and security operations.'
  },
  {
    keywords: ["cyber intelligence organization benefit", "organizational cybersecurity benefits"],
    answer: 'Your organization will benefit from a stronger security posture, faster threat detection and response times, reduced risk of financial loss from fraud, and the ability to stay ahead of evolving cyber threats.'
  },
  // Company & Leadership

  {
    keywords: ["OIET institute leadership", "OIET leadership team"],
    answer: 'The leadership team at OIET comprises experienced professionals in AI and education, dedicated to fostering innovation and excellence in training.'
  },
  {
    keywords: ["OIET institute emerging technologies", "what is oiet"],
    answer: 'OIET is a specialized educational institution in Uganda focused on training in artificial intelligence and other emerging technologies.'
  },
  {
    keywords: ["oiet mission", "oiet mission statement"],
    answer: 'The institute\'s mission is "Empowering Minds, Shaping the Future of AI."'
  },
  {
    keywords: ["oiet target audience training", "oiet training audience"],
    answer: 'OIET provides hands-on training for both beginners and experienced professionals who want to excel in AI technologies.'
  },
  {
    keywords: ["oiet established foundation", "OIET foundation"],
    answer: 'OIET was founded on the legacy of the OIET Foundation.'
  },
  {
    keywords: ["OIET foundation primary goal", "OIET foundation goal"],
    answer: 'The OIET Foundation is a social enterprise dedicated to using technology, especially artificial intelligence, to address significant societal challenges.'
  },
  {
    keywords: ["founder ceo OIET foundation", "nesta paul katende"],
    answer: 'The Founder & CEO of the OIET Foundation is Nesta Paul Katende.'
  },

  {
    keywords: ["What are the benefits for an insurance company that sponsors its employees for this course?"],
    answer: 'Companies can expect improved underwriting accuracy, reduced fraudulent claims, enhanced customer satisfaction and retention, and a more data-driven approach to strategic decisions.'
  },
  {
    keywords: ["OIET foundation ambitious goal ugandans", "1 million ugandans"],
    answer: 'The foundation aims to create 1 million AI-competent Ugandans by the year 2030.'
  },
  {
    keywords: ["OIET foundation learners impacted", "2500 learners"],
    answer: 'The foundation has already impacted over 2,500 learners.'
  },
  {
    keywords: ["OIET foundation online community size", "1000 members"],
    answer: 'The OIET Foundation has built an online community with over 1,000 members.'
  },
  {
    keywords: ["OIET foundation governmental recognition", "government endorsement"],
    answer: 'Yes, the Government of Uganda has formally endorsed the organization as the national AI skilling implementation partner.'
  },
  // General course info
  {
    keywords: ["duration", "how long", "months", "6 months", "course length"],
    answer: "Each OIET certificate program runs for 6 months and is delivered 100% online."
  },
  {
    keywords: ["support sessions", "learner support", "when support"],
    answer: "Learner support sessions are held on Tuesdays at 7:30 PM and Saturdays at 10:00 AM."
  },
  {
    keywords: ["cost", "fee", "price", "payment", "how much"],
    answer: "Each course costs UGX 1,200,000 for Ugandans and UGX 1,800,000 for international students. Payment is via Airtel Pay (4379529), MTN MoMo (720504), and Stanbic Bank - Account: OIET Foundation (9030025213237 UGX)."
  },
{
  keywords: ["What type of organization is the Otic Foundation described as? ", "Otic Foundation type"],
  answer:  "A visionary social enterprise."
},

  {
    keywords: ["certificate", "graduation", "certification"],
    answer: "Yes, you will receive a certificate upon successful completion of your chosen program."
  },
  {
    keywords: ["prior experience", "coding experience", "ai experience"],
    answer: "No, prior AI development or coding experience is required for any of the AI Sector-Specific Programs."
  },
  // Contact info
  {
    keywords: ["contact", "phone", "email", "address", "whatsapp"],
    answer: "You can reach OIET at +256 756722263 or +256 706867547, email info@oiet.ac.ug, or visit Innovation Hub, Nakawa, Kampala. WhatsApp: +256 744 513045."
  },
  // Greetings
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    answer: "Hello! 👋 Welcome to OIET - OIET Institute of Emerging Technologies. How can I assist you today?"
  },
  {
    keywords: ["help", "support", "assist"],
    answer: "I'm here to help you learn about OIET's AI certificate programs! You can ask me about course content, fees, duration, career opportunities, admission requirements, or anything else about our programs."
  }

  
];

// Add these entries to your faqResponses array

// Leadership and Governance
faqResponses.push(
  {
    keywords: [
      "who is the executive director at oiet",
      "executive director oiet",
      "who leads oiet",
      "who holds the position of executive director at oiet",
      "oiet director",
      "who is the director of oiet"
    ],
    answer: "Martin Ayebazibwe is the Executive Director."
  },
  {
    keywords: [
      "who is the advisory board lead at oiet",
      "advisory board lead oiet",
      "who leads oiet advisory board",
      "head of advisory board oiet"
    ],
    answer: "Daniel Reime is the Advisory Board Lead."
  },
  {
    keywords: [
      "name one member of oiet's advisory board",
      "advisory board member oiet",
      "who is on the oiet advisory board",
      "yasmin kayali sabra advisory board"
    ],
    answer: "Ms. Yasmin Kayali Sabra is an Advisory Board Member."
  },
  {
    keywords: [
      "name another member of the advisory board",
      "thomas thorsell-arntsen advisory board",
      "advisory board oiet members"
    ],
    answer: "Mr. Thomas Thorsell-Arntsen is an Advisory Board Member."
  },
  {
    keywords: [
      "can you name a third advisory board member",
      "kenneth oduka advisory board",
      "third advisory board member oiet"
    ],
    answer: "Mr. Kenneth Oduka serves as an Advisory Board Member."
  },
  {
    keywords: [
      "who is the fourth listed member of the advisory board",
      "abhishesh pal advisory board",
      "fourth advisory board member oiet"
    ],
    answer: "Dr. Abhishesh Pal is an Advisory Board Member."
  },
  {
    keywords: [
      "what does the presence of a robust advisory board indicate",
      "why is advisory board important oiet",
      "role of advisory board oiet"
    ],
    answer: "It indicates a strong governance structure and a commitment to expert guidance."
  }
);

// Future Outlook and Expansion
faqResponses.push(
  {
    keywords: [
      "what is otic technologies",
      "define otic technologies",
      "otic technologies meaning",
      "otic technologies company"
    ],
    answer: "Otic Technologies is the consultancy arm of the broader Otic Group ecosystem."
  },
  {
    keywords: [
      "what does otic technologies do",
      "otic technologies activities",
      "otic technologies business"
    ],
    answer: "It partners with global organizations to deploy AI solutions and create youth employment through business process outsourcing."
  },
  {
    keywords: [
      "oiet strategic target for training by 2030",
      "oiet 2030 training goal",
      "how many ugandans will oiet train"
    ],
    answer: "To train 1 million AI-competent Ugandans by 2030."
  },
  {
    keywords: [
      "oiet expansion goal within uganda",
      "oiet uganda expansion",
      "schools oiet wants to reach"
    ],
    answer: "To reach over 4,000 secondary schools in Uganda."
  },
  {
    keywords: [
      "geographic growth plan for oiet",
      "oiet impact africa",
      "oiet africa expansion"
    ],
    answer: "To extend its impact across the African continent."
  },
  {
    keywords: [
      "key areas of innovation focus for oiet",
      "oiet innovation focus",
      "oiet technology focus"
    ],
    answer: "Artificial Intelligence and Machine Learning, Robotics and Automation, Blockchain Technology, and Data Science and Analytics."
  }
);

// Miscellaneous
faqResponses.push(
  {
    keywords: [
      "what does AI stand for",
      "AI"

    ],
    answer: "Artificial Intelligence."
  },
  {
    keywords: [
      "what does ict stand for",
      "ict meaning",
      "define ict",
      "ict in  full",
      "ict full form",
      "what is ict",
      "ict definition",
      "ict"
    ],
    answer: "Information and Communications Technology."
  },
  {
    keywords: [
      "what does uce stand for",
      "uce meaning",
      "define uce"
    ],
    answer: "Uganda Certificate of Education."
  },
  {
    keywords: [
      "what does UACE stand for",
      "UACE meaning",
      "define UACE",
      "write UACE in full",
      "UACE full form",
      "UACE",

    ],
    answer: "Uganda Advanced Certificate of Education."
  },
  {
    keywords: [
      "what does niisp stand for",
      "niisp meaning",
      "define niisp", 
      "niisp full form",
      "write niisp in full",
      "niisp",
      "what does niisp mean"

    ],
    answer: "National ICT Initiatives Support Programme."
  },
  {
    keywords: [
      "main currency mentioned for course fees",
      "currency for oiet fees",
      "fees currency oiet",
      "What is the main currency mentioned for course fees?",
      "currency"

    ],
    answer: "The Ugandan Shilling (UGX)."
  },
  {
    keywords: [
      "what type of organization is otic foundation",
      "otic foundation organization type",
      "describe otic foundation"
    ],
    answer: "A visionary social enterprise."
  },
  {
    keywords: [
      "what does real-world application focus of curriculum mean",
      "real-world application oiet",
      "real world focus oiet"
    ],
    answer: "It means the training mirrors actual industry challenges."
  },
  {
    keywords: [
      "what is the benefit of the partnership with the National ICT Innovation Hub?",
      "national ict innovation hub partnership benefits"
      
    ],
    answer: "It provides OIET with a government-supported facility and its associated resources."
  },
  {
    keywords: [
      "does oiet offer programs for professionals in marketing",
      "oiet marketing program",
      "marketing professionals oiet"
    ],
    answer: "Yes, the Certificate in AI for Predictive Marketing & Customer Analytics."
  },
  {
    keywords: [
      "What is the core aim of OIET's collaborative projects?",
      "oiet collaborative projects goal",
      "collaborative projects oiet"
    ],
    answer: "To unlock individual potential and foster a culture of innovation that addresses local and global challenges."
  },
  {
    keywords: [
      "role of oiet in uganda's workforce development",
      "oiet workforce development",
      "how does oiet help uganda workforce",
      "What role does OIET play in Uganda's workforce development?"
    ],
    answer: "It serves as a crucial bridge between the current workforce's capabilities and the demands of an AI-driven future economy."
  },

   
  {
    keywords: [
     
      "The document mentions inclusive lending as a focus. In which program is this covered?"

    ],
    answer: "This is covered in the Intelligent Finance program (Certificate in AI for Credit Scoring & Financial Decision-Making)."
  },
  {
    keywords: [
      "how does oiet achieve vision of empowered african population",
      "oiet vision education research",
      "oiet vision empowerment"
    ],
    answer: "By providing innovative, accessible, and sector-specific education, research, and collaborative projects."
  },
  {
    keywords: [
      "broader ecosystem in which oiet operates",
      "otic group ecosystem",
      "oiet ecosystem"
    ],
    answer: "OIET operates within the Otic Group ecosystem, which also includes Otic Technologies."
  }
);

// Enhanced matching function for more precise results
function findFaqAnswer(userMsg) {
  const msg = userMsg.toLowerCase().replace(/[^\w\s]/g, "").trim();
  let bestMatch = null;
  let bestScore = 0;
  for (let faq of faqResponses) {
    for (let keyword of faq.keywords) {
      const kw = keyword.toLowerCase().replace(/[^\w\s]/g, "").trim();
      // Exact match first
      if (msg === kw) return faq.answer;
      // Partial word overlap
      const msgWords = msg.split(" ");
      const kwWords = kw.split(" ");
      let score = kwWords.filter(word => msgWords.includes(word)).length;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
      // Substring contains fallback
      if (msg.includes(kw) || kw.includes(msg)) {
        // Return immediately if strong partial match
        return faq.answer;
      }
    }
  }
  return bestScore > 1 ? bestMatch.answer : null; // Lowered threshold
}

// Bot response logic with exact FAQ matching and robust fallback
function getBotResponse(userMsg) {
  let botReply = findFaqAnswer(userMsg);

  if (!botReply) {
    const msg = userMsg.toLowerCase().trim();

    // Direct queries for specific programs (e.g. "Does OIET offer any programs for professionals in marketing?")
    // Already handled by findFaqAnswer if your FAQ database is comprehensive.

    // Direct queries for a list of all programs/courses
    const listQueries = [
      "which courses",
      "what courses",
      "which programs",
      "what programs",
      "do you offer any courses",
      "do you offer any programs",
      "does the company offer any courses",
      "does the company offer any programs",
      "do you have any courses",
      "do you have any programs",
      "list courses",
      "list programs",
      "available courses",
      "available programs"
    ];

    // Only trigger the list if the entire message is a generic, non-specific query
    const exactListQuery = listQueries.some(q => msg === q);

    if (exactListQuery) {
      botReply = [
        "We offer the following specialized AI certificate programs:",
        "",
        "• Intelligent Finance",
        "• Risk Intelligence",
        "• Predictive Marketing",
        "• Cyber Intelligence",
        "• Tax Intelligence",
        "• Smart Insurance",
        "",
        "Which area interests you most?"
      ].join('\n');
    } else if (
      (/apply|join/.test(msg) &&
        !/apply for scholarship|join zoom|join support/.test(msg))
    ) {
      botReply = "To apply for any of our programs, contact us at info@oiet.ac.ug or WhatsApp +256 744 513045. Each course costs UGX 1,200,000 for Ugandans and runs for 6 months online. Which program interests you?";
    } 
else {
      botReply = "Thank you for your message! I can help you with information about our AI certificate programs, fees, admission, career opportunities, and more. You can also contact our team directly at info@oiet.ac.ug or ask me another specific question!";
    }
  }

  typeWriterMessage('bot', botReply);
}
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