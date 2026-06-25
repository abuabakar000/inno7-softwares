import { PenTool, Monitor, Code2, Settings, Users, Database, Percent, Globe, Briefcase, Rocket, Shield, Activity, Cpu, Layout, Smartphone, Lock, Eye } from 'lucide-react';

export type ServiceCapability = {
  icon: string;
  title: string;
  description: string;
};

export type ServiceStep = {
  num: string;
  title: string;
  description: string;
};

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type ServiceData = {
  slug: string;
  title: string;
  heroImage: string;
  heroDescription: string;
  specializationHeading: string;
  specializationText: string;
  ctaText: string;
  whySectionTitle: string;
  steps: ServiceStep[];
  capabilities: ServiceCapability[];
  project: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tag: string;
    href?: string;
  };
  faqs: ServiceFAQ[];
};

export const SERVICES_DATA: Record<string, ServiceData> = {
  'ai-agents-chatbot': {
    slug: 'ai-agents-chatbot',
    title: 'AI Agents &\nChatbots',
    heroImage: '/images/services/ai-chatbots.png',
    heroDescription: 'We empower your business with autonomous AI agents and intelligent chatbots that handle complex interactions, lead qualification, and customer support with human-level precision.',
    specializationHeading: 'Autonomous Agent Engineering and Conversational AI Case Studies',
    specializationText: 'Our agency, Inex Labs, specializes in conversational architecture, creating bespoke AI agents that integrate deeply with your CRM and internal databases. We build solutions tailored to your operational goals to effectively automate customer touchpoints, reduce overhead, and provide 24/7 high-fidelity service. Our goal is to ensure your customer experience becomes a powerful competitive advantage.',
    ctaText: 'DEPLOY YOUR AGENT',
    whySectionTitle: 'TRANSFORMING INTERACTION WITH CLOUD-NATIVE AI',
    steps: [
      { num: '01', title: 'Intent Mapping', description: 'We map out your customer journeys and identify key points where AI agents can provide immediate value and context-aware assistance.' },
      { num: '02', title: 'Knowledge Injection', description: 'Your agents are trained on your specific documentation, brand voice, and business rules, ensuring every response is accurate and compliant.' },
      { num: '03', title: 'Seamless Handoff', description: 'When complex issues arise, our agents gracefully escalate to your human team, providing a full transcript and context for a perfect transition.' },
      { num: '04', title: 'Continuous Learning', description: 'We implement feedback loops where every interaction helps refine the model, improving accuracy and empathetic resonance over time.' }
    ],
    capabilities: [
      { icon: 'Cpu', title: 'Autonomous\nAgents', description: 'Reason-based agents that can perform multi-step tasks across different software platforms using advanced planning algorithms.' },
      { icon: 'Users', title: 'Lead Qualification', description: 'Automated 24/7 screening and qualification of inbound prospects, feeding high-intent leads directly into your sales pipeline.' },
      { icon: 'Activity', title: 'Analytics Dashboard', description: 'Deep visibility into agent performance, conversation sentiment, and common user bottlenecks for data-driven optimization.' },
      { icon: 'Monitor', title: 'Omnichannel Presence', description: 'Deploy your agents across Web, WhatsApp, Slack, and Discord with a single unified backend for consistent brand logic.' }
    ],
    project: {
      title: 'RESUME AI',
      subtitle: 'AI AGENT',
      description: 'A custom-trained AI platform that automates complex resume building with high-fidelity outputs. We integrated advanced parsing logic and LLM-driven suggestions to ensure every user gets a competitive edge in their job search. The system handles massive datasets with millisecond latency, providing a seamless experience for global users.',
      image: '/images/related/resume-ai-thumb.png',
      tag: 'AI INTEGRATION',
      href: 'https://resume-ai-web-delta.vercel.app/'
    },
    faqs: [
      { q: "How secure is my company data?", a: "We use private VPC environments and never train public models on your proprietary data. Your information remains yours alone." },
      { q: "Can the chatbot book appointments?", a: "Yes, we build deep integrations with scheduling software like Calendly, Acuity, and custom enterprise calendars." },
      { q: "Does it understand multiple languages?", a: "Absolutely. Our agents support over 50 languages with native-level proficiency and cultural nuance." },
      { q: "What happens if the AI makes a mistake?", a: "We implement 'guardrails' and human-in-the-loop systems to ensure sensitive inquiries are always handled with the necessary oversight." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  },
  'branding-design': {
    slug: 'branding-design',
    title: 'Branding and\ndesign',
    heroImage: '/images/services/branding.png',
    heroDescription: 'We study the site, find all the problem areas and determine how to eliminate them. We analyze competitors in search results and their strategies. We conduct an audit of the available traffic to the site in terms of sources and effectiveness in search engines.',
    specializationHeading: 'Brand Identity and Design Strategy Case Studies for Clients',
    specializationText: 'Our agency, Inex Labs, specializes in brand design development, creating brand styles, and providing full-service branding. We create projects tailored to your goals to effectively compete in the market, enhance your company image, and attract new customers. Our goal is to ensure that the outcome becomes a powerful catalyst for scaling and further business growth.',
    ctaText: 'DISCUSS THE PROJECT',
    whySectionTitle: 'WHY DO COMPANIES NEED BRAND IDENTITY?',
    steps: [
      { num: '01', title: 'Brand Discovery and Research', description: 'In this initial phase, the design team conducts in-depth research to understand the client\'s brand, its values, target audience, and market positioning. They analyze competitors and industry trends to gather insights and inspiration.' },
      { num: '02', title: 'Brand Identity Design', description: 'This process involves creating the visual elements that represent the brand\'s identity. The design team works on crafting the logo, color palette, typography, and other visual assets. The goal is to establish a cohesive and memorable brand identity that reflects the brand\'s personality and resonates with the target audience.' },
      { num: '03', title: 'Brand Collateral Creation', description: 'Brand collateral refers to various materials that reinforce the brand\'s identity across different touchpoints. This process includes designing business cards, letterheads, brochures, packaging, and other promotional materials.' },
      { num: '04', title: 'Brand Guidelines Development', description: 'Brand guidelines serve as a comprehensive document that outlines how the brand should be presented consistently across all channels. This process involves creating guidelines for logo usage, color specifications, typography rules, image styles, and tone of voice.' }
    ],
    capabilities: [
      { icon: 'Rocket', title: 'Brand\nResearch', description: 'Discover an award-winning team in the USA. Our team of experts uses advanced technologies for software development, web development, branding, digital marketing, and e-commerce. We are inspired to work for the benefit of our clients.' },
      { icon: 'Eye', title: 'Brand Book Development and Preparation', description: 'At this stage, we prepare the design of the brand book, which forms the individual identity of the company and the brand as a whole. Our design team carefully selects the color palette, typography, and other visual assets. This process requires an understanding of how a potential client perceives the brand.' },
      { icon: 'Layout', title: 'Creation of Additional Materials', description: 'Brand materials are an extension of the brand identity, yet they enhance brand recognition. These include business cards, brochures, letterheads, flyers, badges, packaging, promotional materials, and more. All of these are tailored to the brand book to create a cohesive and recognizable brand identity.' },
      { icon: 'Monitor', title: 'Page Scroll Effect', description: 'Our projects shape not only the urban environment but also a lifestyle – bold, modern, and inspiring new achievements. We implement smooth, cinematic transitions that guide the user through the brand story with every scroll.' }
    ],
    project: {
      title: 'PORTFOLIO SITES',
      subtitle: 'BRANDING',
      description: 'Creation of a premium visual identity for high-end portfolio websites. Our approach combined minimalist typography with bold, high-contrast aesthetics to elevate the brand\'s digital presence. We focused on building a modular design system that remains consistent across all touchpoints, from social media to core web experiences.',
      image: '/images/related/portfolio-sites-thumb.png',
      tag: 'VISUAL IDENTITY',
      href: '#'
    },
    faqs: [
      { q: "What is included in a brand identity package?", a: "A full package includes your logo, typography system, color palette, and comprehensive visual guidelines." },
      { q: "Will I own the full copyrights to the designs?", a: "Absolutely. Once the project is finalized and delivered, you own 100% of the copyrights to all assets." },
      { q: "How many design concepts do you provide?", a: "We typically present 3 distinct visual directions, then refine the chosen one through structured feedback rounds." },
      { q: "How do you ensure the brand works across digital platforms?", a: "We test all visual elements across various screens and social platforms to ensure perfect readability and impact." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  },
  'ai-integration': {
    slug: 'ai-integration',
    title: 'AI\nIntegration',
    heroImage: '/images/services/ai-integration.png',
    heroDescription: 'We bridge the gap between raw data and intelligent action, embedding state-of-the-art AI into your existing workflows to drive exponential efficiency and competitive advantage.',
    specializationHeading: 'Custom RAG Pipelines and Enterprise AI Engineering Case Studies',
    specializationText: 'Our agency, Inex Labs, specializes in AI integration development, creating bespoke LLM-driven systems and providing full-service automation. We build architectures tailored to your operational goals to effectively leverage private datasets, enhance decision-making, and drive growth. Our goal is to ensure your infrastructure becomes a powerful, self-evolving engine.',
    ctaText: 'INTEGRATE AI',
    whySectionTitle: 'TRANSFORMING LOGIC WITH ENTERPRISE-GRADE AI',
    steps: [
      { num: '01', title: 'Knowledge Audit', description: 'We identify high-impact processes where AI can eliminate bottlenecks and extract value from your proprietary data silos.' },
      { num: '02', title: 'Pipeline Engineering', description: 'We build secure, high-speed data ingestion flows (RAG) that allow LLMs to reason over your specific business context in real-time.' },
      { num: '03', title: 'Model Orchestration', description: 'Our engineers combine best-in-class models (GPT-4, Claude, Llama 3) to create multi-agent systems that handle complex, multi-step tasks.' },
      { num: '04', title: 'Native Deployment', description: 'We seamlessly embed AI capabilities into your existing web and mobile environments, ensuring a cohesive and intuitive user experience.' }
    ],
    capabilities: [
      { icon: 'Cpu', title: 'Enterprise\nRAG', description: 'Built-in knowledge retrieval systems that allow AI to answer complex queries based purely on your internal documents and databases.' },
      { icon: 'Activity', title: 'Predictive Insights', description: 'We deploy deep learning models that analyze historical patterns to forecast churn, demand, and high-value customer behaviors.' },
      { icon: 'Monitor', title: 'Multi-modal AI', description: 'Integrating computer vision and natural language processing to enable AI that can see, hear, and understand your business world.' },
      { icon: 'Shield', title: 'Private LLMs', description: 'Deploying sovereign, open-source models within your private cloud to ensure sensitive data never leaves your secure perimeter.' }
    ],
    project: {
      title: 'RESUME AI',
      subtitle: 'AI INTEGRATION',
      description: 'An end-to-end AI integration for a high-volume recruitment platform. We implemented a custom RAG pipeline that allows recruiters to query massive resume databases using natural language. The system provides real-time matching and scoring with 95% accuracy, significantly reducing time-to-hire for global enterprises.',
      image: '/images/related/resume-ai-thumb.png',
      tag: 'AI ARCHITECTURE',
      href: 'https://resume-ai-web-delta.vercel.app/'
    },
    faqs: [
      { q: "Can AI work with our existing legacy systems?", a: "Yes, we specialize in building bridge APIs that allow modern AI models to interact with and extract value from legacy data structures." },
      { q: "Is our proprietary data used to train public models?", a: "Never. We use private enterprise endpoints and local model deployments to ensure your data stays strictly under your control." },
      { q: "How do you handle AI hallucinations?", a: "We implement rigorous 'grounding' techniques (RAG) and automated verification layers to ensure outputs are based on factual business data." },
      { q: "What is the typical ROI for an AI integration?", a: "Most clients see a significant reduction in operational costs and 2-3x efficiency gains in data-heavy departments within the first quarter." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  },
  'automated-sms': {
    slug: 'automated-sms',
    title: 'Automated\nSMS',
    heroImage: '/images/services/crm.png',
    heroDescription: 'We design and implement custom automated SMS workflows that engage your customers instantly – from missed-call auto-responders to review generation and scheduling reminders.',
    specializationHeading: 'Custom SMS Automation and Messaging Case Studies for Clients',
    specializationText: 'Our agency, Inex Labs, specializes in conversational SMS architecture, building automated messaging flows and text pipelines. We design systems that turn missed opportunities into booked jobs, gather 5-star Google reviews on autopilot, and streamline your customer communication. Our goal is to ensure your business never misses a customer touchpoint.',
    ctaText: 'AUTOMATE YOUR TEXTS',
    whySectionTitle: 'WHY DOES YOUR BUSINESS NEED AUTOMATED SMS?',
    steps: [
      { num: '01', title: 'Instant Engagement', description: 'Respond to customers within seconds of a missed call, capturing leads before they dial your competitors.' },
      { num: '02', title: 'Seamless Scheduling', description: 'Automate booking confirmations, calendar updates, and appointment reminders to drastically reduce no-shows.' },
      { num: '03', title: 'Review Generation', description: 'Send automated feedback requests immediately after job completion to boost your 5-star Google reviews on autopilot.' },
      { num: '04', title: 'Scale Operations', description: 'Broadcast promotions, send updates, and manage two-way customer conversations efficiently without manual labor.' }
    ],
    capabilities: [
      { icon: 'Smartphone', title: 'Missed-Call Textback', description: 'Instantly send a text response to missed calls, capturing hot leads before they contact someone else.' },
      { icon: 'Settings', title: 'Appointment Reminders', description: 'Automated SMS dispatch for scheduling, confirmations, and reminders, eliminating no-shows without manual effort.' },
      { icon: 'Users', title: 'Google Review SMS', description: 'Send automated text messages right after service delivery, prompting customers to leave 5-star Google reviews in one click.' },
      { icon: 'Activity', title: 'Conversational Flows', description: 'Two-way text automation that qualifies leads, answers FAQs, and forwards high-value prospects to your team.' }
    ],
    project: {
      title: 'AUTOFLOW',
      subtitle: 'SMS Automation Platform',
      description: 'A unified automated SMS dispatch engine integrated with business telephony. The platform instantly triggers customized SMS responses for missed calls, routes scheduler links, and deploys review requests immediately upon job completion, helping service businesses capture 30% more leads.',
      image: '/images/related/saasforge-thumb.png',
      tag: 'AUTOMATION',
      href: '#'
    },
    faqs: [
      { q: "How does the missed-call auto SMS work?", a: "When a customer calls your business and no one answers, our system instantly sends a personalized text message (e.g., \"Sorry we missed you! How can we help?\") to keep the customer engaged." },
      { q: "Can we integrate this with our existing CRM and calendar?", a: "Yes, we integrate with Google Calendar, Outlook, HubSpot, Salesforce, and custom database setups to sync scheduling links and customer contact data seamlessly." },
      { q: "How do Google review requests get sent?", a: "The moment a job status is updated to completed in your system, our automation triggers a friendly text message to the client containing your direct Google Review link." },
      { q: "Are these SMS messages customizable?", a: "Absolutely. You have full control over the wording, timing, and variables (like client name, service type, and price) used in every automated text." },
      { q: "What is the typical timeline for setup?", a: "We can design, configure, and launch custom SMS automation flows in as little as 2 to 3 weeks, ensuring complete compliance with telephony standards (10DLC)." }
    ]
  },
  'booking-systems': {
    slug: 'booking-systems',
    title: 'Booking\nSystems',
    heroImage: '/images/services/ecom.png',
    heroDescription: 'We build intelligent booking platforms and customer schedulers integrated with automated post-booking SMS confirmations, reminders, and follow-ups.',
    specializationHeading: 'Custom Scheduler Development and Booking Automation Case Studies',
    specializationText: 'Our agency, Inex Labs, specializes in booking system engineering, creating high-performance online schedulers and providing full-service booking automation. We build booking platforms tailored to your scheduling goals to effectively increase customer appointments, automate post-booking text sequences, and streamline operations. Our goal is to ensure your scheduler becomes a powerful revenue engine.',
    ctaText: 'BOOST YOUR BOOKINGS',
    whySectionTitle: 'DRIVING APPOINTMENTS THROUGH SEAMLESS SCHEDULING',
    steps: [
      { num: '01', title: 'Scheduler Setup', description: 'We design and embed user-friendly schedulers that allow clients to book appointments 24/7 with zero friction.' },
      { num: '02', title: 'Post-Booking Auto SMS', description: 'Instant text confirmations are dispatched immediately after booking, confirming dates, times, and next steps.' },
      { num: '03', title: 'No-Show Reduction', description: 'Automated SMS reminder sequences are scheduled to go out 24 hours and 1 hour before appointments.' },
      { num: '04', title: 'System Integrations', description: 'Connect your scheduling platform directly with Google Calendar, CRM databases, and payment processors.' }
    ],
    capabilities: [
      { icon: 'Smartphone', title: 'Post-Booking SMS', description: 'Deliver instant SMS confirmations and customized text reminders directly to the client\'s phone.' },
      { icon: 'Settings', title: 'Custom Schedulers', description: 'We build tailor-made booking flows that match your business logic, services, staff availability, and locations.' },
      { icon: 'Users', title: 'Calendar Syncing', description: 'Two-way synchronization across staff calendars (Google, Outlook) to eliminate double-bookings automatically.' },
      { icon: 'Shield', title: 'Payment Integration', description: 'Collect deposits or full payments securely at the time of booking using PCI-compliant payment gateways.' }
    ],
    project: {
      title: 'CLEANZO',
      subtitle: 'BOOKING AUTOMATION',
      description: 'A high-conversion online booking scheduler and automated text dispatch system built for a premier cleaning service provider. This system syncs real-time cleaner availability, secures booking deposits, and dispatches automated SMS reminders, leading to a 35% reduction in appointment no-shows and a 50% increase in online bookings.',
      image: '/images/related/burg-thumb.png',
      tag: 'BOOKING SYSTEMS',
      href: '#'
    },
    faqs: [
      { q: "Can we sync the booking system with our employees' personal calendars?", a: "Yes, our booking platforms support full two-way synchronization with Google Calendar, Outlook, and Apple Calendar to prevent double-booking." },
      { q: "How do automated post-booking SMS messages work?", a: "The moment a client schedules an appointment, our system triggers an API call that dispatches an instant text confirmation. Reminder texts are automatically scheduled for the days and hours leading up to the slot." },
      { q: "Can we collect deposits or full payments during booking?", a: "Absolutely. We integrate secure payment gateways like Stripe, PayPal, and Authorize.net to capture client deposits or full booking fees upfront." },
      { q: "Is the scheduler mobile-friendly?", a: "Yes, all of our schedulers are built with mobile-first layouts, ensuring a frictionless booking experience on smartphones and tablets." },
      { q: "What is the typical timeline for a booking system setup?", a: "Timelines vary depending on project complexity and scope. Typically, a focused scheduling and SMS integration engagement ranges from 3 to 5 weeks." }
    ]
  },
  'google-business': {
    slug: 'google-business',
    title: 'Google\nBusiness',
    heroImage: '/images/services/seo.png',
    heroDescription: 'We optimize your Google Business Profile (GMB) and automate review generation to place your local business at the very top of Google Maps and local search results.',
    specializationHeading: 'Google Business Profile Optimization and Local SEO Case Studies',
    specializationText: 'Our agency, Inex Labs, specializes in Google Business Profile (GMB) optimization and local search visibility. We construct bespoke systems that automate review generation, optimize local keywords, audit competitors, and maintain active GMB posts. Our goal is to ensure your business dominates the local Google 3-Pack and drives massive customer actions.',
    ctaText: 'DOMINATE LOCAL SEARCH',
    whySectionTitle: 'WHY DOES YOUR BUSINESS NEED GMB OPTIMIZATION?',
    steps: [
      { num: '01', title: 'GMB Optimization', description: 'Complete audit and configuration of your Google Business Profile to align with Google\'s ranking algorithms.' },
      { num: '02', title: 'Review Generation', description: 'Automated request systems that systematically ask happy customers for 5-star reviews via text and email.' },
      { num: '03', title: 'Profile Bettering', description: 'Continuous posting, photo uploads, Q&A management, and profile updates to keep your profile highly active and favored.' },
      { num: '04', title: 'Competitor Auditing', description: 'Track and analyze local competitors to steal their search traffic and rank higher in the Google Maps 3-Pack.' }
    ],
    capabilities: [
      { icon: 'Globe', title: 'Local SEO Ranking', description: 'We optimize your business details, categories, and keywords to rank in the coveted local Google 3-Pack.' },
      { icon: 'Users', title: 'Review Automation', description: 'Deploy systems that gather authentic 5-star customer reviews, significantly boosting your social proof and search CTR.' },
      { icon: 'Activity', title: 'Active Profile Management', description: 'We handle updates, respond to questions, schedule regular photo uploads, and publish GMB updates to indicate fresh activity.' },
      { icon: 'Monitor', title: 'Insights & Analytics', description: 'Monitor impressions, search queries, calls, and map directions to track the direct ROI of your local SEO efforts.' }
    ],
    project: {
      title: 'MAPDOMINATOR',
      subtitle: 'Local SEO & GMB Engine',
      description: 'A comprehensive local search visibility and profile management campaign. We executed automated review generation campaigns and optimized the local business listings for a multi-location service firm. This strategy led to a 140% increase in phone calls and a 200% surge in Google Maps discovery impressions within 90 days.',
      image: '/images/related/saasforge-thumb.png',
      tag: 'LOCAL SEO',
      href: '#'
    },
    faqs: [
      { q: "What is GMB optimization and why is it important?", a: "Google My Business (GMB) optimization involves fully configuring your profile with correct categories, descriptions, service areas, and attributes to help Google understand your business and rank you higher in local search results." },
      { q: "How do you help get more 5-star Google reviews?", a: "We set up automated SMS and email sequences that message your clients right after a job is completed, prompting them to leave a review with a single, direct link." },
      { q: "How long does it take to see results from GMB optimization?", a: "While some basic optimizations show results in a few weeks, dominating competitive local search queries and accumulating reviews typically takes 2 to 3 months of consistent effort." },
      { q: "Do you handle profile monitoring and spam removal?", a: "Yes, we monitor your listing for fake reviews, report competitor keyword-stuffing violations, and manage user Q&As to protect your brand reputation." },
      { q: "What is the typical timeline for an optimization setup?", a: "Initial setups and audit configurations take about 2 weeks. From there, we transition into ongoing profile management, posting, and automated review campaigns." }
    ]
  },
  'website-development': {
    slug: 'website-development',
    title: 'Website\nDevelopment',
    heroImage: '/images/services/web-dev.png',
    heroDescription: 'We engineer scalable, high-performance digital solutions tailored to your business needs. From modern frontend frameworks to robust backend architectures, we ensure your web presence is fast, secure, and future-proof.',
    specializationHeading: 'Website Development and Creation Case Studies for Clients',
    specializationText: 'Our agency, Inex Labs, specializes in advanced web engineering, creating custom digital platforms and providing full-stack development. We build projects optimized for speed and conversion to effectively compete in the digital landscape, enhance your online presence, and drive business logic. Our goal is to ensure your platform becomes a robust engine for growth.',
    ctaText: 'START YOUR PROJECT',
    whySectionTitle: 'WHY DO COMPANIES NEED CUSTOM DEVELOPMENT?',
    steps: [
      { num: '01', title: 'Scalable Architecture', description: 'We design systems that grow with your business. Our modular approach ensures that adding new features or handling increased traffic is seamless and efficient.' },
      { num: '02', title: 'Frontend Excellence', description: 'Using cutting-edge frameworks like React and Next.js, we create immersive, responsive, and blazing-fast user interfaces that delight and engage.' },
      { num: '03', title: 'Robust Backend Systems', description: 'Our backend solutions are built for security and reliability, handling complex data operations and business logic with precision and performance.' },
      { num: '04', title: 'Performance Optimization', description: 'Speed is critical. We optimize every aspect of your site—from code delivery to asset loading—to ensure the best possible Core Web Vitals and user satisfaction.' }
    ],
    capabilities: [
      { icon: 'Rocket', title: 'Technical\nAudit', description: 'We analyze your existing infrastructure to identify bottlenecks and security vulnerabilities, providing a roadmap for modernization and optimization.' },
      { icon: 'Code2', title: 'Frontend Engineering', description: 'We build highly interactive and responsive user interfaces using modern JavaScript frameworks, ensuring a seamless experience across all devices.' },
      { icon: 'Database', title: 'Backend Development', description: 'Our backend developers create secure, performant, and scalable server-side logic and database schemas to power your digital products.' },
      { icon: 'Globe', title: 'Cloud and DevOps', description: 'We implement automated deployment pipelines and cloud infrastructure to ensure your application is always available and easily updated.' }
    ],
    project: {
      title: 'CLEANZO',
      subtitle: 'WEB APP',
      description: 'We developed a high-performance booking platform for premium cleaning services that simplifies the connection between clients and professionals. The system features advanced scheduling algorithms, secure payment processing, and real-time provider tracking. This project highlights our ability to turn complex business logic into a functional UI.',
      image: '/images/related/cleanzo-thumb.png',
      tag: 'WEBSITE',
      href: '#'
    },
    faqs: [
      { q: "How long does it take to develop a custom website?", a: "A typical project takes 4-12 weeks depending on complexity, features, and the speed of feedback cycles." },
      { q: "Which technologies do you use for development?", a: "We specialize in high-performance stacks including React, Next.js, Node.js, and modern cloud architectures." },
      { q: "Is the website SEO-friendly from day one?", a: "Yes, we build every site with a mobile-first, SEO-ready foundation to ensure high visibility from launch." },
      { q: "Do you provide ongoing maintenance?", a: "We offer several maintenance and support packages to keep your platform updated, secure, and running smoothly." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  },
  'website-support': {
    slug: 'website-support',
    title: 'Website\nSupport',
    heroImage: '/images/services/web-support.png',
    heroDescription: 'We provide comprehensive, high-priority maintenance and management for your digital assets. From security hardening to performance tuning, we ensure your platform remains a high-performance business tool.',
    specializationHeading: 'Technical Management and Infrastructure Support Case Studies',
    specializationText: 'Our agency, Inex Labs, specializes in boutique support services, providing dedicated attention to the technical health of your website. We offer solutions tailored to your operational uptime goals to effectively mitigate risks, optimize loading speeds, and implement security protocols. Our goal is to ensure your digital core remains unbreakable and consistently performant.',
    ctaText: 'SECURE YOUR SITE',
    whySectionTitle: 'THE CRITICAL NEED FOR ACTIVE MAINTENANCE',
    steps: [
      { num: '01', title: 'Security Proximity', description: 'We implement daily vulnerability scans and real-time firewall monitoring to detect and neutralize threats before they impact your business operations.' },
      { num: '02', title: 'Core Updates', description: 'Our team handles the delicate process of updating CMS cores, plugins, and dependencies, ensuring compatibility and stability through rigorous regression testing.' },
      { num: '03', title: 'Performance Audits', description: 'We conduct monthly deep-dives into your Core Web Vitals, optimizing asset delivery and database queries to ensure elite loading speeds at all times.' },
      { num: '04', title: 'Backup Redundancy', description: 'Your data is precious. We maintain triple-redundant offsite backups with rapid restoration protocols, ensuring business continuity in any scenario.' }
    ],
    capabilities: [
      { icon: 'Shield', title: 'Security\nHardening', description: 'Elite-level protection for your digital infrastructure, from brute-force mitigation to advanced SSL/TLS management and database encryption.' },
      { icon: 'Settings', title: 'Uptime Monitoring', description: '24/7 automated monitoring of your site\'s availability, with immediate escalation to our engineering team in the event of any downtime.' },
      { icon: 'Activity', title: 'Platform Tuning', description: 'Continuous optimization of server resources and cache layers to ensure your platform handles traffic spikes with boutique-level elegance.' },
      { icon: 'Database', title: 'Content Management', description: 'Dedicated support for large-scale content updates, migration projects, and complex data entry, freeing your team for strategic work.' }
    ],
    project: {
      title: 'CLEANZO',
      subtitle: 'MAINTENANCE',
      description: 'Ongoing technical management for a high-traffic cleaning service platform with daily user interaction. Our support ensures 99.99% uptime through rigorous security monitoring and performance tuning. We provide high-priority infrastructure optimization to maintain professional speed and reliability across all digital touchpoints.',
      image: '/images/related/cleanzo-thumb.png',
      tag: 'SUPPORT',
      href: '#'
    },
    faqs: [
      { q: "What is your typical response time?", a: "Our support packages include a 4-hour SLA for critical issues, though we often respond within the hour." },
      { q: "Do you handle security breaches?", a: "Yes, we specialize in high-stakes recovery and hardening for platforms that have been compromised or are under heavy attack." },
      { q: "Can you support websites built by other agencies?", a: "Absolutely. We conduct a bridge-audit to understand the codebase and then take over full technical management." },
      { q: "Do you provide hosting services?", a: "We manage hosting on elite providers like Vercel, AWS, and Google Cloud, ensuring your infrastructure is properly scaled." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  },
  'seo-optimization': {
    slug: 'seo-optimization',
    title: 'SEO\nOptimization',
    heroImage: '/images/services/seo.png',
    heroDescription: 'We deploy advanced technical SEO and content strategy to dominate search results. From semantic keyword architecture to authority building, we turn search into a high-ROI acquisition channel.',
    specializationHeading: 'Search Performance and Content Authority Case Studies',
    specializationText: 'Our agency, Inex Labs, specializes in search engineering, creating visible digital presences and providing data-driven growth. We build strategies tailored to your market positioning goals to effectively increase organic reach, enhance brand authority, and drive high-intent traffic. Our goal is to ensure your brand becomes the top-of-mind choice in search.',
    ctaText: 'DOMINATE SEARCH',
    whySectionTitle: 'WINNING THE BATTLE FOR ORGANIC VISIBILITY',
    steps: [
      { num: '01', title: 'Technical Audit', description: 'We perform a 200-point inspection of your site\'s architecture, fixing crawl errors, improving schema markup, and ensuring perfect indexing.' },
      { num: '02', title: 'Semantic Research', description: 'Beyond simple keywords, we map the entire semantic landscape of your industry to identify high-potential topics that your competitors are missing.' },
      { num: '03', title: 'Authority Building', description: 'We execute high-fidelity link building and PR outreach to establish your site as a trusted authority in the eyes of major search engines.' },
      { num: '04', title: 'CTR Optimization', description: 'We optimize every title tag and meta description to maximize click-through rates, turning impressions into active site visitors.' }
    ],
    capabilities: [
      { icon: 'Globe', title: 'Semantic\nArchitecture', description: 'We build content silos that establish deep topical authority, making your site the primary resource for your industry\'s most valuable queries.' },
      { icon: 'Eye', title: 'Technical SEO', description: 'Elite-level optimization of everything from schema markup to robots.txt and sitemap architecture for perfect search engine communication.' },
      { icon: 'Activity', title: 'Competitor Analysis', description: 'Real-time monitoring of your competitors\' search movements, allowing us to pivot and stay ahead of changes in the ranking landscape.' },
      { icon: 'Rocket', title: 'Local Dominance', description: 'Specialized optimization for local maps and proximity-based searches, ensuring you win the business in your immediate geographic area.' }
    ],
    project: {
      title: 'PORTFOLIO SITES',
      subtitle: 'SEO STRATEGY',
      description: 'Strategic SEO overhaul for a high-end portfolio site resulting in 200% growth in organic reach. We deployed advanced technical optimization and a semantic content architecture to establish deep topical authority. This project showcases our ability to deliver long-term visibility for brands in highly competitive creative markets.',
      image: '/images/related/portfolio-sites-thumb.png',
      tag: 'SEO OPTIMIZATION',
      href: '#'
    },
    faqs: [
      { q: "How long until we see results from SEO?", a: "SEO is a medium-term play. While technical fixes can show impact in weeks, significant ranking growth typically takes 3-6 months." },
      { q: "Do you guarantee #1 rankings?", a: "No ethical agency guarantees rankings. We guarantee high-fidelity execution of best practices that maximize your probability of success." },
      { q: "Do you provide content writing?", a: "Yes, we have specialized technical writers who produce search-optimized content that maintains your premium brand voice." },
      { q: "How do you handle Google Core Updates?", a: "We build for long-term authority, which typically means our clients see stability or growth during major algorithm shifts." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  }
};
