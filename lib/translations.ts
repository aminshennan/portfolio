// Define the structure of our translations
export interface Translations {
  [key: string]: {
    [key: string]: string | string[] | Record<string, any> | any[]
  }
}

// Define the Project interface used in the ProjectsSection
export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  detailedDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

// Define the Reference interface used in the FooterSection
export interface Reference {
  name: string;
  title: string;
  contact: string;
}

// Define all the translations for both languages
export const translations: Translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      volunteer: "Volunteer",
      contact: "Contact",
    },

    // Hero section
    hero: {
      title: "Amin Ahmed Alawad",
      subtitle: "AI Engineer | Data Scientist | Machine Learning Engineer",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      stats: {
        languages: "Programming Languages",
        experience: "Years Experience",
        projects: "Projects",
        leadership: "Leadership Roles",
      },
    },

    // About section
    about: {
      title: "About Me",
      subtitle: "Transforming complex data into actionable insights",
      paragraph1:
        "Dynamic AI Engineer and Data Scientist with hands-on experience in AI solutions, automation, and data analysis. Currently working at Aurorise AI delivering automation and AI solutions for B2B clients, while skilled in automating financial KPI dashboards with Power BI and Microsoft Fabric, and developing match analytics dashboards from APIs.",

      paragraph2: "Enhanced operational efficiency by reducing manual Excel tasks at the Asian Football Confederation. Proficient in Python scripting and ETL processes. Ready to leverage analytical expertise to drive data-informed decision-making in a challenging environment.",
      paragraph3: "",
      sectionHeadings: {
        journey: "My Journey",
        careerHighlights: "Career Highlights",
        techStack: "Tech Stack",
        careerGoals: "Career Goals",
        personalAttributes: "Personal Attributes"
      },
      highlights: [
        {
          id: "ai-engineer",
          title: "AI Engineer at Aurorise AI",
          description: "Currently working as an AI Engineer delivering automation and AI solutions for B2B clients, including chatbot development, workflow automation, and CRM platform customization."
        },
        {
          id: "education",
          title: "Academic Excellence",
          description: "Graduated with a Bachelor's in Computer Science specialized in Data Science from Multimedia University, with a focus on machine learning and statistical analysis techniques."
        },
        {
          id: "internship",
          title: "AFC Data Project",
          description: "Engineered a Power BI match-analytics dashboard integrating two football APIs; designed ETL processes and structured four relational tables, leading to user adoption within my internship period."
        },
        {
          id: "skills",
          title: "Technical Proficiency",
          description: "Mastered a diverse technical stack including Python, PyTorch, TensorFlow, scikit-learn, pandas, NumPy, and data visualization tools while continuously expanding knowledge in emerging AI fields."
        }
      ],
      careerGoals: [
        "Become a lead data scientist specializing in predictive analytics",
        "Pursue advanced certifications in machine learning and AI",
        "Contribute to open-source projects in the data science community"
      ],
      personalAttributes: {
        analyticalThinker: {
          title: "Analytical Thinker",
          description: "Approach problems methodically and systematically"
        },
        continuousLearner: {
          title: "Continuous Learner",
          description: "Constantly seeking new knowledge and skills"
        },
        detailOriented: {
          title: "Detail-Oriented",
          description: "Meticulous attention to data accuracy and quality"
        },
        adaptable: {
          title: "Adaptable",
          description: "Quickly adjust to new technologies and challenges"
        }
      },
      contactCTA: "Let's discuss how I can contribute to your team"
    },

    // Skills section
    skills: {
      title: "Skills",
      subtitle: "Expertise across the data science & engineering spectrum",
      tabs: {
        technical: "Technical Skills",
        soft: "Soft Skills",
      },
      categories: {
        technicalSkills: "Technical Skills",
        programmingLanguages: "Programming Languages",
        toolsFrameworks: "Tools & Frameworks",
        dataEngineering: "Data Engineering & Cleaning",
        machineLearning: "Machine & Deep Learning",
        nlp: "Natural Language Processing",
        businessIntelligence: "Business Intelligence & Visualization",
        webDev: "Web & DevOps",
      },
      technicalDescription: {
        dataEngineering: "Proficient in data transformation, cleaning, and ETL pipeline development",
        machineLearning: "Expertise in developing and deploying ML models for various applications",
        deepLearning: "Experience with neural networks and deep learning architectures",
        dataAnalysis: "Strong analytical skills with focus on extracting actionable insights",
        nlp: "Knowledge of text processing and language models for text-based applications",
        businessIntelligence: "Creating dashboards and visualizations for business decision making",
      },
      languagesDescription: {
        python: "Primary language for data science and ML/DL workflows",
        sql: "Database queries, data extraction and manipulation",
        typescript: "Web development and frontend applications",
        java: "Backend applications and enterprise systems",
      },
      toolsDescription: {
        pandas: "Data manipulation and preprocessing libraries",
        scikit: "Machine learning algorithms and model development",
        tensorflow: "Deep learning frameworks for neural network development",
        pytorch: "Research-oriented deep learning implementation",
        powerbi: "Business intelligence and interactive dashboard creation",
        huggingface: "NLP models and transformer architecture implementations",
        nextjs: "React framework for web application development",
        fastapi: "Building high-performance APIs and web services",
      },
      softSkills: {
        communication: {
          name: "Communication",
          description: "Effectively conveying complex data insights to stakeholders",
        },
        teamwork: {
          name: "Teamwork",
          description: "Collaborating across departments to achieve project goals",
        },
        problemSolving: {
          name: "Problem Solving",
          description: "Breaking down complex problems into manageable components",
        },
        criticalThinking: {
          name: "Critical Thinking",
          description: "Analyzing information objectively to make reasoned judgments",
        },
        timeManagement: {
          name: "Time Management",
          description: "Prioritizing tasks and meeting deadlines efficiently",
        },
        creativity: {
          name: "Creativity",
          description: "Developing innovative approaches to data challenges",
        },
        adaptability: {
          name: "Adaptability",
          description: "Quickly adjusting to new technologies and methodologies",
        },
        leadership: {
          name: "Leadership",
          description: "Guiding teams and projects to successful outcomes",
        },
      },
      hoverMessage: "Hover over skill bars for more details",
    },

    // Projects section
    projects: {
      title: "Projects",
      subtitle: "Innovative solutions with measurable impact",
      showMore: "Show More",
      showLess: "Show Less",
      overview: "Overview",
      challenges: "Challenges",
      solutions: "Solutions",
      results: "Results",
      featuredProject: "Featured Project",

      projectList: [
        {
          id: "sports-analytics",
          title: "Sports Analytics Dashboard",
          badge: "Power BI",
          description: "Comprehensive sports analytics dashboard for football match analysis and player performance tracking.",
          tags: ["Power BI", "Data Visualization", "Sports Analytics"],
          detailedDescription: "Implemented an interactive Power BI dashboard for the Asian Football Confederation (AFC) to analyze football match statistics, player performance, and team metrics. The solution aggregates data from multiple API endpoints, transforming and visualizing it in user-friendly, dynamic reports.",
          challenges: [
            "Multiple Data Sources & Formats: Needed to integrate and transform data from different API endpoints (Fixtures, Players) with varying structures.",
            "Manual Refresh Process: Required a secure, manual refresh approach due to network constraints and API access limitations.",
            "Security Constraints: Dashboard needed to be publicly accessible, yet the underlying data source had to remain protected within the organization's network.",
            "Data Consistency & Accuracy: Ensuring that team, player, and match information remained synchronized across various tables and pages."
          ],
          solutions: [
            "Robust ETL & Data Modeling: Created a well-defined schema and used Power Query to clean, transform, and unify match/players data into structured tables (Fixtures, Teams, Opponents, Players).",
            "Interactive Visualizations: Built dedicated pages (Results, Goals, Positions, Teams Map, Players Map, Tables) with custom filters (Matches, Teams, Players) for granular data exploration.",
            "Security & Access Control: Deployed a public dashboard link while restricting API/data source access to the internal network, striking a balance between openness and security.",
            "Documentation & Maintenance Plan: Provided clear project documentation, including data schemas, transformation steps, and a manual refresh procedure to maintain data integrity."
          ],
          results: [
            "Enhanced Decision-Making: AFC stakeholders can easily explore performance trends, player statistics, and match outcomes, leading to more informed strategic decisions.",
            "Improved Data Accessibility: The dashboard centralizes key metrics and allows for quick, intuitive filtering and analysis across teams, tournaments, and timeframes.",
            "Scalable Foundation: The modular data model and clear documentation enable future expansions (e.g., automated refresh with a data gateway, adding more competitions).",
            "Positive Stakeholder Feedback: The dashboard's user-friendly interface and comprehensive coverage of AFC data garnered strong acceptance among non-technical and technical users alike."
          ],
          liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTBkZTJmYTgtYzNlOC00YmY0LWJmN2ItNjY2ODU0NzM4MDQyIiwidCI6IjdlMGI1ZmNmLTEyYzQtNGVmZi05NmI2LTQ2NjRmMjVkYzdkYSIsImMiOjEwfQ%3D%3D",
          image: "/images/projects/Asian_Football_Confederation.svg",
          featured: true
        },
        {
          id: "forgery-detection",
          title: "Forgery Detection with ViT & ResNet",
          badge: "Deep Learning",
          description: "Hybrid ResNet-50 + Vision Transformer system that classifies media as Real, Fake, or Edited with 95.36% validation accuracy.",
          tags: ["Python", "PyTorch", "ResNet-50", "ViT", "TorchScript", "Flask"],
          detailedDescription: "State-of-the-art deep learning system for detecting image forgery, manipulation, and synthetic media with 95.36% accuracy. Implements a hybrid ResNet50 + Vision Transformer (ViT) architecture that excels at identifying AI-generated content.",
          challenges: [
            "Class-imbalance between real and synthetic samples",
            "High VRAM footprint of ViT (solved via TorchScript optimization)",
            "Creating a user-friendly Flask drag-and-drop demo"
          ],
          solutions: [
            "Fused local-feature power of ResNet-50 with global-context modeling of a 6-layer ViT encoder",
            "Discovered that just 20% of the data yields peak accuracy",
            "Implemented TorchScript optimization to reduce memory requirements"
          ],
          results: [
            "Achieved 95.36% validation accuracy in classifying media as Real, Fake, or Edited",
            "Reduced training time by 40% with optimized data sampling",
            "Created intuitive demo for non-technical users"
          ],
          githubUrl: "https://github.com/aminshennan/Forgery_Detection_with_ViT_and_RestNet",
          image: "/images/projects/forgery-detection.jpg"
        },
        {
          id: "scientific-paper-summarizer",
          title: "Scientific-Paper Summariser (LoRA FLAN-T5-XXL)",
          badge: "LLM",
          description: "End-to-end pipeline: scrape 200k arXiv papers → LoRA-tune 11B FLAN-T5-XXL → serve abstractive summaries through a Flask UI.",
          tags: ["Python", "Hugging Face Transformers", "LoRA", "Flask", "NLP", "Transformers"],
          detailedDescription: "End-to-end scientific paper summarization pipeline: arXiv scraping → LoRA-tuned FLAN-T5-XXL → Flask demo, with detailed ablation files, report, and slides.",
          challenges: [
            "Memory limits when loading an 11B model",
            "Cleaning noisy text from PDF extracts",
            "Designing evaluation to prove LoRA efficacy"
          ],
          solutions: [
            "Used LoRA + 8-bit quantization to fine-tune FLAN-T5-XXL on commodity hardware",
            "Gained +2.6 ROUGE-1 while updating < 1% parameters",
            "Implemented robust data cleaning pipeline"
          ],
          results: [
            "Improved summary quality by 2.6 ROUGE-1 points over baseline",
            "Reduced training memory requirements by 75%",
            "Created intuitive interface for non-technical users"
          ],
          githubUrl: "https://github.com/aminshennan/Scientific-Paper-Summarization-via-LoRA-Tuned-FLAN-T5-XXL-",
          image: "/images/projects/Scientific Paper Summarization.jpg"
        },
        {
          id: "intelligent-parking",
          title: "Intelligent Car-Parking System",
          badge: "Computer Vision",
          description: "YOLOv3 + OpenCV solution that counts vehicles, detects empty slots, and classifies car colors in real time.",
          tags: ["Python", "YOLOv3", "OpenCV", "Computer Vision", "Jupyter"],
          detailedDescription: "YOLOv3 + OpenCV solution that counts vehicles, detects empty slots, and classifies car colors in real time.",
          challenges: [
            "Limited dataset of only 95 images (mitigated by augmentation)",
            "Balancing inference speed with detection accuracy",
            "Synchronizing multiple CV tasks in one pipeline"
          ],
          solutions: [
            "Deploy YOLOv3 for vehicle/slot detection",
            "Attach color-classification and analytics dashboard to optimize flow",
            "Implemented data augmentation to expand limited training data"
          ],
          results: [
            "90% accuracy in vehicle/slot detection",
            "Reduced parking management time by 65%",
            "Improved parking utilization by 30%"
          ],
          githubUrl: "https://github.com/aminshennan/Car-Parking-System",
          image: "/images/projects/intelligent-parking.jpg"
        },
        {
          id: "sentiment-analysis",
          title: "Sentiment Analysis of Women's Clothing E-Commerce Reviews",
          badge: "NLP",
          description: "Compares RNN, CNN and FNN models on ~23k e-commerce reviews to predict customer sentiment.",
          tags: ["TensorFlow/Keras", "Python", "GloVe", "Jupyter", "NLP"],
          detailedDescription: "Machine learning project applying RNN, CNN, and FNN models to e-commerce sentiment analysis. The study evaluates model performance and provides insights for the e-commerce industry.",
          challenges: [
            "Handling class imbalance between positive and negative reviews",
            "Optimizing embeddings (GloVe) and sequence length",
            "Presenting results to non-technical stakeholders"
          ],
          solutions: [
            "Benchmarked three modern architectures",
            "Demonstrated RNN gives best F1 while CNN at half the inference time is production-friendly",
            "Implemented class weighting to handle imbalanced data"
          ],
          results: [
            "Achieved 85% F1 score with RNN model",
            "CNN model provided 2x faster inference with only 3% accuracy drop",
            "Extracted actionable insights from customer feedback"
          ],
          githubUrl: "https://github.com/aminshennan/Sentiment-Analysis-of-Women-s-Clothing-E-Commerce-Reviews-Using-Machine-Learning",
          image: "/images/projects/sentiment-analysis.jpg"
        },
        {
          id: "sign-language",
          title: "Arabic Sign-Language Recognition",
          badge: "Computer Vision",
          description: "Arabic ASL system combining YOLO hand detection with CNN/LSTM/GNN backbones.",
          tags: ["TensorFlow", "YOLO", "OpenCV", "Python", "Computer Vision"],
          detailedDescription: "This project focuses on developing a comprehensive Arabic Sign Language (ASL) Recognition System using advanced deep learning techniques.",
          challenges: [
            "Annotating hand regions accurately",
            "Training temporal models on limited video frames",
            "Deploying a real-time demo within hardware constraints"
          ],
          solutions: [
            "Detect hand ROIs with YOLO",
            "Feed sequences into deep nets",
            "Compare architectures to maximise accuracy"
          ],
          results: [
            "Achieved 88% recognition accuracy on ASL gestures",
            "Created real-time demo with 15 FPS performance",
            "Reduced communication barriers for Arabic sign language users"
          ],
          githubUrl: "https://github.com/aminshennan/Hand-Sign-language-detection",
          image: "/images/projects/Arabic Sign Language Recognition System.jpg"
        },
        {
          id: "portfolio-site",
          title: "Personal Portfolio Site",
          badge: "Web Development",
          description: "Responsive bilingual portfolio with dark/light mode, PWA support, and RTL Arabic layouts.",
          tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
          detailedDescription: "Responsive bilingual portfolio with dark/light mode, PWA support, and RTL Arabic layouts.",
          challenges: [
            "Ensuring RTL support doesn't break animations",
            "Keeping performance high (LCP < 1.8s) on mobile",
            "SEO for both Latin and Arabic keywords"
          ],
          solutions: [
            "Built with Next.js 15, TypeScript and Tailwind CSS",
            "Includes Framer Motion animations and Vercel CI/CD",
            "Implemented responsive design for all device sizes"
          ],
          results: [
            "Achieved 95+ Lighthouse performance score",
            "Seamless language switching with maintained animations",
            "Improved visibility in search engine results"
          ],
          githubUrl: "https://github.com/aminshennan/portfolio",
          image: "/images/projects/portfolio-site.jpg"
        },
        {
          id: "marital-satisfaction",
          title: "Marital-Satisfaction Data Mining",
          badge: "Data Mining",
          description: "Applies classification, clustering, and FP-Growth ARM on survey data from 45 countries to model relationship quality.",
          tags: ["scikit-learn", "Python", "Pandas", "NumPy", "Data Mining"],
          detailedDescription: "Applies classification, clustering, and FP-Growth ARM on survey data from 45 countries to model relationship quality.",
          challenges: [
            "High dimensionality with mixed categorical/Likert features",
            "Balancing interpretability and model accuracy",
            "Cultural bias in survey responses"
          ],
          solutions: [
            "Combines Decision Trees, SVM, K-Means, and Association-Rule Mining to extract actionable patterns",
            "Applied dimensionality reduction techniques",
            "Implemented cross-cultural validation methods"
          ],
          results: [
            "Identified key predictors of marital satisfaction across cultures",
            "Discovered 15 significant association rules",
            "Created visualizations for non-technical stakeholders"
          ],
          githubUrl: "https://github.com/aminshennan/Marital-Satisfaction-Analysis",
          image: "/images/projects/Marital-Satisfaction Data Mining.jpg"
        }
      ],

    },

    // Experience section
    experience: {
      title: "Experience & Education",
      subtitle: "My professional journey and academic background",
      timeline: [
        {
          title: "AI Engineer",
          company: "Aurorise AI",
          period: "04/2025 - Present",
          description: [
            "Working with a small startup team to deliver automation and AI solutions for B2B clients on the company's white-labeled CRM platform, Magic.ai",
            "Supporting projects involving automation workflows, chatbot development, compliance setup, and website creation tailored to client requirements",
            "Assisting in WeBlast management and client-side service delivery to improve customer engagement and operations",
            "Contributing to project management tasks in a startup environment, coordinating between technical implementation and client needs",
          ],
          type: "work",
          location: "Cyberjaya, Malaysia",
          skills: ["Automation", "CRM Systems", "Chatbot Development", "Client Support", "Project Management", "Startup Operations"],
        },
        {
          title: "Data Analyst Intern",
          company: "SRKK",
          period: "10/2023 - 01/2024",
          description: [
            "Automated financial KPI dashboards in Power BI and Microsoft Fabric, using programmed Python data flows and optimized update scheduling",
            "Developed interactive visualizations to streamline financial reporting processes",
          ],
          type: "work",
          location: "Klang, Malaysia",
          skills: ["Power BI", "Python", "Microsoft Fabric", "Data Visualization", "ETL"],
        },
        {
          title: "Data Analyst Intern",
          company: "Asian Football Confederation",
          period: "07/2023 - 10/2023",
          description: [
            "Designed a match analytics dashboard in Power BI by integrating two football APIs; engineered ETL processes in Power Query and structured four relational tables, leading to user adoption during internship period",
            "Incorporated over 15 interactive slicers (tournaments, teams, players) and KPI cards, resulting in significant reduction of manual Excel workload for coordinators",
          ],
          type: "work",
          location: "Kuala Lumpur, Malaysia",
          skills: ["Power BI", "Sports Analytics", "Data Visualization", "ETL", "API Integration"],
        },
        {
          title: "B.Sc. Computer Science (Hons.) - Data Science Specialisation",
          institution: "Multimedia University",
          period: "04/2020 - 07/2024",
          description: [
            "Specialized in Data Science",
            "Relevant coursework: Machine Learning, Data Mining, Statistical Analysis, Big Data Analytics",
            "Participated in various data science competitions and hackathons",
          ],
          type: "education",
          location: "Cyberjaya, Malaysia",
          skills: ["Data Science", "Machine Learning", "Statistical Analysis"],
          achievements: [{ text: "Data Science Specialization" }],
        },
      ],
    },

    // Volunteer section
    volunteer: {
      title: "Volunteer Experience",
      subtitle: "Leadership and community engagement roles",
      responsibilities: "Responsibilities",
      keyAchievements: "Key Achievements",
      leadershipExperience: "Leadership Experience",
      roles: [
        {
          title: "Founder and President",
          organization: "Sudanese Culture Society - MMU",
          period: "2023 - 2024",
          description: [
            "Led and organized cultural and charity events, significantly enhancing community engagement",
            "Represented MMU's Sudanese community at conferences and national-level meetings",
            "Contributed to fundraising efforts for displaced Sudanese communities",
          ],
          achievements: [
            "Successfully organized cultural events with high attendance",
            "Raised funds for humanitarian causes",
            "Established partnerships with other cultural organizations",
          ],
        },
        {
          title: "Committee Member",
          organization: "Outdoor Activities & Recreational Society (OARS) - MMU",
          period: "2022 - 2024",
          description: [
            "Organized and participated in various outdoor activities, including camping, hiking, mountaineering, wall climbing, rock climbing, caving, and kayaking",
            "Mentored new committee members, fostering leadership and teamwork skills",
          ],
          achievements: [
            "Coordinated multiple outdoor expeditions",
            "Developed safety protocols for high-risk activities",
            "Helped increase society membership",
          ],
        },
      ],
    },

    // Contact section
    contact: {
      title: "Get in Touch",
      subtitle: "Let's discuss your next project",
      email: "Email",
      emailAddress: "aminshennan@gmail.com",
      phone: "Phone",
      phoneNumber: "+60 173493290",
      linkedin: "LinkedIn",
      linkedinHandle: "aminshennan",
      linkedinUrl: "https://linkedin.com/in/aminshennan",
      github: "GitHub",
      githubHandle: "aminshennan",
      githubUrl: "https://github.com/aminshennan",
      getInTouch: "Get in Touch",
      sendMessage: "Send Me a Message",
      responseTime: "Quick Response Time",
      responseMessage: "I typically respond to messages within 24-48 hours. For urgent matters, consider reaching out via phone or LinkedIn.",
      messageSent: "Message Sent Successfully!",
      thankYouMessage: "Thank you for your message. I'll get back to you as soon as possible.",
      form: {
        name: "Your Name",
        namePlaceholder: "Enter your full name",
        email: "Your Email",
        emailPlaceholder: "Enter your email address",
        subject: "Subject",
        subjectPlaceholder: "What is this regarding?",
        message: "Message",
        messagePlaceholder: "Tell me about your project, requirements, or any questions you have...",
        submit: "Send Message"
      }
    },

    // Footer
    footer: {
      description: "Data Scientist specializing in machine learning and AI solutions.",
      quickLinks: "Quick Links",
      references: "References",
      copyright: "© 2025 Amin Ahmed Alawad. All rights reserved.",
      referenceList: [
        {
          name: "Osama Ali Abdelrahman",
          title: "Data Engineer Consultant, SRKK",
          contact: "osama.ali@srkk.com"
        },
        {
          name: "Rebecca Santhanasamy",
          title: "IT Project Manager, AFC",
          contact: "rebecca.santhanasamy@the-afc.com"
        }
      ],
      socialLinks: {
        twitter: "https://twitter.com/aminshennan",
        github: "https://github.com/aminshennan",
        linkedin: "https://linkedin.com/in/aminshennan"
      }
    },

    // Language switcher
    language: {
      en: "English",
      ar: "العربية",
    },
  },

  ar: {
    // Navigation
    nav: {
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرة",
      education: "التعليم",
      volunteer: "العمل التطوعي",
      contact: "اتصل بي",
    },

    // Hero section
    hero: {
      title: "آمن شنان",
      subtitle: "مهندس ذكاء اصطناعي | عالم بيانات | مهندس تعلم آلي",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "اتصل بي",
      stats: {
        languages: "لغات البرمجة",
        experience: "سنوات الخبرة",
        projects: "المشاريع",
        leadership: "أدوار قيادية",
      },
    },

    // About section
    about: {
      title: "نبذة عني",
      subtitle: "تحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ",
      paragraph1:
        "مهندس ذكاء اصطناعي وعالم بيانات ديناميكي مع خبرة عملية في حلول الذكاء الاصطناعي والأتمتة وتحليل البيانات. أعمل حالياً في أورورايز للذكاء الاصطناعي لتقديم حلول الأتمتة والذكاء الاصطناعي لعملاء B2B، مع مهارة في أتمتة لوحات مؤشرات الأداء المالية باستخدام Power BI و Microsoft Fabric، وتطوير لوحات تحليلات المباريات من واجهات برمجة التطبيقات.",
      paragraph2:
        "تعزيز الكفاءة التشغيلية من خلال تقليل المهام اليدوية في Excel في الاتحاد الآسيوي لكرة القدم. متمكن في برمجة Python وعمليات ETL. جاهز لاستثمار الخبرة التحليلية لدفع اتخاذ القرارات المستندة إلى البيانات في بيئة مليئة بالتحديات.",
      paragraph3: "",
      sectionHeadings: {
        journey: "مسيرتي",
        careerHighlights: "أبرز الإنجازات المهنية",
        techStack: "المهارات التقنية",
        careerGoals: "الأهداف المهنية",
        personalAttributes: "السمات الشخصية"
      },
      highlights: [
        {
          id: "ai-engineer",
          title: "مهندس ذكاء اصطناعي في أورورايز للذكاء الاصطناعي",
          description: "أعمل حالياً كمهندس ذكاء اصطناعي لتقديم حلول الأتمتة والذكاء الاصطناعي لعملاء B2B، بما في ذلك تطوير روبوتات المحادثة وأتمتة سير العمل وتخصيص منصة CRM."
        },
        {
          id: "education",
          title: "التميز الأكاديمي",
          description: "تخرجت بدرجة البكالوريوس في علوم الكمبيوتر متخصصاً في علوم البيانات من جامعة الوسائط المتعددة، مع التركيز على تقنيات التعلم الآلي والتحليل الإحصائي."
        },
        {
          id: "internship",
          title: "مشروع بيانات الاتحاد الآسيوي",
          description: "طورت لوحة معلومات تحليلات المباريات في Power BI بدمج واجهتي برمجة تطبيقات لكرة القدم؛ صممت عمليات ETL وهيكلت أربعة جداول علائقية، مما أدى إلى اعتماد المستخدمين خلال فترة التدريب."
        },
        {
          id: "skills",
          title: "الكفاءة التقنية",
          description: "أتقنت مجموعة متنوعة من التقنيات بما في ذلك Python و PyTorch و TensorFlow و scikit-learn و pandas و NumPy وأدوات تصور البيانات مع توسيع المعرفة باستمرار في مجالات الذكاء الاصطناعي الناشئة."
        }
      ],
      careerGoals: [
        "أن أصبح عالم بيانات رئيسي متخصص في التحليلات التنبؤية",
        "السعي للحصول على شهادات متقدمة في التعلم الآلي والذكاء الاصطناعي",
        "المساهمة في مشاريع مفتوحة المصدر في مجتمع علوم البيانات"
      ],
      personalAttributes: {
        analyticalThinker: {
          title: "مفكر تحليلي",
          description: "معالجة المشكلات بشكل منهجي ومنظم"
        },
        continuousLearner: {
          title: "متعلم مستمر",
          description: "البحث باستمرار عن المعرفة والمهارات الجديدة"
        },
        detailOriented: {
          title: "مهتم بالتفاصيل",
          description: "اهتمام دقيق بدقة البيانات وجودتها"
        },
        adaptable: {
          title: "قابل للتكيف",
          description: "التكيف السريع مع التقنيات والتحديات الجديدة"
        }
      },
      contactCTA: "دعنا نناقش كيف يمكنني المساهمة في فريقك"
    },

    // Skills section
    skills: {
      title: "المهارات",
      subtitle: "خبرة في مختلف مجالات علوم البيانات والهندسة",
      tabs: {
        technical: "المهارات التقنية",
        soft: "المهارات الشخصية",
      },
      categories: {
        technicalSkills: "المهارات التقنية",
        programmingLanguages: "لغات البرمجة",
        toolsFrameworks: "الأدوات والأطر",
        dataEngineering: "هندسة وتنظيف البيانات",
        machineLearning: "التعلم الآلي والعميق",
        nlp: "معالجة اللغة الطبيعية",
        businessIntelligence: "ذكاء الأعمال والتصور",
        webDev: "الويب وعمليات التطوير",
      },
      technicalDescription: {
        dataEngineering: "كفاءة في تحويل البيانات وتنظيفها وتطوير خطوط أنابيب ETL",
        machineLearning: "خبرة في تطوير ونشر نماذج التعلم الآلي لمختلف التطبيقات",
        deepLearning: "خبرة في الشبكات العصبية وهندسة التعلم العميق",
        dataAnalysis: "مهارات تحليلية قوية مع التركيز على استخراج رؤى قابلة للتنفيذ",
        nlp: "معرفة بمعالجة النصوص ونماذج اللغة للتطبيقات النصية",
        businessIntelligence: "إنشاء لوحات المعلومات والتصورات لاتخاذ القرارات التجارية",
      },
      languagesDescription: {
        python: "اللغة الأساسية لعلوم البيانات وسير عمل ML/DL",
        sql: "استعلامات قواعد البيانات واستخراج البيانات ومعالجتها",
        typescript: "تطوير الويب وتطبيقات الواجهة الأمامية",
        java: "تطبيقات الخلفية وأنظمة المؤسسات",
      },
      toolsDescription: {
        pandas: "مكتبات معالجة البيانات وتجهيزها",
        scikit: "خوارزميات التعلم الآلي وتطوير النماذج",
        tensorflow: "أطر التعلم العميق لتطوير الشبكات العصبية",
        pytorch: "تنفيذ التعلم العميق الموجه للبحث",
        powerbi: "ذكاء الأعمال وإنشاء لوحات المعلومات التفاعلية",
        huggingface: "نماذج معالجة اللغة الطبيعية وتنفيذ هندسة المحولات",
        nextjs: "إطار React لتطوير تطبيقات الويب",
        fastapi: "بناء واجهات برمجة التطبيقات وخدمات الويب عالية الأداء",
      },
      softSkills: {
        communication: {
          name: "التواصل",
          description: "نقل رؤى البيانات المعقدة بفعالية إلى أصحاب المصلحة",
        },
        teamwork: {
          name: "العمل الجماعي",
          description: "التعاون عبر الإدارات لتحقيق أهداف المشروع",
        },
        problemSolving: {
          name: "حل المشكلات",
          description: "تقسيم المشكلات المعقدة إلى مكونات قابلة للإدارة",
        },
        criticalThinking: {
          name: "التفكير النقدي",
          description: "تحليل المعلومات بموضوعية لاتخاذ أحكام منطقية",
        },
        timeManagement: {
          name: "إدارة الوقت",
          description: "تحديد أولويات المهام وتلبية المواعيد النهائية بكفاءة",
        },
        creativity: {
          name: "الإبداع",
          description: "تطوير نهج مبتكر لتحديات البيانات",
        },
        adaptability: {
          name: "القدرة على التكيف",
          description: "التكيف السريع مع التقنيات والمنهجيات الجديدة",
        },
        leadership: {
          name: "القيادة",
          description: "توجيه الفرق والمشاريع نحو نتائج ناجحة",
        },
      },
      hoverMessage: "حرك المؤشر فوق أشرطة المهارات لمزيد من التفاصيل",
    },

    // Projects section
    projects: {
      title: "المشاريع",
      subtitle: "حلول مبتكرة ذات تأثير قابل للقياس",
      showMore: "عرض المزيد",
      showLess: "عرض أقل",
      overview: "نظرة عامة",
      challenges: "التحديات",
      solutions: "الحلول",
      results: "النتائج",
      featuredProject: "مشروع مميز",

      projectList: [
        {
          id: "sports-analytics",
          title: "لوحة تحليلات رياضية",
          badge: "Power BI",
          description: "لوحة تحليلات رياضية شاملة لتحليل مباريات كرة القدم وتتبع أداء اللاعبين.",
          tags: ["Power BI", "تصور البيانات", "تحليلات الرياضة"],
          detailedDescription: "تنفيذ لوحة معلومات تفاعلية في Power BI للاتحاد الآسيوي لكرة القدم (AFC) لتحليل إحصائيات مباريات كرة القدم وأداء اللاعبين ومقاييس الفريق. يجمع الحل البيانات من نقاط نهاية API متعددة، ويحولها ويصورها في تقارير ديناميكية سهلة الاستخدام.",
          challenges: [
            "مصادر وتنسيقات بيانات متعددة: الحاجة إلى دمج وتحويل البيانات من نقاط نهاية API مختلفة (المباريات، اللاعبين) بهياكل متنوعة.",
            "عملية تحديث يدوية: تطلب نهج تحديث آمن ويدوي بسبب قيود الشبكة وقيود الوصول إلى API.",
            "قيود الأمان: كانت لوحة المعلومات بحاجة إلى أن تكون متاحة للجمهور، ولكن يجب أن يظل مصدر البيانات الأساسي محميًا داخل شبكة المنظمة.",
            "اتساق ودقة البيانات: ضمان بقاء معلومات الفريق واللاعب والمباراة متزامنة عبر مختلف الجداول والصفحات."
          ],
          solutions: [
            "ETL قوي ونمذجة البيانات: إنشاء مخطط محدد جيدًا واستخدام Power Query لتنظيف وتحويل وتوحيد بيانات المباراة/اللاعبين في جداول منظمة (المباريات، الفرق، الخصوم، اللاعبين).",
            "التصورات التفاعلية: بناء صفحات مخصصة (النتائج، الأهداف، المراكز، خريطة الفرق، خريطة اللاعبين، الجداول) مع مرشحات مخصصة (المباريات، الفرق، اللاعبين) لاستكشاف البيانات بشكل تفصيلي.",
            "الأمان والتحكم في الوصول: نشر رابط لوحة المعلومات العامة مع تقييد الوصول إلى API/مصدر البيانات إلى الشبكة الداخلية، وتحقيق التوازن بين الانفتاح والأمان.",
            "خطة التوثيق والصيانة: توفير وثائق مشروع واضحة، بما في ذلك مخططات البيانات وخطوات التحويل وإجراء التحديث اليدوي للحفاظ على سلامة البيانات.",
          ],
          results: [
            "تعزيز اتخاذ القرار: يمكن لأصحاب المصلحة في الاتحاد الآسيوي لكرة القدم استكشاف اتجاهات الأداء وإحصائيات اللاعبين ونتائج المباريات بسهولة، مما يؤدي إلى قرارات استراتيجية أكثر استنارة.",
            "تحسين الوصول إلى البيانات: تقوم لوحة المعلومات بتمركز المقاييس الرئيسية وتسمح بالتصفية والتحليل السريع والبديهي عبر الفرق والبطولات والأطر الزمنية.",
            "أساس قابل للتوسع: النموذج النمطي للبيانات والتوثيق الواضح يتيح التوسعات المستقبلية (مثل التحديث التلقائي مع بوابة البيانات، وإضافة المزيد من المنافسات).",
            "تعليقات إيجابية من أصحاب المصلحة: حازت واجهة لوحة المعلومات سهلة الاستخدام والتغطية الشاملة لبيانات الاتحاد الآسيوي لكرة القدم على قبول قوي بين المستخدمين غير التقنيين والتقنيين على حد سواء.",
          ],
          liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTBkZTJmYTgtYzNlOC00YmY0LWJmN2ItNjY2ODU0NzM4MDQyIiwidCI6IjdlMGI1ZmNmLTEyYzQtNGVmZi05NmI2LTQ2NjRmMjVkYzdkYSIsImMiOjEwfQ%3D%3D",
          image: "/images/projects/Asian_Football_Confederation.svg",
          featured: true
        },
        {
          id: "forgery-detection",
          title: "تكوين التزوير باستخدام ViT & ResNet",
          badge: "تعلم عميق",
          description: "نظام مختلط ResNet-50 + Vision Transformer يصنف الوسائط كحقيقية أو مزورة أو معالجة بدقة 95.36%.",
          tags: ["Python", "PyTorch", "ResNet-50", "ViT", "TorchScript", "Flask"],
          detailedDescription: "نظام تعلم عميق حالة الصدارة لكشف التزوير والتعديل والوسائط المزيفة بدقة 95.36%. ينفذ بنية ResNet50 + Vision Transformer (ViT) المختلطة التي تتفوق في تحديد المحتوى المولد بالذكاء الاصطناعي.",
          challenges: [
            "عدم توازن الفئات بين العينات الحقيقية والمصنعة",
            "بصمة VRAM العالية لـ ViT (تم حلها عبر تحسين TorchScript)",
            "إنشاء واجهة عرض Flask سهلة الاستخدام بالسحب والإفلات"
          ],
          solutions: [
            "دمج قوة استخراج الميزات المحلية لـ ResNet-50 مع نمذجة السياق العالمي لمشفر ViT ذو 6 طبقات",
            "اكتشاف أن 20% فقط من البيانات تحقق أقصى دقة",
            "تنفيذ تحسين TorchScript لتقليل متطلبات الذاكرة"
          ],
          results: [
            "تحقيق دقة تحقق 95.36% في تصنيف الوسائط كحقيقية أو مزيفة أو معدلة",
            "تقليل وقت التدريب بنسبة 40% مع أخذ عينات البيانات المحسنة",
            "إنشاء عرض توضيحي بديهي للمستخدمين غير التقنيين"
          ],
          githubUrl: "https://github.com/aminshennan/Forgery_Detection_with_ViT_and_RestNet",
          image: "/images/projects/forgery-detection.jpg"
        },
        {
          id: "scientific-paper-summarizer",
          title: "ملخص البحث العلمي (LoRA FLAN-T5-XXL)",
          badge: "نماذج اللغة الكبيرة",
          description: "مسار إنهائي: جمع 200 ألف بحث على الإنترنت → LoRA-tune 11B FLAN-T5-XXL → خدمة ملخصات مستندية عبر واجهة Flask UI.",
          tags: ["Python", "Hugging Face Transformers", "LoRA", "Flask", "معالجة اللغة", "محولات"],
          detailedDescription: "خط أنابيب شامل لتلخيص الأوراق العلمية: استخراج البيانات من arXiv → ضبط FLAN-T5-XXL باستخدام LoRA → عرض توضيحي Flask، مع ملفات تفصيلية للتحليل والتقارير والشرائح.",
          challenges: [
            "حدود الذاكرة عند تحميل نموذج 11 مليار معلمة",
            "تنظيف النص الضوضائي من مستخرجات PDF",
            "تصميم تقييم لإثبات فعالية LoRA"
          ],
          solutions: [
            "استخدام LoRA + تكميم 8-بت لضبط FLAN-T5-XXL على أجهزة الكمبيوتر العادية",
            "زيادة 2.6 نقطة ROUGE-1 مع تحديث أقل من 1% من المعلمات",
            "تنفيذ خط أنابيب قوي لتنظيف البيانات"
          ],
          results: [
            "تحسين جودة الملخص بمقدار 2.6 نقطة ROUGE-1 مقارنة بالأساس",
            "تقليل متطلبات ذاكرة التدريب بنسبة 75%",
            "إنشاء واجهة بديهية للمستخدمين غير التقنيين"
          ],
          githubUrl: "https://github.com/aminshennan/Scientific-Paper-Summarization-via-LoRA-Tuned-FLAN-T5-XXL-",
          image: "/images/projects/Scientific Paper Summarization.jpg"
        },
        {
          id: "intelligent-parking",
          title: "نظام الموقف الذكي",
          badge: "رؤية حاسوبية",
          description: "حل YOLOv3 + OpenCV يقوم بعد المركبات، ويكتشف المواقف الفارغة، ويصنف ألوان المركبات في الوقت الفعلي.",
          tags: ["Python", "YOLOv3", "OpenCV", "Computer Vision", "Jupyter"],
          detailedDescription: "حل YOLOv3 + OpenCV يقوم بعد المركبات، ويكتشف المواقف الفارغة، ويصنف ألوان المركبات في الوقت الفعلي.",
          challenges: [
            "مجموعة بيانات محدودة من 95 صورة فقط (تم التخفيف من خلال التعزيز)",
            "موازنة سرعة الاستدلال مع دقة الكشف",
            "مزامنة مهام الرؤية الحاسوبية المتعددة في خط أنابيب واحد"
          ],
          solutions: [
            "نشر YOLOv3 للكشف عن المركبات/المواقف",
            "إرفاق تصنيف الألوان ولوحة التحليلات لتحسين التدفق",
            "تنفيذ تعزيز البيانات لتوسيع بيانات التدريب المحدودة"
          ],
          results: [
            "دقة 90% في كشف المركبات/المواقف",
            "تقليل وقت إدارة المواقف بنسبة 65%",
            "تحسين استخدام مواقف السيارات بنسبة 30%"
          ],
          githubUrl: "https://github.com/aminshennan/Car-Parking-System",
          image: "/images/projects/intelligent-parking.jpg"
        },
        {
          id: "sentiment-analysis",
          title: "تحليل المشاعر من مراجعات الثياب النسائية",
          badge: "معالجة اللغة",
          description: "يقارن النماذج RNN، CNN و FNN على ~23k مراجعات التجارة الإلكترونية لتوقع مشاعر العميل.",
          tags: ["TensorFlow/Keras", "Python", "GloVe", "Jupyter", "معالجة اللغة"],
          detailedDescription: "مشروع تعلم الآلة يطبق نماذج RNN، CNN، و FNN على تحليل المشاعرات التجارية الإلكترونية للمراجعات. الدراسة تقييم أداء النموذج وتوفير الإفادات لصناعة التجارة الإلكترونية.",
          challenges: [
            "التعامل مع الفئات المتعادلة بين الإيجابية والسلبية",
            "تحسين التضمينات (GloVe) وطول السلسلة",
            "تقديم النتائج للمستخدمين غير التقنيين"
          ],
          solutions: [
            "مرجعين ثلاث نماذج عصرية",
            "أظهر RNN أفضل F1 بينما CNN عند نصف سرعة التنفيذ هو ملائم للإنتاج",
            "نفذ توزيع الفئة للتعامل مع البيانات غير المتوازنة"
          ],
          results: [
            "تحقق دقة 85٪ F1 مع نموذج RNN",
            "تقدم نموذج CNN عند نصف سرعة التنفيذ بخفض دقة فقط 3٪",
            "إستخراج الإفادات المفعلة من ملاحظات العميل"
          ],
          githubUrl: "https://github.com/aminshennan/Sentiment-Analysis-of-Women-s-Clothing-E-Commerce-Reviews-Using-Machine-Learning",
          image: "/images/projects/sentiment-analysis.jpg"
        },
        {
          id: "sign-language",
          title: "تحليل اللغة الإشارية العربية",
          badge: "رؤية حاسوبية",
          description: "نظام اللغة الإشارية العربية يجمع تكوين اليد باستخدام YOLO مع أطروحات CNN/LSTM/GNN.",
          tags: ["TensorFlow", "YOLO", "OpenCV", "Python", "رؤية حاسوبية"],
          detailedDescription: "هذا المشروع يركز على تطوير نظام اللغة الإشارية العربية الكامل باستخدام تقنيات التعلم العميق المتقدمة.",
          challenges: [
            "توثيق مناطق اليد بدقة",
            "تدريب النماذج الزمنية على مجموعات مقتصرة على الفيديو",
            "إنفاذ مثال تطبيقي حقيقي بأطراف عمل hardware"
          ],
          solutions: [
            "كشف مناطق اليد باستخدام YOLO",
            "إرسال سلاسل إلى الشبكات العميقة",
            "مقارنة الأطراف لتحقيق أقصى دقة"
          ],
          results: [
            "تحقق دقة التحليل المثالي 88٪ على إشارات اللغة الإشارية",
            "إنشاء مثال تطبيقي حقيقي بأداء 15 FPS",
            "تقليل حواجز التواصل للغة الإشارية العربية"
          ],
          githubUrl: "https://github.com/aminshennan/Hand-Sign-language-detection",
          image: "/images/projects/Arabic Sign Language Recognition System.jpg"
        },
        {
          id: "portfolio-site",
          title: "موقع محفظة شخصية",
          badge: "تطوير الويب",
          description: "محفظة برمجية عريضة الإطارات مع الوضعين المظلم/الضوء، دعم PWA، وتخطيط RTL العربي.",
          tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
          detailedDescription: "محفظة برمجية عريضة الإطارات مع الوضعين المظلم/الضوء، دعم PWA، وتخطيط RTL العربي.",
          challenges: [
            "ضمان دعم RTL لا ينكسر التحفيز",
            "الحفاظ على الأداء عالي (LCP < 1.8s) على الجوال",
            "SEO لكلمات البحث اللاتينية والعربية"
          ],
          solutions: [
            "إنشاء باستخدام Next.js 15، TypeScript و Tailwind CSS",
            "يشمل حركات Framer Motion و Vercel CI/CD",
            "نفذ تصميم مستجيب لجميع حجم الجهاز"
          ],
          results: [
            "تحقق أداء المفاضلة 95+ للأداء",
            "تبديل اللغة السلس مع الحفاظ على التحفيز",
            "تحسين المرونة في نتائج البحث"
          ],
          githubUrl: "https://github.com/aminshennan/portfolio",
          image: "/images/projects/portfolio-site.jpg"
        },
        {
          id: "marital-satisfaction",
          title: "تعدين بيانات الرضا الزوجي",
          badge: "تعدين البيانات",
          description: "يطبق تصنيف، تجميع، و FP-Growth ARM على بيانات الاستفسار من 45 دولة لنمذجة الجودة العلاقية.",
          tags: ["scikit-learn", "Python", "Pandas", "NumPy", "Data Mining"],
          detailedDescription: "يطبق تصنيف، تجميع، و FP-Growth ARM على بيانات الاستفسار من 45 دولة لنمذجة الجودة العلاقية.",
          challenges: [
            "الأبعاد العالية مع ميزات مختلطة/مقياس الإيجابية والسلبية",
            "توازن التفسير ودقة النموذج",
            "التحيز الثقافي في إجابات الاستفسار"
          ],
          solutions: [
            "يجمع Decision Trees، SVM، K-Means، و Mining القواعد لاستخراج الأنماط المفعلة",
            "تطبيق تقنيات تقليل الأبعاد",
            "نفذ طرق التحقق المتقدمة المتقاطعة"
          ],
          results: [
            "تحديد المعلمين الرئيسيين لرضا الزواج عبر الثقافات",
            "اكتشف 15 قاعدة علاقة مهمة",
            "إنشاء الرسوم البيانية للمستخدمين غير التقنيين"
          ],
          githubUrl: "https://github.com/aminshennan/Marital-Satisfaction-Analysis",
          image: "/images/projects/Marital-Satisfaction Data Mining.jpg"
        }
      ],

      // Project details
      sportsAnalytics: {
        description:
          "لوحة تحليلات رياضية شاملة لتحليل مباريات كرة القدم وتتبع أداء اللاعبين.",
        detailedDescription:
          "تنفيذ لوحة معلومات تفاعلية في Power BI للاتحاد الآسيوي لكرة القدم (AFC) لتحليل إحصائيات مباريات كرة القدم وأداء اللاعبين ومقاييس الفريق. يجمع الحل البيانات من نقاط نهاية API متعددة، ويحولها ويصورها في تقارير ديناميكية سهلة الاستخدام.",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiOTBkZTJmYTgtYzNlOC00YmY0LWJmN2ItNjY2ODU0NzM4MDQyIiwidCI6IjdlMGI1ZmNmLTEyYzQtNGVmZi05NmI2LTQ2NjRmMjVkYzdkYSIsImMiOjEwfQ%3D%3D",
        challenges: {
          1: "مصادر وتنسيقات بيانات متعددة: الحاجة إلى دمج وتحويل البيانات من نقاط نهاية API مختلفة (المباريات، اللاعبين) بهياكل متنوعة.",
          2: "عملية تحديث يدوية: تطلب نهج تحديث آمن ويدوي بسبب قيود الشبكة وقيود الوصول إلى API.",
          3: "قيود الأمان: كانت لوحة المعلومات بحاجة إلى أن تكون متاحة للجمهور، ولكن يجب أن يظل مصدر البيانات الأساسي محميًا داخل شبكة المنظمة.",
          4: "اتساق ودقة البيانات: ضمان بقاء معلومات الفريق واللاعب والمباراة متزامنة عبر مختلف الجداول والصفحات.",
        },
        solutions: {
          1: "ETL قوي ونمذجة البيانات: إنشاء مخطط محدد جيدًا واستخدام Power Query لتنظيف وتحويل وتوحيد بيانات المباراة/اللاعبين في جداول منظمة (المباريات، الفرق، الخصوم، اللاعبين).",
          2: "التصورات التفاعلية: بناء صفحات مخصصة (النتائج، الأهداف، المراكز، خريطة الفرق، خريطة اللاعبين، الجداول) مع مرشحات مخصصة (المباريات، الفرق، اللاعبين) لاستكشاف البيانات بشكل تفصيلي.",
          3: "الأمان والتحكم في الوصول: نشر رابط لوحة المعلومات العامة مع تقييد الوصول إلى API/مصدر البيانات إلى الشبكة الداخلية، وتحقيق التوازن بين الانفتاح والأمان.",
          4: "خطة التوثيق والصيانة: توفير وثائق مشروع واضحة، بما في ذلك مخططات البيانات وخطوات التحويل وإجراء التحديث اليدوي للحفاظ على سلامة البيانات.",
        },
        results: {
          1: "تعزيز اتخاذ القرار: يمكن لأصحاب المصلحة في الاتحاد الآسيوي لكرة القدم استكشاف اتجاهات الأداء وإحصائيات اللاعبين ونتائج المباريات بسهولة، مما يؤدي إلى قرارات استراتيجية أكثر استنارة.",
          2: "تحسين الوصول إلى البيانات: تقوم لوحة المعلومات بتمركز المقاييس الرئيسية وتسمح بالتصفية والتحليل السريع والبديهي عبر الفرق والبطولات والأطر الزمنية.",
          3: "أساس قابل للتوسع: النموذج النمطي للبيانات والتوثيق الواضح يتيح التوسعات المستقبلية (مثل التحديث التلقائي مع بوابة البيانات، وإضافة المزيد من المنافسات).",
          4: "تعليقات إيجابية من أصحاب المصلحة: حازت واجهة لوحة المعلومات سهلة الاستخدام والتغطية الشاملة لبيانات الاتحاد الآسيوي لكرة القدم على قبول قوي بين المستخدمين غير التقنيين والتقنيين على حد سواء.",
        },
      },

      financialReporting: {
        description: "نظام تقارير مالية آلي باستخدام Python و Microsoft Fabric لمعالجة البيانات بسلاسة.",
        detailedDescription:
          "بناء حل أتمتة شامل للتقارير المالية يستخرج البيانات من مصادر متعددة ويعالجها وينتج تقارير موحدة.",
        challenges: {
          1: "كانت عملية إعداد التقارير اليدوية تستغرق وقتًا طويلاً وعرضة للأخطاء",
          2: "كانت البيانات بحاجة إلى التحقق منها وتحويلها قبل إعداد التقارير",
        },
        solutions: {
          1: "تنفيذ نصوص Python لأتمتة استخراج البيانات وتحويلها",
          2: "استخدام Microsoft Fabric لتنظيم سير العمل والجدولة",
        },
        results: {
          1: "تقليل وقت إعداد التقارير من يومين إلى ساعتين",
          2: "القضاء على الأخطاء اليدوية وتحسين دقة البيانات",
        },
      },

      customerSegmentation: {
        description: "نموذج تعلم آلي لتقسيم العملاء لتحديد مجموعات العملاء المميزة للتسويق المستهدف.",
        detailedDescription:
          "تطوير نموذج تجميع لتقسيم العملاء بناءً على سلوك الشراء والتركيبة السكانية ومقاييس المشاركة.",
        challenges: {
          1: "تحديد العدد الأمثل لشرائح العملاء",
          2: "التعامل مع البيانات المفقودة والقيم المتطرفة في مجموعة بيانات العملاء",
        },
        solutions: {
          1: "استخدام تحليل السيلويت وطريقة الكوع لتحديد العدد الأمثل للمجموعات",
          2: "تنفيذ تقنيات معالجة مسبقة قوية للتعامل مع القيم المفقودة والقيم المتطرفة",
        },
        results: {
          1: "تحديد 5 شرائح عملاء متميزة ذات خصائص فريدة",
          2: "أدت حملات التسويق المستهدفة إلى زيادة معدلات التحويل بنسبة 25٪",
        },
      },

      sentimentAnalysis: {
        description:
          "أداة تحليل المشاعر القائمة على معالجة اللغة الطبيعية لتحليل تعليقات العملاء وذكرهم على وسائل التواصل الاجتماعي.",
        detailedDescription:
          "إنشاء نظام تحليل المشاعر الذي يعالج مراجعات العملاء ومنشورات وسائل التواصل الاجتماعي لتحديد المشاعر واستخراج المواضيع الرئيسية.",
        challenges: {
          1: "التعامل مع اللغة المحددة بالسياق والسخرية في بيانات النص",
          2: "معالجة كميات كبيرة من النص غير المنظم بكفاءة",
        },
        solutions: {
          1: "تنفيذ نهج هجين يجمع بين الطرق المستندة إلى المعجم وطرق التعلم الآلي",
          2: "استخدام المعالجة المتوازية للتعامل مع مجموعات البيانات الكبيرة بكفاءة",
        },
        results: {
          1: "تحقيق دقة 85٪ في تصنيف المشاعر",
          2: "تحديد نقاط الألم الرئيسية للعملاء التي أبلغت عن تحسينات المنتج",
        },
      },
    },

    // Experience section
    experience: {
      title: "الخبرة والتعليم",
      subtitle: "رحلتي المهنية وخلفيتي الأكاديمية",
      timeline: [
        {
          title: "مهندس الذكاء الاصطناعي",
          company: "أورورايز للذكاء الاصطناعي",
          period: "04/2025 - الحالي",
          description: [
            "العمل مع فريق ناشئ صغير لتقديم حلول الأتمتة والذكاء الاصطناعي لعملاء B2B على منصة CRM المخصصة للشركة، Magic.ai",
            "دعم المشاريع المتعلقة بسير العمل الآلي، تطوير روبوتات المحادثة، إعداد الامتثال، وإنشاء مواقع الويب المخصصة لمتطلبات العملاء",
            "المساعدة في إدارة WeBlast وتسليم الخدمات من جانب العميل لتحسين مشاركة العملاء والعمليات",
            "المساهمة في مهام إدارة المشاريع في بيئة ناشئة، والتنسيق بين التنفيذ التقني واحتياجات العملاء",
          ],
          type: "work",
          location: "سايبرجايا، ماليزيا",
          skills: ["الأتمتة", "أنظمة CRM", "تطوير روبوتات المحادثة", "دعم العملاء", "إدارة المشاريع", "عمليات الشركات الناشئة"],
        },
        {
          title: "متدرب محلل بيانات",
          company: "SRKK",
          period: "10/2023 - 01/2024",
          description: [
            "أتمتة لوحات مؤشرات الأداء المالية في Power BI و Microsoft Fabric، باستخدام تدفقات بيانات Python المبرمجة وجدولة التحديثات المحسنة",
            "تطوير رسومات تفاعلية لتبسيط عمليات إعداد التقارير المالية",
          ],
          type: "work",
          location: "سايبرجايا، ماليزيا",
          skills: ["Power BI", "Python", "Microsoft Fabric", "تصور البيانات", "ETL"],
        },
        {
          title: "متدرب محلل بيانات",
          company: "الاتحاد الآسيوي لكرة القدم",
          period: "07/2023 - 10/2023",
          description: [
            "تصميم لوحة معلومات تحليلات المباريات في Power BI بدمج واجهتي برمجة تطبيقات لكرة القدم؛ تصميم عمليات ETL في Power Query وهيكلة أربعة جداول علائقية، مما أدى إلى اعتماد المستخدمين خلال فترة التدريب",
            "دمج أكثر من 15 شريحة تفاعلية (البطولات، الفرق، اللاعبين) وبطاقات مؤشرات الأداء الرئيسية، مما أدى إلى تقليل كبير في أعباء العمل اليدوية في Excel للمنسقين",
          ],
          type: "work",
          location: "سايبرجايا، ماليزيا",
          skills: ["Power BI", "تحليلات الرياضة", "تصور البيانات", "ETL", "تكامل واجهات برمجة التطبيقات"],
        },
        {
          title: "بكالوريوس علوم الكمبيوتر",
          institution: "جامعة الوسائط المتعددة",
          period: "04/2020 - 07/2024",
          description: [
            "تخصص في علوم البيانات",
            "المقررات ذات الصلة: التعلم الآلي، تنقيب البيانات، التحليل الإحصائي، تحليلات البيانات الضخمة",
            "المشاركة في مختلف مسابقات علوم البيانات والهاكاثونات",
          ],
          type: "education",
          location: "سيبرجايا، سيلانجور",
          skills: ["علوم البيانات", "التعلم الآلي", "التحليل الإحصائي"],
          achievements: [{ text: "تخصص علوم البيانات" }],
        },
      ],
    },

    // Volunteer section
    volunteer: {
      title: "الخبرة التطوعية",
      subtitle: "أدوار القيادة والمشاركة المجتمعية",
      responsibilities: "المسؤوليات",
      keyAchievements: "الإنجازات الرئيسية",
      leadershipExperience: "خبرة قيادية",
      roles: [
        {
          title: "المؤسس والرئيس",
          organization: "جمعية الثقافة السودانية - جامعة الوسائط المتعددة",
          period: "2023 - 2024",
          description: [
            "قيادة وتنظيم الفعاليات الثقافية والخيرية، مما عزز بشكل كبير المشاركة المجتمعية",
            "تمثيل مجتمع السودانيين في جامعة الوسائط المتعددة في المؤتمرات واللقاءات الوطنية",
            "المساهمة في جهود جمع التبرعات للمجتمعات السودانية النازحة",
          ],
          achievements: [
            "تنظيم أكثر من 5 فعاليات ثقافية ناجحة بحضور أكثر من 100 شخص",
            "جمع الأموال للقضايا الإنسانية",
            "إقامة شراكات مع منظمات ثقافية أخرى",
          ],
        },
        {
          title: "عضو لجنة الفعاليات",
          organization: "جمعية الأنشطة الخارجية والترفيهية - جامعة الوسائط المتعددة",
          period: "2022 - 2024",
          description: [
            "تنظيم والمشاركة في مختلف الأنشطة الخارجية، بما في ذلك التخييم، المشي لمسافات طويلة، تسلق الجبال، تسلق الجدران، تسلق الصخور، استكشاف الكهوف، والتجديف",
            "إرشاد أعضاء اللجنة الجدد، وتعزيز مهارات القيادة والعمل الجماعي",
          ],
          achievements: [
            "تنسيق أكثر من 10 رحلات استكشافية خارجية",
            "تطوير بروتوكولات السلامة للأنشطة عالية المخاطر",
            "زيادة عضوية الجمعية بنسبة 30٪",
          ],
        },
      ],
    },

    // Contact section
    contact: {
      title: "اتصل بي",
      subtitle: "لنناقش مشروعك القادم",
      email: "البريد الإلكتروني",
      emailAddress: "aminshennan@gmail.com",
      phone: "الهاتف",
      phoneNumber: "+60 173493290",
      linkedin: "لينكد إن",
      linkedinHandle: "aminshennan",
      linkedinUrl: "https://linkedin.com/in/aminshennan",
      github: "جيتهب",
      githubHandle: "aminshennan",
      githubUrl: "https://github.com/aminshennan",
      getInTouch: "تواصل معي",
      sendMessage: "أرسل لي رسالة",
      responseTime: "سرعة وقت الاستجابة",
      responseMessage: "عادة ما أرد على الرسائل خلال 24-48 ساعة. للأمور العاجلة، يُفضل التواصل عبر الهاتف أو لينكد إن.",
      messageSent: "تم إرسال الرسالة بنجاح!",
      thankYouMessage: "شكراً لرسالتك. سأرد عليك في أقرب وقت ممكن.",
      form: {
        name: "الاسم",
        namePlaceholder: "أدخل اسمك الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
        subject: "الموضوع",
        subjectPlaceholder: "ماذا يتعلق هذا؟",
        message: "الرسالة",
        messagePlaceholder: "أخبرني عن مشروعك، متطلباتك، أو أي أسئلة لديك...",
        submit: "إرسال الرسالة"
      }
    },

    // Footer
    footer: {
      description: "عالم بيانات متخصص في حلول التعلم الآلي والذكاء الاصطناعي.",
      quickLinks: "روابط سريعة",
      references: "المراجع",
      copyright: "© 2025 آمن شنان. جميع الحقوق محفوظة.",
      referenceList: [
        {
          name: "أسامة علي عبدالرحمن",
          title: "مستشار هندسة البيانات، SRKK",
          contact: "osama.ali@srkk.com"
        },
        {
          name: "ريبيكا سانثاناسامي",
          title: "مديرة مشاريع تقنية المعلومات، الاتحاد الآسيوي لكرة القدم",
          contact: "rebecca.santhanasamy@the-afc.com"
        }
      ],
      socialLinks: {
        twitter: "https://twitter.com/aminshennan",
        github: "https://github.com/aminshennan",
        linkedin: "https://linkedin.com/in/aminshennan"
      }
    },

    // Language switcher
    language: {
      en: "English",
      ar: "العربية",
    },
  },
};

