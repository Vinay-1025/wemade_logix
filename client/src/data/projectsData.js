import DentalImg1 from '../assets/projects/Dental_lab/P1I1-Dpb6E5To.png';
import DentalImg2 from '../assets/projects/Dental_lab/P1I2-BoFvcPB0.png';
import DentalImg3 from '../assets/projects/Dental_lab/P1I3-BmK1l98B.png';
import DentalImg4 from '../assets/projects/Dental_lab/P1I4-BDSRbDVc.png';
import DentalImg5 from '../assets/projects/Dental_lab/P1I5-D4NWATnY.png';
import DentalImg6 from '../assets/projects/Dental_lab/P1I6-qX1T02lZ.png';
import DentalImg7 from '../assets/projects/Dental_lab/P1I7-BJvpVFx2.png';
import DentalImg8 from '../assets/projects/Dental_lab/P1I8-BK_NccD8.png';
import DentalImg9 from '../assets/projects/Dental_lab/P1I9-DzaHILrZ.png';
import DentalImg10 from '../assets/projects/Dental_lab/P1I10-C-9fvdNf.png';
import DentalImg11 from '../assets/projects/Dental_lab/P1I11-CRi-19f5.png';
import DentalImg12 from '../assets/projects/Dental_lab/P1I12-zT9ClLe-.png';
import DentalImg13 from '../assets/projects/Dental_lab/P1I13-BXoA-7Xh.png';
import DentalImg14 from '../assets/projects/Dental_lab/P1I14-C7JgKXoN.png';
import DentalImg15 from '../assets/projects/Dental_lab/P1I15-rwhfdZAK.png';
import DentalImg16 from '../assets/projects/Dental_lab/P1I16-jhkqUGiE.png';
import DentalImg17 from '../assets/projects/Dental_lab/P1I17-BgzesYbT.png';
import DentalImg18 from '../assets/projects/Dental_lab/P1I18-CGg6jmTa.png';
import DentalImg19 from '../assets/projects/Dental_lab/P1I19-Cc-t-KVs.png';
import DentalImg20 from '../assets/projects/Dental_lab/P1I20-CAOzBEgJ.png';

import ImagifyImg1 from '../assets/projects/Imagify/P2I1.png';
import ImagifyImg2 from '../assets/projects/Imagify/P2I2.png';
import ImagifyImg3 from '../assets/projects/Imagify/P2I3.png';
import ImagifyImg4 from '../assets/projects/Imagify/P2I4.png';
import ImagifyImg5 from '../assets/projects/Imagify/P2I5.png';
import ImagifyImg6 from '../assets/projects/Imagify/P2I6.png';
import ImagifyImg7 from '../assets/projects/Imagify/P2I7.png';

import EraseMateImg1 from '../assets/projects/EraseMate/P3I1.png';
import EraseMateImg2 from '../assets/projects/EraseMate/P3I2.png';
import EraseMateImg3 from '../assets/projects/EraseMate/P3I3.png';
import EraseMateImg4 from '../assets/projects/EraseMate/P3I4.png';
import EraseMateImg5 from '../assets/projects/EraseMate/P3I5.png';
import EraseMateImg6 from '../assets/projects/EraseMate/P3I6.png';
import EraseMateImg7 from '../assets/projects/EraseMate/P3I7.png';


export const projectsData = [
    {
        id: 1,
        slug: 'dental-lab-management-system',
        title: 'Dental Lab Management System',
        category: 'Web Apps',
        description: 'A robust Dental Lab Management Solution for Bioline Dental Implants, streamlining case tracking, billing, payments, and reporting with real-time updates, automated notifications, and secure role-based access—enhancing efficiency, accuracy, and operational control.',
        fullDescription: [
            'A comprehensive and scalable Dental Lab Management System developed for Bioline Dental Implants, designed to digitize and optimize end-to-end laboratory operations. The application centralizes all critical workflows, including case management, billing, payments, reporting, and client communication, into a unified and efficient platform.',
            'The system enables seamless case tracking from initiation to delivery, allowing users to manage patient and dentist details, treatment specifications, and case progress with precision. Dynamic form generation simplifies complex data entry processes, ensuring flexibility and reducing manual errors. Real-time updates across modules provide instant visibility into payments, pending tasks, and operational metrics, empowering better decision-making.',
            'To enhance financial operations, the platform includes an integrated billing and invoicing system that automates invoice generation, tracks transactions, and maintains accurate financial records. Advanced reporting features offer actionable insights through detailed analytics, helping stakeholders monitor performance and optimize workflows.',
            'The application also incorporates automated email notifications to keep users informed about critical actions such as case updates, payment confirmations, and delivery statuses, ensuring effective communication across all stakeholders.',
            'Security and access control are implemented using JWT-based authentication combined with role-based authorization, allowing customizable permissions for different user roles such as administrators, technicians, and staff. This ensures data integrity, privacy, and controlled system access.',
            'Overall, the solution significantly enhances operational efficiency, reduces manual overhead, and improves accuracy, providing Bioline Dental Implants with a reliable, scalable, and modern digital infrastructure for managing their day-to-day laboratory activities.'
        ],
        images: [
            DentalImg3, DentalImg5, DentalImg19, DentalImg1, DentalImg2, DentalImg4,
            DentalImg6, DentalImg7, DentalImg8, DentalImg9, DentalImg10,
            DentalImg11, DentalImg12, DentalImg13, DentalImg14, DentalImg15,
            DentalImg16, DentalImg17, DentalImg18, DentalImg20
        ],
        galleryCaptions: [
            { title: "Dashboard Overview", desc: "Central hub displaying active cases, pending tasks, and lab performance metrics." },
            { title: "Case Intake Form", desc: "Digital prescription submission with scan upload and material preferences." },
            { title: "Production Workflow", desc: "Visual Kanban board tracking each case through lab stages." },
            { title: "CAD/CAM Integration", desc: "Seamless digital design workflow with 3D model previews." },
            { title: "Clinic Portal", desc: "Dedicated dentist interface for case submission and tracking." },
            { title: "Inventory Management", desc: "Real-time material stock tracking with auto-reorder alerts." },
            { title: "Quality Control", desc: "Checkpoint system ensuring every restoration meets standards." },
            { title: "Invoice & Billing", desc: "Automated billing, pricing tiers, and payment tracking." },
            { title: "Reports & Analytics", desc: "Detailed reports on turnaround times, revenue, and productivity." },
            { title: "Team Management", desc: "Staff assignment, shift scheduling, and workload distribution." },
            { title: "Notification Center", desc: "Real-time alerts for case updates, deadlines, and messages." },
            { title: "Shade Matching", desc: "Digital shade guide with photo reference library." },
            { title: "Order History", desc: "Complete archive of past cases with search and filter." },
            { title: "Delivery Tracking", desc: "Pickup and delivery scheduling with route optimization." },
            { title: "Client Management", desc: "Clinic profiles, contact details, and preference settings." },
            { title: "Material Catalog", desc: "Comprehensive database of dental materials and specifications." },
            { title: "User Roles & Permissions", desc: "Role-based access control for lab technicians and admins." },
            { title: "Calendar View", desc: "Visual scheduling of deadlines, pickups, and deliveries." },
            { title: "Mobile Responsive", desc: "Fully responsive design for on-the-go case management." },
            { title: "Settings & Configuration", desc: "Lab profile, workflow customization, and system preferences." }
        ],
        tags: ['HTML', 'CSS', 'Javascipt', 'Node.js', 'MongoDB', 'Express', 'MySQL'],
        stats: {
            client: 'Dental Lab Partner',
            timeline: '4 Months',
            service: 'Full-Stack Web App',
            industry: 'Healthcare / Dental'
        },
        challenge: 'The dental lab relied on manual paper-based tracking and phone calls to coordinate with clinics, leading to lost cases, miscommunication on shade preferences, and delayed turnaround times.',
        solution: 'We built a full-stack web application with a real-time case tracking dashboard, digital prescription forms, automated workflow pipelines, and a dedicated clinic portal for seamless lab-dentist collaboration.',
        results: [
            '50% Faster case turnaround time',
            '90% Reduction in miscommunication errors',
            'Streamlined operations across 3 lab locations'
        ],
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'AWS S3']
    },
    {
        id: 2,
        slug: 'imagify-ai-text-to-image',
        title: 'Imagify - AI Text-to-Image Generator',
        category: 'Web Apps',
        description: 'A full-stack AI-powered web application that generates high-quality images from text using ClipDrop API with a credit-based system and secure payments.',

        fullDescription: [
            'Imagify is a full-stack AI-based web application designed to generate high-quality images from textual descriptions in real time. The platform leverages the ClipDrop API to transform user prompts into visually rich images, providing an intuitive and seamless creative experience.',

            'The front-end is built using React.js with Tailwind CSS, delivering a modern, responsive, and user-friendly interface that works smoothly across devices. The UI focuses on simplicity while ensuring fast and dynamic rendering of generated outputs.',

            'On the backend, the system is powered by Node.js and Express.js, handling core operations such as API integration, authentication, image generation workflows, and payment processing. The application follows a modular architecture, ensuring scalability and maintainability.',

            'A key feature of the platform is its credit-based system. New users receive free credits upon registration, and each image generation request consumes credits. Users can purchase additional credits through an integrated Razorpay payment gateway, enabling secure and seamless transactions.',

            'MongoDB is used as the database to efficiently manage user profiles, authentication data, credit balances, usage history, and transaction records. JWT-based authentication ensures secure access control, while validation mechanisms maintain system integrity.',

            'Overall, Imagify showcases strong full-stack engineering capabilities by integrating AI services, payment systems, authentication, and responsive UI into a scalable and production-ready application.'
        ],

        images: [
            ImagifyImg1, ImagifyImg2, ImagifyImg6, ImagifyImg3, ImagifyImg4, ImagifyImg5, ImagifyImg7
        ],

        galleryCaptions: [
            { title: "Landing Page", desc: "Modern hero section showcasing AI-generated masterpieces and platform features." },
            { title: "How it works", desc: "A detailed breakdown of the AI generation process from prompt to final masterpiece." },
            { title: "High-Res Detail", desc: "Detailed view of generated outputs with high-fidelity textures and resolution." },
            { title: "Testimonials", desc: "User success stories and feedback from our global community of creators." },
            { title: "Image Generator", desc: "The core generation engine where text prompts transform into stunning visuals." },
            { title: "Payment Selection", desc: "Flexible credit packages and secure pricing tiers for different usage levels." },
            { title: "Generated Image", desc: "A high-resolution showcase of the final output produced by the AI engine." }
        ],

        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Razorpay API', 'ClipDrop API'],

        stats: {
            client: 'Personal / Product Project',
            timeline: '2 Months',
            service: 'Full-Stack Web Application',
            industry: 'AI / Creative Tools'
        },

        challenge: 'Users lack accessible tools to generate high-quality AI images quickly without complex setups, and monetization of such platforms requires secure and scalable credit-based systems.',

        solution: 'Developed a full-stack AI application integrating ClipDrop API for real-time image generation, implemented JWT-based authentication, and built a secure credit-based payment system using Razorpay to manage usage and monetization.',

        results: [
            'Real-time AI image generation from text prompts',
            'Secure and scalable credit-based usage system',
            'Seamless payment integration with Razorpay',
            'Responsive UI delivering smooth cross-device experience'
        ],

        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Razorpay', 'ClipDrop API']
    },
    {
        id: 3,
        slug: 'erasemate-ai-background-remover',
        title: 'EraseMate - AI-Powered Background Removal',
        category: 'Web Apps',
        description: 'A full-stack AI application that simplifies image editing by enabling users to remove backgrounds instantly using ClipDrop AI and a managed credit system.',
        fullDescription: [
            'EraseMate is a full-stack web application designed to simplify image editing by enabling users to remove backgrounds from images instantly using AI. The platform provides a clean, intuitive, and responsive interface, making it easy for users to upload images and receive high-quality background-removed outputs with minimal effort.',
            'The core functionality of the application is powered by the ClipDrop API, which performs automatic background removal with high precision and speed. This allows users to generate professional-quality images without requiring advanced editing skills.',
            'The front-end of EraseMate is built using React.js and Tailwind CSS, ensuring a modern, responsive, and user-friendly design across different devices. The interface focuses on simplicity, allowing users to upload images, preview results, and manage their credits seamlessly.',
            'On the back-end, the application is developed using Node.js and Express.js, which handle image processing requests, API integrations, user data management, and payment processing workflows. For authentication and user management, Clerk is integrated into the system, providing a secure and scalable solution for user sign-up, login, and session handling.',
            'A key feature of EraseMate is its credit-based usage system: new users receive a set of free credits upon registration, and each background removal operation consumes a credit. Users can purchase additional credits through Razorpay, enabling secure and reliable payment transactions.',
            'The application uses MongoDB to efficiently store and manage user profiles, credit balances, usage tracking, and transaction details. Overall, EraseMate showcases strong full-stack development capabilities by integrating AI-powered image processing, secure authentication, and scalable database management into a cohesive application.'
        ],
        images: [
            EraseMateImg1, EraseMateImg3, EraseMateImg6, EraseMateImg2, EraseMateImg4, EraseMateImg5, EraseMateImg7
        ],
        galleryCaptions: [
            { title: "Landing Page", desc: "Premium entry point showcasing the AI's capabilities and seamless user onboarding." },
            { title: "Transformation Suite", desc: "Instant AI background removal showcasing before and after transparency results." },
            { title: "Background Removal Process", desc: "Step-by-step visual guide on how the AI identifies and isolates the subject." },
            { title: "Background Removal Flow", desc: "The end-to-end user journey from image upload to the final transparent output." },
            { title: "Testimonials", desc: "Feedback from design professionals who have optimized their workflow with EraseMate." },
            { title: "Credit Buying Plan", desc: "Transparent pricing options for individuals and enterprises to scale their usage." },
            { title: "Background Removed Output", desc: "A high-fidelity demonstration of the final subject isolated from its original background." }
        ],
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Clerk Auth', 'Tailwind CSS', 'Razorpay', 'ClipDrop API'],
        stats: {
            client: 'Personal / Product Project',
            timeline: '2 Months',
            service: 'Full-Stack Web Application',
            industry: 'AI / Content Creation'
        },
        challenge: 'High-quality background removal usually requires professional software skills or expensive tools, making it inaccessible for casual users or small business owners.',
        solution: 'Built a full-stack SaaS platform integrating ClipDrop AI for instant background removal, implemented Clerk for secure auth, and a Razorpay-powered credit system for monetization.',
        results: [
            'Instant high-precision background removal',
            'Secure user management and scalable session handling',
            'Robust credit-based monetization system',
            'Modern, responsive UI for all screen sizes'
        ],
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Clerk', 'Razorpay', 'ClipDrop API']
    },
    {
        id: 4,
        slug: 'cloud-migration-suite',
        title: 'Cloud Migration Suite',
        category: 'Cloud',
        description: 'End-to-end cloud migration platform with zero-downtime deployment and automated infrastructure provisioning.',
        fullDescription: 'Our Cloud Migration Suite is an automated toolkit for enterprises transitioning from legacy on-premise infrastructure to modern cloud environments. It handles assessment, planning, and execution with built-in sanity checks and automated rollout/rollback capabilities. The suite specializes in zero-downtime migrations for mission-critical databases and applications.',
        images: [
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1667362080352-7e0454316d8a?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1200&auto=format&fit=crop'
        ],
        galleryCaptions: [
            { title: "Infrastructure Audit", desc: "Automated analysis of legacy on-premise systems before migration." },
            { title: "Cloud Provisioning", desc: "Terraform automation deploying scalable AWS environments." },
            { title: "Migration Pipeline", desc: "Real-time dashboard tracking zero-downtime data transfer." }
        ],
        tags: ['AWS', 'Terraform', 'Docker', 'K8s'],
        stats: {
            client: 'StreamLine Media',
            timeline: '5 Months',
            service: 'Cloud Consulting',
            industry: 'Media & Entertainment'
        },
        challenge: 'StreamLine Media needed to migrate their legacy streaming infrastructure to AWS without interrupting service for millions of users.',
        solution: 'Implemented a "Strangler Fig" migration pattern supported by Terraform automation and Blue-Green deployments in Kubernetes.',
        results: [
            'Zero downtime during migration',
            '45% Reduction in monthly hosting costs',
            'Improved global content delivery latency by 30%'
        ],
        techStack: ['AWS', 'Terraform', 'Kubernetes', 'Python', 'Go', 'Prometheus']
    },
    {
        id: 5,
        slug: 'healthtech-patient-portal',
        title: 'HealthTech Patient Portal',
        category: 'Web Apps',
        description: 'HIPAA-compliant patient management platform with telemedicine integration and real-time vitals monitoring.',
        fullDescription: 'The HealthTech Patient Portal is a secure, patient-centric platform built to the highest security standards. It bridge the gap between patients and providers through integrated video consultations, real-time vitals tracking via wearable integration, and secure medical record access. The portal is mobile-first, ensuring patients have critical health information at their fingertips.',
        images: [
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop'
        ],
        galleryCaptions: [
            { title: "Patient Dashboard", desc: "Secure multi-factor access to medical records and vitals tracking." },
            { title: "Telemedicine Hub", desc: "Integrated WebRTC video consulting with high-fidelity audio." },
            { title: "Vitals Monitoring", desc: "Real-time synchronization with smart wearable health devices." }
        ],
        tags: ['Next.js', 'GraphQL', 'WebRTC'],
        stats: {
            client: 'SwiftCare Health Systems',
            timeline: '10 Months',
            service: 'Full-Stack Web App',
            industry: 'Healthcare'
        },
        challenge: 'A growing health network needed to modernize patient engagement and reduce the burden on administrative staff for appointment scheduling.',
        solution: 'Developed a Next.js based portal with real-time GraphQL synchronization and a custom-built WebRTC telemedicine layer.',
        results: [
            '60% of appointments scheduled online',
            'High patient adoption rate (over 100k active users)',
            'Full HIPAA and GDPR compliance'
        ],
        techStack: ['Next.js', 'TypeScript', 'GraphQL', 'Apollo', 'PostgreSQL', 'WebRTC']
    },
    {
        id: 6,
        slug: 'smart-city-infrastructure',
        title: 'Smart City Infrastructure',
        category: 'IoT',
        description: 'Urban IoT ecosystem managing traffic, utilities, and environmental sensors across city networks.',
        fullDescription: 'Our Smart City Infrastructure project implements a Large-scale LoRaWAN network to connect thousands of urban sensors. This system monitors air quality, manages smart street lighting based on motion, and provides real-time traffic flow data to municipal authorities. It represents the hardware-software synergy required to build sustainable cities of the future.',
        images: [
            'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1473624898862-2374bb5203ce?q=80&w=1200&auto=format&fit=crop'
        ],
        galleryCaptions: [
            { title: "IoT Command Center", desc: "Centralized AI dashboard managing thousands of urban sensors." },
            { title: "Traffic Analytics", desc: "Real-time flow mapping and smart signal optimization data." },
            { title: "Environmental Sensors", desc: "Air quality and utility monitoring grid across city sectors." }
        ],
        tags: ['Edge Computing', 'LoRaWAN', 'React'],
        stats: {
            client: 'Metro Council - Smart Initiative',
            timeline: '18 Months',
            service: 'IoT & Firmware',
            industry: 'Public Sector'
        },
        challenge: 'The city struggled with inefficient utility monitoring and increasing traffic congestion that legacy systems could not resolve.',
        solution: 'Deployed an end-to-end IoT mesh network with edge processing capabilities and a centralized AI command center for predictive city management.',
        results: [
            '20% Reduction in street lighting energy costs',
            'Faster emergency response times via smart routing',
            'Actionable insights for environmental policy'
        ],
        techStack: ['Edge Computing', 'LoRaWAN', 'MQTT', 'Go', 'React', 'ElasticSearch']
    }
];
