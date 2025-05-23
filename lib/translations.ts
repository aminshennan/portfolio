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
      title: "Amin Shennan",
      subtitle: "Data Scientist | Machine Learning Engineer | AI Enthusiast",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      stats: {
        languages: "Programming Languages",
        internships: "Internships",
        projects: "Projects",
        leadership: "Leadership Roles",
      },
    },

    // About section
    about: {
      title: "About Me",
      subtitle: "Transforming complex data into actionable insights",
      paragraph1:
        "I'm an aspiring Data Scientist with a Bachelor's in Computer Science specializing in Data Science.",
      
      paragraph2: "My passion for data science was ignited during my university years, where I discovered the power of extracting meaningful patterns from complex datasets. I approach each project with curiosity and methodical analysis.",
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
          id: "education",
          title: "Academic Excellence",
          description: "Graduated with distinction in Computer Science specialized in Data Science, with a focus on machine learning and statistical analysis techniques."
        },
        {
          id: "internship",
          title: "AFC Data Project",
          description: "Developed a comprehensive sports analytics dashboard for the Asian Football Confederation that transformed raw match data into actionable insights."
        },
        {
          id: "skills",
          title: "Technical Proficiency",
          description: "Mastered a diverse technical stack including Python, R, TensorFlow, and data visualization tools while continuously expanding knowledge in emerging AI fields."
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
      subtitle: "Expertise across the data science spectrum",
      tabs: {
        technical: "Technical Skills",
        soft: "Soft Skills",
      },
      categories: {
        technicalSkills: "Technical Skills",
        programmingLanguages: "Programming Languages",
        toolsFrameworks: "Tools & Frameworks",
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
          image: "/Visual data-bro.png",
          featured: true
        },
        {
          id: "financial-reporting",
          title: "Financial Reporting Automation",
          badge: "Python",
          description: "Automated financial reporting system using Python and Microsoft Fabric for streamlined data processing.",
          tags: ["Python", "Microsoft Fabric", "Automation"],
          detailedDescription: "Built an end-to-end automation solution for financial reporting that extracts data from multiple sources, processes it, and generates standardized reports.",
          challenges: [
            "Manual reporting process was time-consuming and error-prone",
            "Data needed to be validated and transformed before reporting"
          ],
          solutions: [
            "Implemented Python scripts to automate data extraction and transformation",
            "Used Microsoft Fabric for workflow orchestration and scheduling"
          ],
          results: [
            "Reduced reporting time from 2 days to 2 hours",
            "Eliminated manual errors and improved data accuracy"
          ],
          githubUrl: "https://github.com/aminshennan/financial-reporting",
          image: "/Audit-amico.png"
        },
        {
          id: "customer-segmentation",
          title: "Customer Segmentation Model",
          badge: "Machine Learning",
          description: "Machine learning model for customer segmentation to identify distinct customer groups for targeted marketing.",
          tags: ["Python", "Machine Learning", "Clustering"],
          detailedDescription: "Developed a clustering model to segment customers based on purchasing behavior, demographics, and engagement metrics.",
          challenges: [
            "Identifying the optimal number of customer segments",
            "Dealing with missing data and outliers in the customer dataset"
          ],
          solutions: [
            "Used silhouette analysis and elbow method to determine optimal cluster count",
            "Implemented robust preprocessing techniques to handle missing values and outliers"
          ],
          results: [
            "Identified 5 distinct customer segments with unique characteristics",
            "Targeted marketing campaigns resulted in 25% higher conversion rates"
          ],
          githubUrl: "https://github.com/aminshennan/customer-segmentation",
          image: "/Data analysis-amico.png"
        },
        {
          id: "sentiment-analysis",
          title: "Sentiment Analysis Tool",
          badge: "NLP",
          description: "NLP-based sentiment analysis tool for analyzing customer feedback and social media mentions.",
          tags: ["Python", "NLP", "Text Analysis"],
          detailedDescription: "Created a sentiment analysis system that processes customer reviews and social media posts to determine sentiment and extract key themes.",
          challenges: [
            "Handling context-specific language and sarcasm in text data",
            "Processing large volumes of unstructured text efficiently"
          ],
          solutions: [
            "Implemented a hybrid approach combining lexicon-based and machine learning methods",
            "Used parallel processing to handle large datasets efficiently"
          ],
          results: [
            "Achieved 85% accuracy in sentiment classification",
            "Identified key customer pain points that informed product improvements"
          ],
          githubUrl: "https://github.com/aminshennan/sentiment-analysis",
          image: "/Artificial intelligence-amico.png"
        }
      ],

      // Project details
      sportsAnalytics: {
        description:
          "Comprehensive sports analytics dashboard for football match analysis and player performance tracking.",
        detailedDescription:
          "Implemented an interactive Power BI dashboard for the Asian Football Confederation (AFC) to analyze football match statistics, player performance, and team metrics. The solution aggregates data from multiple API endpoints, transforming and visualizing it in user-friendly, dynamic reports.",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiOTBkZTJmYTgtYzNlOC00YmY0LWJmN2ItNjY2ODU0NzM4MDQyIiwidCI6IjdlMGI1ZmNmLTEyYzQtNGVmZi05NmI2LTQ2NjRmMjVkYzdkYSIsImMiOjEwfQ%3D%3D",
        challenges: {
          1: "Multiple Data Sources & Formats: Needed to integrate and transform data from different API endpoints (Fixtures, Players) with varying structures.",
          2: "Manual Refresh Process: Required a secure, manual refresh approach due to network constraints and API access limitations.",
          3: "Security Constraints: Dashboard needed to be publicly accessible, yet the underlying data source had to remain protected within the organization's network.",
          4: "Data Consistency & Accuracy: Ensuring that team, player, and match information remained synchronized across various tables and pages.",
        },
        solutions: {
          1: "Robust ETL & Data Modeling: Created a well-defined schema and used Power Query to clean, transform, and unify match/players data into structured tables (Fixtures, Teams, Opponents, Players).",
          2: "Interactive Visualizations: Built dedicated pages (Results, Goals, Positions, Teams Map, Players Map, Tables) with custom filters (Matches, Teams, Players) for granular data exploration.",
          3: "Security & Access Control: Deployed a public dashboard link while restricting API/data source access to the internal network, striking a balance between openness and security.",
          4: "Documentation & Maintenance Plan: Provided clear project documentation, including data schemas, transformation steps, and a manual refresh procedure to maintain data integrity.",
        },
        results: {
          1: "Enhanced Decision-Making: AFC stakeholders can easily explore performance trends, player statistics, and match outcomes, leading to more informed strategic decisions.",
          2: "Improved Data Accessibility: The dashboard centralizes key metrics and allows for quick, intuitive filtering and analysis across teams, tournaments, and timeframes.",
          3: "Scalable Foundation: The modular data model and clear documentation enable future expansions (e.g., automated refresh with a data gateway, adding more competitions).",
          4: "Positive Stakeholder Feedback: The dashboard's user-friendly interface and comprehensive coverage of AFC data garnered strong acceptance among non-technical and technical users alike.",
        },
      },

      financialReporting: {
        description: "Automated financial reporting system using Python and Microsoft Fabric for streamlined data processing.",
        detailedDescription:
          "Built an end-to-end automation solution for financial reporting that extracts data from multiple sources, processes it, and generates standardized reports.",
        challenges: {
          1: "Manual reporting process was time-consuming and error-prone",
          2: "Data needed to be validated and transformed before reporting",
        },
        solutions: {
          1: "Implemented Python scripts to automate data extraction and transformation",
          2: "Used Microsoft Fabric for workflow orchestration and scheduling"
        },
        results: {
          1: "Reduced reporting time from 2 days to 2 hours",
          2: "Eliminated manual errors and improved data accuracy"
        },
      },

      customerSegmentation: {
        description: "Machine learning model for customer segmentation to identify distinct customer groups for targeted marketing.",
        detailedDescription:
          "Developed a clustering model to segment customers based on purchasing behavior, demographics, and engagement metrics.",
        challenges: {
          1: "Identifying the optimal number of customer segments",
          2: "Dealing with missing data and outliers in the customer dataset"
        },
        solutions: {
          1: "Used silhouette analysis and elbow method to determine optimal cluster count",
          2: "Implemented robust preprocessing techniques to handle missing values and outliers"
        },
        results: {
          1: "Identified 5 distinct customer segments with unique characteristics",
          2: "Targeted marketing campaigns resulted in 25% higher conversion rates"
        },
      },

      sentimentAnalysis: {
        description: "NLP-based sentiment analysis tool for analyzing customer feedback and social media mentions.",
        detailedDescription:
          "Created a sentiment analysis system that processes customer reviews and social media posts to determine sentiment and extract key themes.",
        challenges: {
          1: "Handling context-specific language and sarcasm in text data",
          2: "Processing large volumes of unstructured text efficiently"
        },
        solutions: {
          1: "Implemented a hybrid approach combining lexicon-based and machine learning methods",
          2: "Used parallel processing to handle large datasets efficiently"
        },
        results: {
          1: "Achieved 85% accuracy in sentiment classification",
          2: "Identified key customer pain points that informed product improvements"
        },
      },
    },

    // Experience section
    experience: {
      title: "Experience & Education",
      subtitle: "My professional journey and academic background",
      timeline: [
        {
          title: "Data Analyst Intern",
          company: "SRKK",
          period: "11/2023 - 01/2024",
          description: [
            "Developed and maintained interactive financial dashboards in Power BI",
            "Automated data workflows using Microsoft Fabric and Python to enhance reporting processes",
          ],
          type: "work",
          location: "Klang, Selangor",
          skills: ["Power BI", "Python", "Microsoft Fabric", "Data Visualization"],
        },
        {
          title: "Data Analyst Intern",
          company: "Asian Football Confederation",
          period: "07/2023 - 10/2023",
          description: [
            "Designed and implemented a comprehensive sports analytics dashboard in Power BI for match analysis",
            "Enhanced data visualization processes to support decision-making related to team performance and player metrics",
          ],
          type: "work",
          location: "Kuala Lumpur, Kuala Lumpur",
          skills: ["Power BI", "Sports Analytics", "Data Visualization"],
        },
        {
          title: "Bachelor of Computer Science",
          institution: "Multimedia University",
          period: "2020 - 2024",
          description: [
            "Specialized in Data Science",
            "Relevant coursework: Machine Learning, Data Mining, Statistical Analysis, Big Data Analytics",
            "Participated in various data science competitions and hackathons",
          ],
          type: "education",
          location: "Cyberjaya, Selangor",
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
          period: "08/2023 - 10/2024",
          description: [
            "Led and organized cultural and charity events, significantly enhancing community engagement",
            "Represented MMU's Sudanese community at conferences and national-level meetings",
            "Contributed to fundraising efforts for displaced Sudanese communities",
          ],
          achievements: [
            "Successfully organized 5+ cultural events with 100+ attendees",
            "Raised funds for humanitarian causes",
            "Established partnerships with other cultural organizations",
          ],
        },
        {
          title: "Event Committee Member",
          organization: "Outdoor Activities & Recreational Society (OARS) - MMU",
          period: "08/2022 - 07/2024",
          description: [
            "Organized and participated in various outdoor activities, including severe camping, hiking, mountaineering, wall climbing, rock climbing, caving, and kayaking",
            "Mentored new committee members, fostering leadership and teamwork skills",
          ],
          achievements: [
            "Coordinated 10+ outdoor expeditions",
            "Developed safety protocols for high-risk activities",
            "Increased society membership by 30%",
          ],
        },
      ],
    },

    // Contact section
    contact: {
      title: "Contact Me",
      subtitle: "Let's discuss your next project",
      email: "Email",
      emailAddress: "aminshennan@gmail.com",
      phone: "Phone",
      phoneNumber: "+60 11-1234 5678",
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
      copyright: "© 2025 Amin Shennan. All rights reserved.",
      referenceList: [
        {
          name: "Dr. Sarah Johnson",
          title: "Professor of Data Science, Multimedia University",
          contact: "sarah.johnson@mmu.edu.my"
        },
        {
          name: "Ahmed Hassan",
          title: "Head of Analytics, Asian Football Confederation",
          contact: "a.hassan@afc.org"
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
      subtitle: "عالم بيانات | مهندس تعلم آلي | مهتم بالذكاء الاصطناعي",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "اتصل بي",
      stats: {
        languages: "لغات البرمجة",
        internships: "التدريب العملي",
        projects: "المشاريع",
        leadership: "أدوار قيادية",
      },
    },

    // About section
    about: {
      title: "نبذة عني",
      subtitle: "تحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ",
      paragraph1:
        "أنا عالم بيانات طموح حاصل على بكالوريوس في علوم الكمبيوتر متخصص في علوم البيانات. لدي خبرة شاملة في تحليل البيانات والتعلم الآلي والتصور.",
      paragraph2:
        "متمكن في تطوير ونشر حلول قائمة على البيانات، وإنشاء لوحات معلومات تفاعلية، وتطبيق تقنيات التعلم العميق. لقد أظهرت مهارات القيادة ورواية القصص والعرض من خلال قيادة مبادرات ومشاريع المجتمع.",
      paragraph3: "اشتعلت شغفي بعلوم البيانات خلال سنوات الجامعة، حيث اكتشفت قوة استخراج أنماط ذات معنى من مجموعات البيانات المعقدة. أتناول كل مشروع بفضول وتحليل منهجي، سعياً لتقديم حلول توفر قيمة عملية ملموسة.",
      sectionHeadings: {
        journey: "مسيرتي",
        careerHighlights: "أبرز الإنجازات المهنية",
        techStack: "المهارات التقنية",
        careerGoals: "الأهداف المهنية",
        personalAttributes: "السمات الشخصية"
      },
      highlights: [
        {
          id: "education",
          title: "التميز الأكاديمي",
          description: "تخرجت بتفوق في علوم الكمبيوتر متخصصاً في علوم البيانات، مع التركيز على تقنيات التعلم الآلي والتحليل الإحصائي."
        },
        {
          id: "internship",
          title: "مشروع بيانات الاتحاد الآسيوي",
          description: "طورت لوحة معلومات شاملة لتحليلات الرياضة للاتحاد الآسيوي لكرة القدم حولت بيانات المباريات الخام إلى رؤى قابلة للتنفيذ."
        },
        {
          id: "skills",
          title: "الكفاءة التقنية",
          description: "أتقنت مجموعة متنوعة من التقنيات بما في ذلك Python و R و TensorFlow وأدوات تصور البيانات مع توسيع المعرفة باستمرار في مجالات الذكاء الاصطناعي الناشئة."
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
      subtitle: "خبرة في مختلف مجالات علوم البيانات",
      tabs: {
        technical: "المهارات التقنية",
        soft: "المهارات الشخصية",
      },
      categories: {
        technicalSkills: "المهارات التقنية",
        programmingLanguages: "لغات البرمجة",
        toolsFrameworks: "الأدوات والأطر",
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
      hoverMessage: "ضع المؤشر فوق المهارات لمزيد من التفاصيل",
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
            "خطة التوثيق والصيانة: توفير وثائق مشروع واضحة، بما في ذلك مخططات البيانات وخطوات التحويل وإجراء التحديث اليدوي للحفاظ على سلامة البيانات."
          ],
          results: [
            "تعزيز اتخاذ القرار: يمكن لأصحاب المصلحة في الاتحاد الآسيوي لكرة القدم استكشاف اتجاهات الأداء وإحصائيات اللاعبين ونتائج المباريات بسهولة، مما يؤدي إلى قرارات استراتيجية أكثر استنارة.",
            "تحسين الوصول إلى البيانات: تقوم لوحة المعلومات بتمركز المقاييس الرئيسية وتسمح بالتصفية والتحليل السريع والبديهي عبر الفرق والبطولات والأطر الزمنية.",
            "أساس قابل للتوسع: النموذج النمطي للبيانات والتوثيق الواضح يتيح التوسعات المستقبلية (مثل التحديث التلقائي مع بوابة البيانات، وإضافة المزيد من المنافسات).",
            "تعليقات إيجابية من أصحاب المصلحة: حازت واجهة لوحة المعلومات سهلة الاستخدام والتغطية الشاملة لبيانات الاتحاد الآسيوي لكرة القدم على قبول قوي بين المستخدمين غير التقنيين والتقنيين على حد سواء."
          ],
          liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTBkZTJmYTgtYzNlOC00YmY0LWJmN2ItNjY2ODU0NzM4MDQyIiwidCI6IjdlMGI1ZmNmLTEyYzQtNGVmZi05NmI2LTQ2NjRmMjVkYzdkYSIsImMiOjEwfQ%3D%3D",
          image: "/Visual data-bro.png",
          featured: true
        },
        {
          id: "financial-reporting",
          title: "أتمتة التقارير المالية",
          badge: "Python",
          description: "نظام تقارير مالية آلي باستخدام Python و Microsoft Fabric لمعالجة البيانات بسلاسة.",
          tags: ["Python", "Microsoft Fabric", "الأتمتة"],
          detailedDescription: "بناء حل أتمتة شامل للتقارير المالية يستخرج البيانات من مصادر متعددة ويعالجها وينتج تقارير موحدة.",
          challenges: [
            "كانت عملية إعداد التقارير اليدوية تستغرق وقتًا طويلاً وعرضة للأخطاء",
            "كانت البيانات بحاجة إلى التحقق منها وتحويلها قبل إعداد التقارير"
          ],
          solutions: [
            "تنفيذ نصوص Python لأتمتة استخراج البيانات وتحويلها",
            "استخدام Microsoft Fabric لتنظيم سير العمل والجدولة"
          ],
          results: [
            "تقليل وقت إعداد التقارير من يومين إلى ساعتين",
            "القضاء على الأخطاء اليدوية وتحسين دقة البيانات"
          ],
          githubUrl: "https://github.com/aminshennan/financial-reporting",
          image: "/Audit-amico.png"
        },
        {
          id: "customer-segmentation",
          title: "نموذج تقسيم العملاء",
          badge: "تعلم آلي",
          description: "نموذج تعلم آلي لتقسيم العملاء لتحديد مجموعات العملاء المميزة للتسويق المستهدف.",
          tags: ["Python", "تعلم آلي", "تجميع"],
          detailedDescription: "تطوير نموذج تجميع لتقسيم العملاء بناءً على سلوك الشراء والتركيبة السكانية ومقاييس المشاركة.",
          challenges: [
            "تحديد العدد الأمثل لشرائح العملاء",
            "التعامل مع البيانات المفقودة والقيم المتطرفة في مجموعة بيانات العملاء"
          ],
          solutions: [
            "استخدام تحليل السيلويت وطريقة الكوع لتحديد العدد الأمثل للمجموعات",
            "تنفيذ تقنيات معالجة مسبقة قوية للتعامل مع القيم المفقودة والقيم المتطرفة"
          ],
          results: [
            "تحديد 5 شرائح عملاء متميزة ذات خصائص فريدة",
            "أدت حملات التسويق المستهدفة إلى زيادة معدلات التحويل بنسبة 25٪"
          ],
          githubUrl: "https://github.com/aminshennan/customer-segmentation",
          image: "/Data analysis-amico.png"
        },
        {
          id: "sentiment-analysis",
          title: "أداة تحليل المشاعر",
          badge: "معالجة اللغة الطبيعية",
          description: "أداة تحليل المشاعر القائمة على معالجة اللغة الطبيعية لتحليل تعليقات العملاء وذكرهم على وسائل التواصل الاجتماعي.",
          tags: ["Python", "معالجة اللغة الطبيعية", "تحليل النصوص"],
          detailedDescription: "إنشاء نظام تحليل المشاعر الذي يعالج مراجعات العملاء ومنشورات وسائل التواصل الاجتماعي لتحديد المشاعر واستخراج المواضيع الرئيسية.",
          challenges: [
            "التعامل مع اللغة المحددة بالسياق والسخرية في بيانات النص",
            "معالجة كميات كبيرة من النص غير المنظم بكفاءة"
          ],
          solutions: [
            "تنفيذ نهج هجين يجمع بين الطرق المستندة إلى المعجم وطرق التعلم الآلي",
            "استخدام المعالجة المتوازية للتعامل مع مجموعات البيانات الكبيرة بكفاءة"
          ],
          results: [
            "تحقيق دقة 85٪ في تصنيف المشاعر",
            "تحديد نقاط الألم الرئيسية للعملاء التي أبلغت عن تحسينات المنتج"
          ],
          githubUrl: "https://github.com/aminshennan/sentiment-analysis",
          image: "/Artificial intelligence-amico.png"
        }
      ],

      // Project details
      sportsAnalytics: {
        description: "لوحة تحليلات رياضية شاملة لتحليل مباريات كرة القدم وتتبع أداء اللاعبين.",
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
          1: "Robust ETL & Data Modeling: Created a well-defined schema and used Power Query to clean, transform, and unify match/players data into structured tables (Fixtures, Teams, Opponents, Players).",
          2: "Interactive Visualizations: Built dedicated pages (Results, Goals, Positions, Teams Map, Players Map, Tables) with custom filters (Matches, Teams, Players) for granular data exploration.",
          3: "Security & Access Control: Deployed a public dashboard link while restricting API/data source access to the internal network, striking a balance between openness and security.",
          4: "Documentation & Maintenance Plan: Provided clear project documentation, including data schemas, transformation steps, and a manual refresh procedure to maintain data integrity.",
        },
        results: {
          1: "Enhanced Decision-Making: AFC stakeholders can easily explore performance trends, player statistics, and match outcomes, leading to more informed strategic decisions.",
          2: "Improved Data Accessibility: The dashboard centralizes key metrics and allows for quick, intuitive filtering and analysis across teams, tournaments, and timeframes.",
          3: "Scalable Foundation: The modular data model and clear documentation enable future expansions (e.g., automated refresh with a data gateway, adding more competitions).",
          4: "Positive Stakeholder Feedback: The dashboard's user-friendly interface and comprehensive coverage of AFC data garnered strong acceptance among non-technical and technical users alike.",
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
          title: "متدرب محلل بيانات",
          company: "SRKK",
          period: "11/2023 - 01/2024",
          description: [
            "تطوير وصيانة لوحات معلومات مالية تفاعلية في Power BI",
            "أتمتة سير عمل البيانات باستخدام Microsoft Fabric و Python لتحسين عمليات إعداد التقارير",
          ],
          type: "work",
          location: "كلانج، سيلانجور",
          skills: ["Power BI", "Python", "Microsoft Fabric", "تصور البيانات"],
        },
        {
          title: "متدرب محلل بيانات",
          company: "الاتحاد الآسيوي لكرة القدم",
          period: "07/2023 - 10/2023",
          description: [
            "تصميم وتنفيذ لوحة معلومات شاملة لتحليلات الرياضة في Power BI لتحليل المباريات",
            "تعزيز عمليات تصور البيانات لدعم اتخاذ القرارات المتعلقة بأداء الفريق ومقاييس اللاعبين",
          ],
          type: "work",
          location: "كوالالمبور، كوالالمبور",
          skills: ["Power BI", "تحليلات الرياضة", "تصور البيانات"],
        },
        {
          title: "بكالوريوس علوم الكمبيوتر",
          institution: "جامعة الوسائط المتعددة",
          period: "2020 - 2024",
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
          period: "08/2023 - 10/2024",
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
          period: "08/2022 - 07/2024",
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
      phoneNumber: "+60 11-1234 5678",
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
          name: "د. سارة جونسون",
          title: "أستاذة علوم البيانات، جامعة الوسائط المتعددة",
          contact: "sarah.johnson@mmu.edu.my"
        },
        {
          name: "أحمد حسن",
          title: "رئيس قسم التحليلات، الاتحاد الآسيوي لكرة القدم",
          contact: "a.hassan@afc.org"
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
}

