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
    specializationText: 'Our agency, Inn7 Softwares, specializes in conversational architecture, creating bespoke AI agents that integrate deeply with your CRM and internal databases. We build solutions tailored to your operational goals to effectively automate customer touchpoints, reduce overhead, and provide 24/7 high-fidelity service. Our goal is to ensure your customer experience becomes a powerful competitive advantage.',
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
      href: '#'
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
    specializationText: 'Our agency, Inn7 Softwares, specializes in brand design development, creating brand styles, and providing full-service branding. We create projects tailored to your goals to effectively compete in the market, enhance your company image, and attract new customers. Our goal is to ensure that the outcome becomes a powerful catalyst for scaling and further business growth.',
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
  'app-platforms': {
    slug: 'app-platforms',
    title: 'App\nPlatforms',
    heroImage: '/images/services/app.png',
    heroDescription: 'We develop high-performance mobile applications and cross-platform experiences that put your business directly in your customers\' pockets. From native iOS and Android to modern hybrid solutions, we build for engagement.',
    specializationHeading: 'Mobile App and Platform Engineering Case Studies for Clients',
    specializationText: 'Our agency, Inn7 Softwares, specializes in mobile product engineering, creating native and cross-platform apps and providing seamless digital experiences. We build mobile platforms tailored to your user engagement goals to effectively leverage mobile-first trends, enhance brand loyalty, and drive growth. Our goal is to ensure your app becomes a powerful tool for your users.',
    ctaText: 'LAUNCH YOUR APP',
    whySectionTitle: 'WHY DOES YOUR BUSINESS NEED A MOBILE PRIORITY?',
    steps: [
      { num: '01', title: 'Ubiquitous Presence', description: 'Be where your customers are. A dedicated mobile platform ensures your brand is accessible anytime, anywhere, with just a single tap.' },
      { num: '02', title: 'Native Performance', description: 'We leverage hardware-level capabilities and OS-specific optimizations to deliver lightning-fast, butter-smooth experiences that hybrid web apps can\'t match.' },
      { num: '03', title: 'Push Engagement', description: 'Drive retention and re-engagement through intelligent push notifications and real-time updates that keep your users coming back to your platform.' },
      { num: '04', title: 'Offline Capability', description: 'Provide value even without an internet connection. Our apps are built to handle offline states gracefully, syncing data seamlessly when connectivity returns.' }
    ],
    capabilities: [
      { icon: 'Smartphone', title: 'iOS &\nAndroid', description: 'We develop high-quality applications for both major mobile operating systems, ensuring broad market reach and platform-specific excellence.' },
      { icon: 'Lock', title: 'UX Optimization', description: 'Our mobile designers focus on ergonomics and thumb-friendly interactions, creating intuitive interfaces that feel natural and effortless to use.' },
      { icon: 'Database', title: 'API Integration', description: 'We build seamless connections between your mobile app and backend services, ensuring real-time data synchronization and feature parity.' },
      { icon: 'Rocket', title: 'Performance', description: 'We optimize every frame and network request, providing the snappy, responsive feel that mobile users have come to expect as a standard for quality.' }
    ],
    project: {
      title: 'THE GOOD BURGER',
      subtitle: 'MOBILE APP',
      description: 'A high-performance application for a premium restaurant chain featuring real-time ordering and location-based discovery. The app is built on a robust architecture that manages peak-time surges with absolute stability. We focused on reducing friction in the ordering process, resulting in a significant uplift in mobile-driven revenue.',
      image: '/images/related/burg-thumb.png',
      tag: 'MOBILE APP',
      href: '#'
    },
    faqs: [
      { q: "Do you build native or cross-platform apps?", a: "We build both. We'll help you choose the best approach (Swift/Kotlin or Flutter/React Native) based on your goals." },
      { q: "Will the app be available on both major stores?", a: "Yes, we handle the entire submission and approval process for both the Apple App Store and Google Play Store." },
      { q: "How do you handle app updates and maintenance?", a: "We provide ongoing support to ensure your app remains compatible with the latest OS versions and device hardware." },
      { q: "Can the app function without an internet connection?", a: "Yes, we specialize in building offline-first applications that sync data seamlessly once connectivity is restored." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  },
  'crm-systems': {
    slug: 'crm-systems',
    title: 'CRM\nSystems',
    heroImage: '/images/services/crm.png',
    heroDescription: 'We design and implement custom CRM solutions that streamline your sales, marketing, and support operations. Our data-driven platforms empower your team with actionable insights and automated workflows.',
    specializationHeading: 'Custom CRM and Operational Flow Case Studies for Clients',
    specializationText: 'Our agency, Inn7 Softwares, specializes in custom CRM development, creating integrated management platforms and providing data-driven solutions. We build tools tailored to your business logic to effectively manage your customer relationships, enhance team productivity, and drive revenue. Our goal is to ensure your operations become a powerful engine for scaling.',
    ctaText: 'OPTIMIZE YOUR FLOW',
    whySectionTitle: 'WHY DOES YOUR BUSINESS NEED A CUSTOM CRM?',
    steps: [
      { num: '01', title: 'Centralized Data', description: 'Break down information silos by bringing all your customer data into a single, unified platform that serves as your single source of truth.' },
      { num: '02', title: 'Automated Workflows', description: 'Eliminate manual tasks with custom automation that handles lead routing, email follow-ups, and data entry, allowing your team to focus on high-value activities.' },
      { num: '03', title: 'Advanced Analytics', description: 'Gain deep insights into your business performance with custom dashboards and reporting tools that highlight trends and opportunities.' },
      { num: '04', title: 'Seamless Integrations', description: 'Connect your CRM with the tools you already use, ensuring smooth data flow across your entire tech stack—from ERPs to marketing platforms.' }
    ],
    capabilities: [
      { icon: 'Users', title: 'Data\nIntegration', description: 'We build specialized data pipelines that connect all your business units, ensuring a 360-degree view of every customer interaction.' },
      { icon: 'Layout', title: 'Pipeline Management', description: 'Optimize your sales funnel with custom pipeline visualizations and tracking tools that help your team close deals faster and more effectively.' },
      { icon: 'Activity', title: 'Reporting and BI', description: 'Turn your data into decisions with powerful Business Intelligence tools integrated directly into your custom CRM environment.' },
      { icon: 'Settings', title: 'Workflow Automation', description: 'We automate repetitive processes, from lead generation and scoring to contract renewals and customer support ticketing.' }
    ],
    project: {
      title: 'SAASFORGE',
      subtitle: 'SaaS CRM',
      description: 'A custom-built CRM system for specialized multi-tenant management across diverse business units. The platform architecture was designed to support massive data isolation while maintaining high-speed query performance. We implemented an intuitive dashboard that gives administrators a 360-degree view of their entire ecosystem at a single glance.',
      image: '/images/related/saasforge-thumb.png',
      tag: 'ENTERPRISE',
      href: '#'
    },
    faqs: [
      { q: "Can you migrate data from our existing CRM?", a: "Yes, we handle complex data migrations from legacy systems, ensuring data integrity and zero downtime." },
      { q: "Do you provide training for our sales team?", a: "Absolutely. We provide comprehensive onboarding sessions and documentation to ensure your team is productive from day one." },
      { q: "Is the CRM custom-built or platform-based?", a: "We build both fully custom CRMs and highly-specialized integrations on top of platforms like Salesforce and HubSpot." },
      { q: "Can the CRM integrate with our marketing tools?", a: "Yes, we specialize in building seamless connections between your CRM and marketing automation platforms." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  },
  'ecommerce-stores': {
    slug: 'ecommerce-stores',
    title: 'E-commerce\nStores',
    heroImage: '/images/services/ecom.png',
    heroDescription: 'We build high-conversion digital storefronts that turn browsers into loyal customers. From custom headless commerce to powerful Shopify integrations, we provide the tools to scale your retail business globally.',
    specializationHeading: 'E-commerce Store and Retail Logic Case Studies for Clients',
    specializationText: 'Our agency, Inn7 Softwares, specializes in commerce engineering, creating high-performance online stores and providing full-service retail solutions. We build e-commerce platforms tailored to your sales goals to effectively increase conversions, enhance customer journeys, and drive growth. Our goal is to ensure your store becomes a powerful revenue engine.',
    ctaText: 'BOOST YOUR SALES',
    whySectionTitle: 'DRIVING REVENUE THROUGH SEAMLESS COMMERCE',
    steps: [
      { num: '01', title: 'Conversion Optimization', description: 'We analyze user behavior and optimize the shopping journey—from discovery to checkout—ensuring the lowest friction and highest possible conversion rates.' },
      { num: '02', title: 'Headless Integration', description: 'Decouple your frontend from the backend to provide lightning-fast, highly-customized commerce experiences across every device and channel.' },
      { num: '03', title: 'Secure Payments', description: 'We integrate robust, PCI-compliant payment gateways that support multi-currency, local payment methods, and seamless one-click checkouts.' },
      { num: '04', title: 'Global Logistics', description: 'Our platforms integrate with advanced shipping and inventory management systems, providing real-time tracking and efficient order fulfillment.' }
    ],
    capabilities: [
      { icon: 'Rocket', title: 'Commerce\nAudit', description: 'We audit your existing store for performance, SEO, and conversion bottlenecks, providing a strategic roadmap for growth.' },
      { icon: 'Code2', title: 'Headless Commerce', description: 'We implement headless platforms using Shopify Plus or BigCommerce APIs, giving you complete frontend freedom and better performance.' },
      { icon: 'Layout', title: 'Inventory Tracking', description: 'We build real-time inventory synchronization across multiple warehouses and sales channels, ensuring accurate stock levels at all times.' },
      { icon: 'Shield', title: 'SEO & Marketing', description: 'Our e-commerce stores are built with advanced SEO features and marketing automation tools integrated to drive organic traffic and sales.' }
    ],
    project: {
      title: 'THE GOOD BURGER',
      subtitle: 'LUXURY RETAIL',
      description: 'A high-conversion storefront for a premium restaurant chain with seamless checkout and inventory management. This project highlights our ability to bridge complex physical logistics with a simple, high-fidelity digital shopping journey. The result was a platform that scaled effortlessly across multiple global markets and languages.',
      image: '/images/related/burg-thumb.png',
      tag: 'LUXURY E-COMMERCE',
      href: '#'
    },
    faqs: [
      { q: "Which e-commerce platforms do you support?", a: "We specialize in Shopify Plus, BigCommerce, and custom headless solutions using Stripe and MedusaJS." },
      { q: "How do you optimize for high conversion rates?", a: "We use a data-driven approach, focusing on site speed, friction-less checkout, and persuasive UX design patterns." },
      { q: "Can you integrate custom payment gateways?", a: "Yes, we build secure integrations for all major providers including Stripe, Adyen, and specialized regional payment methods." },
      { q: "Is headless commerce better for my business?", a: "If you need maximum performance and complete design freedom across multiple channels, headless is usually the superior choice." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  },
  'saas-solutions': {
    slug: 'saas-solutions',
    title: 'SaaS\nSolutions',
    heroImage: '/images/services/saas.png',
    heroDescription: 'We architect and build scalable Software-as-a-Service platforms that solve complex business challenges. From multi-tenant infrastructure to flexible subscription management, we provide the technical foundation for your digital product.',
    specializationHeading: 'SaaS Product and Scalable Platform Case Studies for Clients',
    specializationText: 'Our agency, Inn7 Softwares, specializes in SaaS product engineering, creating multi-tenant platforms and providing scalable digital solutions. We build architectures tailored to your growth strategy to effectively serve your global user base, enhance operational efficiency, and drive recurring revenue. Our goal is to ensure your SaaS becomes a powerful industry leader.',
    ctaText: 'SCALE YOUR VISION',
    whySectionTitle: 'THE POWER OF A SCALABLE SAAS MODEL',
    steps: [
      { num: '01', title: 'Multi-tenant Architecture', description: 'Serve thousands of customers from a single code base with isolated data environments, ensuring maximum resource efficiency and simplified maintenance.' },
      { num: '02', title: 'Subscription Engines', description: 'Implement flexible pricing tiers, automated billing, and usage-based models that adapt to your customers\' needs and maximize your LTV.' },
      { num: '03', title: 'Global Scalability', description: 'Our SaaS platforms are designed for high availability and low latency across the globe, leveraging edge computing and robust cloud infrastructure.' },
      { num: '04', title: 'API-First Approach', description: 'Enable your customers and partners to build on top of your platform with comprehensive API ecosystems and developer tools.' }
    ],
    capabilities: [
      { icon: 'Rocket', title: 'Product\nStrategy', description: 'We help you define your MVP, map the product roadmap, and identify the core value propositions that will drive SaaS growth.' },
      { icon: 'Layout', title: 'Architecture Design', description: 'Our architects design multi-tenant systems with robust security, high performance, and seamless data isolation for every customer.' },
      { icon: 'Monitor', title: 'Subscription Models', description: 'We implement complex billing logic and automated subscription management that scales with your user base and pricing experiments.' },
      { icon: 'Settings', title: 'API Ecosystems', description: 'Extend your reach by building secure, well-documented REST or GraphQL APIs that allow for third-party integrations and developer innovation.' }
    ],
    project: {
      title: 'SAASFORGE',
      subtitle: 'SaaS PLATFORM',
      description: 'A multi-tenant billing engine for subscription-based businesses with global reach. We built a high-scalability ledger system that handles millions of transactions daily with real-time accuracy and fraud prevention measures. The platform was meticulously optimized for enterprise-level reporting and financial compliance.',
      image: '/images/related/saasforge-thumb.png',
      tag: 'SaaS SOLUTIONS',
      href: '#'
    },
    faqs: [
      { q: "How do you handle multi-tenant data security?", a: "We implement robust data isolation layers at both the application and database levels to ensure customer privacy." },
      { q: "Can the platform scale to millions of users?", a: "Yes, our SaaS architectures are built on top of auto-scaling cloud infrastructure designed for global growth." },
      { q: "Do you support custom subscription models?", a: "We can implement anything from simple tiers to complex usage-based billing and enterprise contract management." },
      { q: "Can we integrate third-party APIs into the SaaS?", a: "Absolutely. We build API-first platforms that are designed for seamless integration with external services." },
      { q: "What is the typical timeline for a project?", a: "Timelines vary depending on project complexity and scope. Typically, a focused engagement ranges from 4 to 8 weeks, ensuring we maintain our high standard of boutique precision from discovery to launch." }
    ]
  },
  'website-development': {
    slug: 'website-development',
    title: 'Website\nDevelopment',
    heroImage: '/images/services/web-dev.png',
    heroDescription: 'We engineer scalable, high-performance digital solutions tailored to your business needs. From modern frontend frameworks to robust backend architectures, we ensure your web presence is fast, secure, and future-proof.',
    specializationHeading: 'Website Development and Creation Case Studies for Clients',
    specializationText: 'Our agency, Inn7 Softwares, specializes in advanced web engineering, creating custom digital platforms and providing full-stack development. We build projects optimized for speed and conversion to effectively compete in the digital landscape, enhance your online presence, and drive business logic. Our goal is to ensure your platform becomes a robust engine for growth.',
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
    specializationText: 'Our agency, Inn7 Softwares, specializes in boutique support services, providing dedicated attention to the technical health of your website. We offer solutions tailored to your operational uptime goals to effectively mitigate risks, optimize loading speeds, and implement security protocols. Our goal is to ensure your digital core remains unbreakable and consistently performant.',
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
    specializationText: 'Our agency, Inn7 Softwares, specializes in search engineering, creating visible digital presences and providing data-driven growth. We build strategies tailored to your market positioning goals to effectively increase organic reach, enhance brand authority, and drive high-intent traffic. Our goal is to ensure your brand becomes the top-of-mind choice in search.',
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
