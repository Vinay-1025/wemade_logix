import summerInternImg from '../assets/Highlets/Summer_intern.jpg';

export const coursesData = [
    {
        id: 1,
        slug: 'full-stack-web-development',
        title: 'Full-Stack Web Development',
        category: 'Development',
        level: 'beginner',
        duration: '12 Weeks',
        students: '2.4k+',
        modules_count: 48,
        rating: 4.8,
        reviews_count: 850,
        last_updated: 'March 2024',
        language: 'English',
        price: 'Corporate',
        description: 'Master the art of building modern, scalable web applications from front to back. This comprehensive bootcamp covers everything from basic HTML/CSS to advanced backend architectures and deployment strategies.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
        instructor: {
            name: 'Dr. Sarah Jenkins',
            role: 'Senior Full Stack Engineer & Educator',
            bio: 'With over 15 years of experience in Silicon Valley, Sarah has led engineering teams at Google and Netflix. She specializes in React and Node.js microservices.',
            image: 'https://i.pravatar.cc/150?u=sarah'
        },
        what_you_will_learn: [
            'Build production-ready web applications using the MERN stack.',
            'Master modern CSS techniques including Grid, Flexbox, and Tailwind.',
            'Implement secure authentication and authorization systems.',
            'Deploy applications to AWS and Vercel with CI/CD pipelines.',
            'Design and optimize MongoDB databases for performance.',
            'Create responsive and accessible user interfaces.'
        ],
        curriculum: [
            {
                section_title: 'Module 1: Frontend Foundations',
                lessons: ['Semantic HTML & Modern CSS', 'Responsive Design Principles', 'Advanced JavaScript (ES6+)', 'DOM Manipulation & Events']
            },
            {
                section_title: 'Module 2: React Mastery',
                lessons: ['Hooks & State Management', 'React Router & Navigation', 'API Integration with Axios', 'Performance Optimization']
            },
            {
                section_title: 'Module 3: Backend & APIs',
                lessons: ['Node.js & Express Foundations', 'RESTful API Design', 'Middleware & Error Handling', 'Authentication with JWT']
            },
            {
                section_title: 'Module 4: Database & Deployment',
                lessons: ['MongoDB Schema Design', 'Mongoose ODM', 'AWS S3 for Media Storage', 'Deploying to Production']
            }
        ],
        prerequisites: [
            'Basic computer literacy',
            'No prior coding experience required, but a logical mindset is a plus',
            'Strong desire to learn and practice daily'
        ],
        schedule: 'Mon, Wed, Fri | 7:00 PM - 9:00 PM IST',
        inclusions: [
            '48 Live Interactive Sessions',
            'Industry-Recognized Certificate',
            'Dedicated Career Mentor',
            'Lifetime Access to Recordings',
            '10+ Hands-on Projects'
        ]
    },
    {
        id: 2,
        slug: 'ai-machine-learning-bootcamp',
        title: 'AI & Machine Learning Bootcamp',
        category: 'Artificial Intelligence',
        level: 'intermediate',
        duration: '16 Weeks',
        students: '1.8k+',
        modules_count: 64,
        rating: 4.9,
        reviews_count: 620,
        last_updated: 'February 2024',
        language: 'English',
        price: 'Corporate',
        description: 'Deep dive into the world of Artificial Intelligence. From statistical modeling to deep neural networks, this course prepares you for the high-demand role of an AI Engineer.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
        instructor: {
            name: 'Michael Chen',
            role: 'Lead AI Researcher',
            bio: 'Michael is a former AI researcher at OpenAI with a focus on Large Language Models and Reinforcement Learning.',
            image: 'https://i.pravatar.cc/150?u=michael'
        },
        what_you_will_learn: [
            'Implement supervised and unsupervised learning algorithms.',
            'Build and train Deep Neural Networks using TensorFlow.',
            'Natural Language Processing (NLP) and Computer Vision techniques.',
            'Feature engineering and data preprocessing at scale.',
            'Model deployment and monitoring in production.',
            'Ethical AI and bias mitigation strategies.'
        ],
        curriculum: [
            {
                section_title: 'Module 1: Mathematics for ML',
                lessons: ['Linear Algebra Essentials', 'Calculus & Optimization', 'Probability & Statistics', 'Python for Data Science']
            },
            {
                section_title: 'Module 2: Classical Machine Learning',
                lessons: ['Regression Analysis', 'Classification Algorithms', 'Clustering & Dimensionality Reduction', 'Ensemble Methods']
            },
            {
                section_title: 'Module 3: Deep Learning foundations',
                lessons: ['Neural Network Architectures', 'Backpropagation & Gradient Descent', 'CNNs for Computer Vision', 'RNNs & LSTMs']
            },
            {
                section_title: 'Module 4: Advanced AI Topics',
                lessons: ['Transformer Architectures', 'LLM Fine-tuning', 'Reinforcement Learning', 'MLOps Best Practices']
            }
        ],
        prerequisites: [
            'Proficiency in Python programming',
            'Basic knowledge of Linear Algebra and Statistics',
            'Understanding of Data Structures'
        ],
        schedule: 'Tue, Thu, Sat | 6:30 PM - 8:30 PM IST',
        inclusions: [
            '64 Intensive Learning Modules',
            'GPU Cloud Credits for Projects',
            'Job Placement Assistance',
            'Real-world Dataset Access',
            'Research Paper Discussion Groups'
        ]
    },
    {
        id: 3,
        slug: 'cloud-architecture-devops',
        title: 'Cloud Architecture & DevOps',
        category: 'Cloud Computing',
        level: 'advanced',
        duration: '10 Weeks',
        students: '1.2k+',
        modules_count: 36,
        rating: 4.7,
        reviews_count: 410,
        last_updated: 'April 2024',
        language: 'English',
        price: 'Corporate',
        description: 'Master the infrastructure that powers the modern web. Learn AWS, Azure, and Kubernetes to build resilient, scalable, and automated systems.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
        instructor: {
            name: 'Elena Rodriguez',
            role: 'Chief Solution Architect',
            bio: 'Elena has certified hundreds of engineers in AWS and Azure. She is an expert in cloud migrations and cost optimization.',
            image: 'https://i.pravatar.cc/150?u=elena'
        },
        what_you_will_learn: [
            'Design high-availability architectures on AWS.',
            'Containerize applications using Docker and Kubernetes.',
            'Implement Infrastructure as Code (IaC) with Terraform.',
            'Build sophisticated CI/CD pipelines.',
            'Master cloud security and compliance.',
            'Serverless computing with AWS Lambda.'
        ],
        curriculum: [
            {
                section_title: 'Module 1: Cloud Foundations',
                lessons: ['AWS Core Services (EC2, S3, VPC)', 'Identity & Access Management', 'Cloud Networking Essentials', 'Serverless Architecture']
            },
            {
                section_title: 'Module 2: Containerization',
                lessons: ['Docker Deep Dive', 'Kubernetes Orchestration', 'Microservices Communication', 'Helm Charts']
            },
            {
                section_title: 'Module 3: Infrastructure as Code',
                lessons: ['Terraform Workflows', 'Ansible Configuration Mgmt', 'CloudFormation Patterns', 'State Management']
            },
            {
                section_title: 'Module 4: DevOps Culture & Tools',
                lessons: ['Jenkins & GitHub Actions', 'Monitoring with Prometheus', 'Log Aggregation (ELK Stack)', 'Site Reliability Engineering']
            }
        ],
        prerequisites: [
            'Basic Linux Administration',
            'Understanding of Networking (TCP/IP)',
            'Experience with any Programming Language'
        ],
        schedule: 'Weekends | 10:00 AM - 1:00 PM IST',
        inclusions: [
            'Official Cloud Labs access',
            'Exam Prep for AWS Solutions Architect',
            'Project: Multi-region Failover System',
            'DevOps Toolchain Certification',
            'Expert Resume Review'
        ]
    },
    {
        id: 4,
        slug: 'iot-embedded-systems',
        title: 'IoT & Embedded Systems',
        category: 'IoT Engineering',
        level: 'intermediate',
        duration: '14 Weeks',
        students: '900+',
        modules_count: 52,
        rating: 4.6,
        reviews_count: 320,
        last_updated: 'January 2024',
        language: 'English',
        price: 'Corporate',
        description: 'Learn to design and build the next generation of smart devices. This course covers everything from hardware design to cloud integration for IoT.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
        instructor: {
            name: 'James Wilson',
            role: 'Hardware Systems Engineer',
            bio: 'James specializes in low-power embedded systems and has developed several consumer IoT products.',
            image: 'https://i.pravatar.cc/150?u=james'
        },
        what_you_will_learn: [
            'Program microcontrollers like ESP32 and Arduino.',
            'Interfacing sensors and actuators.',
            'Wireless protocols: MQTT, HTTP, LoRaWAN.',
            'Edge computing for real-time processing.',
            'Building IoT Dashboards and Apps.',
            'IoT Security and Encryption.'
        ],
        curriculum: [
            {
                section_title: 'Module 1: Embedded C & Hardware',
                lessons: ['Microcontroller Architectures', 'Peripheral Interfacing (I2C, SPI)', 'RTOS Fundamentals', 'Power Management']
            },
            {
                section_title: 'Module 2: Connectivity',
                lessons: ['Networking for IoT', 'MQTT Protocol Deep Dive', 'Bluetooth Low Energy (BLE)', 'Cellular IoT']
            },
            {
                section_title: 'Module 3: Cloud & Edge',
                lessons: ['AWS IoT Core Integration', 'Data Stream Processing', 'Edge AI Basics', 'Time-series Databases']
            },
            {
                section_title: 'Module 4: Full-Stack IoT Project',
                lessons: ['Dynamic Dashboards', 'Alerting Systems', 'OTA Updates Implementation', 'Hardware Enclosure Design']
            }
        ],
        prerequisites: [
            'Basic C/C++ knowledge',
            'Fundamental understanding of Electronics',
            'Interested in Hardware-Software interaction'
        ],
        schedule: 'Wed, Sat | 6:00 PM - 8:00 PM IST',
        inclusions: [
            'Hardware Kit Delivered to Home',
            'Simulated Labs Access',
            'End-to-end Product Project',
            'Expert Hardware Design Reviews',
            'IoT Security Certification'
        ]
    },
    {
        id: 5,
        slug: 'generative-ai-llm-engineering',
        title: 'Generative AI & LLM Engineering',
        category: 'Gen AI',
        level: 'advanced',
        duration: '8 Weeks',
        students: '3.1k+',
        modules_count: 28,
        rating: 4.9,
        reviews_count: 1100,
        last_updated: 'April 2024',
        language: 'English',
        price: 'Corporate',
        description: 'Master the absolute latest in AI. Learn to build applications using Large Language Models, Generative Adversarial Networks, and Diffusion Models.',
        image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=800&auto=format&fit=crop',
        instructor: {
            name: 'Dr. Emily Smith',
            role: 'Generative AI Specialist',
            bio: 'Emily is a prominent figure in the GenAI space, contributing to several open-source LLM frameworks.',
            image: 'https://i.pravatar.cc/150?u=emily'
        },
        what_you_will_learn: [
            'Build RAG (Retrieval Augmented Generation) pipelines.',
            'Fine-tune models like Llama-3 and GPT-4.',
            'Advanced Prompt Engineering techniques.',
            'Implement AI agents using AutoGen and LangChain.',
            'Generating Images with Stable Diffusion API.',
            'Governance and Security for GenAI.'
        ],
        curriculum: [
            {
                section_title: 'Module 1: LLM Foundations',
                lessons: ['Transformer Architecture', 'Tokenization & Embeddings', 'The Attention Mechanism', 'Training vs Fine-tuning']
            },
            {
                section_title: 'Module 2: Application Development',
                lessons: ['LangChain Mastery', 'Vector Databases (Pinecone, Chroma)', 'RAG Implementation Patterns', 'LLM Monitoring']
            },
            {
                section_title: 'Module 3: Multi-modal AI',
                lessons: ['Stable Diffusion Deep Dive', 'Vision-Language Models', 'Audio Generation', 'Multi-modal Agents']
            },
            {
                section_title: 'Module 4: Enterprise Deployment',
                lessons: ['Scaling LLM APIs', 'Cost Management for AI', 'Ethical AI Frameworks', 'Custom Agentic Workflows']
            }
        ],
        prerequisites: [
            'Solid Python and API experience',
            'Knowledge of Basic Machine Learning',
            'Familiarity with Cloud Services'
        ],
        schedule: 'Weeknights | 8:00 PM - 10:00 PM IST',
        inclusions: [
            'API Credits for OpenAI & Anthropic',
            'Access to Private Discord Community',
            'Build 5 Enterprise-level AI Apps',
            'Weekly Hackathons',
            'Direct Access to AI Research Mentors'
        ]
    },
    {
        id: 100,
        slug: 'summer-mern-training-2026',
        title: 'Summer MERN Stack Training 2026',
        category: 'Training Program',
        level: 'Beginner to Intermediate',
        duration: '8 Weeks',
        students: '500+ Enrolled',
        modules_count: 24,
        rating: 4.8,
        reviews_count: 150,
        last_updated: 'April 2026',
        language: 'English',
        price: '799',
        description: 'Kickstart your tech career with our hands-on MERN Stack training. Learn to build, deploy, and scale full-stack applications with real-world practices and expert mentorship.',

        image: summerInternImg,

        instructor: {
            name: 'WeMade Logix Team',
            role: 'Full Stack & Industry Mentors',
            bio: 'A team of experienced developers and mentors specializing in modern web technologies, helping students become industry-ready through practical learning.',
            image: '/fav_icon.png'
        },

        what_you_will_learn: [
            'Build full-stack web applications using MERN (MongoDB, Express, React, Node)',
            'Understand frontend and backend integration',
            'Develop REST APIs and connect databases',
            'Deploy applications to production environments',
            'Write clean, scalable, and maintainable code',
            'Prepare for technical interviews and real-world development'
        ],

        curriculum: [
            {
                section_title: 'Phase 1: Foundations (Week 1-2)',
                lessons: [
                    'Introduction to Web Development',
                    'HTML, CSS, Responsive Design Basics',
                    'JavaScript Fundamentals (ES6+)',
                    'Git & GitHub Workflow'
                ]
            },
            {
                section_title: 'Phase 2: Frontend Development (Week 3)',
                lessons: [
                    'React.js Fundamentals',
                    'Components, Props & State',
                    'React Hooks (useState, useEffect)',
                    'Building UI with Modern Design'
                ]
            },
            {
                section_title: 'Phase 3: Backend Development (Week 4-5)',
                lessons: [
                    'Node.js & Express.js Basics',
                    'Creating REST APIs',
                    'Middleware & Routing',
                    'Authentication Basics (JWT)'
                ]
            },
            {
                section_title: 'Phase 4: Database Integration (Week 6)',
                lessons: [
                    'MongoDB Fundamentals',
                    'CRUD Operations',
                    'Mongoose ODM',
                    'Connecting Backend with Database'
                ]
            },
            {
                section_title: 'Phase 5: Full Stack Integration (Week 7)',
                lessons: [
                    'Connecting React with Backend APIs',
                    'State Management Basics',
                    'Handling Forms & API Calls',
                    'Error Handling & Debugging'
                ]
            },
            {
                section_title: 'Phase 6: Final Project & Deployment (Week 8)',
                lessons: [
                    'Build End-to-End MERN Project',
                    'Project from Scratch',
                    'Deployment (Vercel / Render / Netlify)',
                    'Portfolio & Resume Preparation'
                ]
            }
        ],

        prerequisites: [
            'Basic computer knowledge',
            'Interest in web development',
            'No prior coding experience required (beginner-friendly)'
        ],

        schedule: 'Online | Flexible Learning + Live Sessions',

        inclusions: [
            'Live Online Training Sessions',
            'Hands-on Practical Learning',
            'Expert Mentorship',
            'Real-world Project Development',
            'Resume & Interview Guidance',
            'Certificate of Completion'
        ]
    }
];
