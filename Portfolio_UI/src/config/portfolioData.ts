import { PortfolioData } from '../types/portfolio.types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Anushka Sharma",
    role: "Software Engineer | .NET Backend & Full-Stack Developer",
    location: "Saharanpur, UP, India (Open to Remote & Relocation)",
    email: "anushka.sharma.cse.2021@miet.ac.in",
    phone: "+91 8171262720",
    bio: "Software Engineer with 1.7+ years of production experience architecting enterprise web APIs, distributed microservices, and full-stack platforms using C#, .NET 8/10, EF Core, and SQL Server. Recognized as 1st Runner-Up in the AWS Ideathon and certified across Microsoft Azure (AZ-900, AI-900, DP-900), AWS, and Oracle.",
    heroHeadline: "Architecting High-Throughput .NET Systems & Full-Stack Platforms",
    heroStatement: "Building dependable backend systems, cloud microservices, and scalable full-stack products.",
    experienceYears: "1.7+",
    platformsDeliveredCount: 4,
    latencyReduction: "84%",
    githubUrl: "https://github.com/anushka-sharma",
    linkedinUrl: "https://www.linkedin.com/in/anushka-sharma-07ab1b24",
    statusBadge: "1st Runner-Up AWS Ideathon • Available for Engineering Roles",
  },
  awards: [
    {
      id: "aws-ideathon",
      title: "1st Runner-Up — AWS Ideathon",
      event: "AWS Ideathon",
      organization: "Amazon Web Services (AWS)",
      placement: "1st Runner-Up",
      year: "2024",
      description: "Recognized as 1st Runner-Up in the college-level AWS Ideathon for conceptualizing and architecting an innovative, cloud-native scalable solution utilizing AWS cloud computing principles.",
      highlights: [
        "Awarded 1st Runner-Up in the college-level AWS Ideathon competition.",
        "Architected high-availability cloud solution incorporating AWS architecture best practices.",
        "Demonstrated technical leadership, rapid prototyping, and live technical defense to evaluators."
      ]
    }
  ],
  certifications: [
    {
      id: "azure-fundamentals",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      issueDate: "May 26, 2024",
      credentialId: "E4DD53224C5D2E3F",
      certificationNumber: "A4O44D-D72B2F",
      verificationUrl: "https://learn.microsoft.com/en-us/users/anushkasharma-8325/credentials/certification/azure-fundamentals?tab=credentials-tab",
      imagePath: "/assets/certificates/azure-1.png",
      badgeType: "azure",
      featured: true,
      description: "Validated foundational knowledge of cloud services and how those services are provided with Microsoft Azure, including security, privacy, compliance, and cloud pricing.",
      skills: ["Azure Cloud", "Cloud Architecture", "Security & Governance", "Azure Resource Management"]
    },
    {
      id: "azure-ai-fundamentals",
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      issueDate: "May 17, 2024",
      credentialId: "54F501354AEE852B",
      certificationNumber: "340F5B-A0ADC5",
      verificationUrl: "https://learn.microsoft.com/en-us/users/anushkasharma-8325/credentials/certification/azure-ai-fundamentals?tab=credentials-tab",
      imagePath: "/assets/certificates/azure-2.png",
      badgeType: "azure",
      featured: true,
      description: "Demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure AI services.",
      skills: ["Azure AI Services", "Computer Vision", "Natural Language Processing (NLP)", "Conversational AI"]
    },
    {
      id: "azure-data-fundamentals",
      title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft / Certiport",
      issueDate: "June 26, 2024",
      credentialId: "ITS-8498566",
      certificationNumber: "Exam Ref: 47293766",
      score: "910 / 1000",
      imagePath: "/assets/certificates/azure-3.png",
      badgeType: "azure",
      featured: true,
      description: "Demonstrated mastery in relational & non-relational database workloads on Azure. Scored a remarkable 910/1000 with 100% in Relational Data on Azure.",
      skills: ["Azure SQL", "Relational Data (100%)", "Core Data Concepts (95%)", "Analytics Workloads (89%)"]
    },
    {
      id: "aws-ccp",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "2024",
      imagePath: "/assets/certificates/aws-cloud-practitioner.png",
      badgeType: "aws",
      featured: true,
      description: "Validation of overall understanding of the AWS Cloud platform, covering cloud security, core services (EC2, S3, RDS, Lambda), compliance, and architectural best practices.",
      skills: ["AWS Cloud", "Cloud Architecture", "Security & IAM", "Serverless", "Cost Optimization"]
    },
    {
      id: "oracle-cert",
      title: "Oracle Certified Professional",
      issuer: "Oracle Corporation",
      issueDate: "2024",
      imagePath: "/assets/certificates/oracle.png",
      badgeType: "oracle",
      featured: true,
      description: "Professional certification validating expertise in enterprise database systems, relational design, SQL execution, and reliable backend application development.",
      skills: ["SQL / PL-SQL", "Relational Database Design", "Query Tuning", "Data Integrity"]
    },
    {
      id: "cisco-network-tech",
      title: "Certified Network Technician",
      issuer: "Cisco Networking Academy",
      issueDate: "2024",
      imagePath: "/assets/certificates/cisco-network-tech.png",
      badgeType: "cisco",
      featured: false,
      description: "Practical mastery of IP routing, subnetting, network architecture, TCP/IP protocol stack, and hardware switching configurations.",
      skills: ["TCP/IP", "Routing & Switching", "Subnetting", "Network Protocols", "Packet Tracer"]
    },
    {
      id: "cisco-cybersecurity",
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      issueDate: "2024",
      imagePath: "/assets/certificates/cisco-cybersecurity.png",
      badgeType: "cisco",
      featured: false,
      description: "Comprehensive foundation in network defense, cryptography, secure API communication, threat intelligence, and vulnerability prevention.",
      skills: ["Network Security", "Cryptography", "Threat Assessment", "Secure Protocols"]
    },
    {
      id: "cisco-packet-tracer",
      title: "Networking Basics & Packet Tracer Simulation",
      issuer: "Cisco Networking Academy",
      issueDate: "2024",
      imagePath: "/assets/certificates/cisco-packet-tracer.png",
      badgeType: "cisco",
      featured: false,
      description: "Hands-on network topology simulation, firewall configurations, and real-time packet inspection for distributed architectures.",
      skills: ["Network Simulation", "Topology Design", "Firewalls & NAT", "Packet Analysis"]
    }
  ],
  projects: [
    {
      id: "pinps",
      number: "01",
      name: "PINPS",
      subtitle: "Property Intelligence & Distributed Web Scraping Platform",
      category: "PROPERTY INTELLIGENCE",
      status: "PRODUCTION",
      liveUrl: "https://pinpadsplit.com",
      requiresAuth: false,
      accessNote: "Public property listing & rental search platform. Live web platform accessible without credentials.",
      summary: "A high-performance property discovery and market intelligence platform that aggregates, cleanses, and indexes large-scale rental housing listings (PadSplit) with an interactive Google Maps geospatial interface.",
      architectureHighlights: [
        "Implemented distributed web scraping pipelines to extract, validate, deduplicate, and persist rental property and room-level records into SQL Server.",
        "Applied CQRS with MediatR to decouple query workloads from ingestion pipelines, dramatically reducing database contention.",
        "Optimized query execution plans, missing non-clustered indexes, and caching layers, slashing page-load times by 84%.",
        "Developed reactive React.js frontend features including dynamic geospatial Google Maps search, faceted multi-attribute filters, and custom lead acquisition workflows."
      ],
      keyOutcomes: [
        "Slashed average property search page-load latency from ~7.0s down to 1.1s (84% improvement).",
        "Automated background scraping workers processing thousands of property rooms continuously.",
        "Delivered full-stack geospatial Google Maps search experience with high user engagement."
      ],
      metrics: [
        { label: "Query Latency", value: "7.0s → 1.1s (-84%)" },
        { label: "Architecture", value: "CQRS + MediatR" },
        { label: "Frontend", value: "React + Google Maps" }
      ],
      techStack: [
        "ASP.NET Core",
        ".NET Aspire",
        "CQRS / MediatR",
        "EF Core",
        "SQL Server",
        "React.js",
        "Google Maps API",
        "Tailwind CSS"
      ]
    },
    {
      id: "barpatrol",
      number: "02",
      name: "BarPatrol",
      subtitle: "Hospitality Inventory Intelligence & POS Integration Platform",
      category: "HOSPITALITY & POS",
      status: "PRODUCTION",
      liveUrl: "https://www.barpatrol.net",
      requiresAuth: true,
      accessNote: "Public platform website available. Internal POS integration engine, recipe costing, and variance modules demonstrated via technical walkthrough.",
      summary: "An enterprise inventory management and cost control platform serving bars, restaurants, and hospitality groups, featuring automated invoice extraction, POS synchronization (Square, Lightspeed, Clover), and Cloudflare security.",
      architectureHighlights: [
        "Architected backend integration pipelines syncing Point-of-Sale (POS) systems including Square, Lightspeed, and Clover to automate sales depletion logs and eliminate manual reconciliation.",
        "Developed high-throughput bulk inventory upload pipelines and engineered mobile app AI invoice extraction features (currently in development).",
        "Re-engineered legacy inventory variance calculation algorithms to resolve discrepancies caused by multi-location timezones and historic depletion logs.",
        "Hardened platform security by implementing Cloudflare CAPTCHA verification combined with ASP.NET Core IP/endpoint rate limiting, JWT Bearer authentication, and claims-based RBAC."
      ],
      keyOutcomes: [
        "Eliminated manual sales reconciliations by connecting POS APIs for Square, Lightspeed, and Clover.",
        "Protected backend endpoints against bot abuse and brute-force traffic via Cloudflare CAPTCHA and rate limiters.",
        "Reduced manual inventory onboarding effort by ~70% via bulk uploads and AI invoice extraction workflows."
      ],
      metrics: [
        { label: "POS Integrations", value: "Square, Lightspeed, Clover" },
        { label: "Perimeter Defense", value: "Cloudflare CAPTCHA + Rate Limiting" },
        { label: "Mobile AI", value: "AI Invoice Extraction (In-Progress)" }
      ],
      techStack: [
        "ASP.NET Core Web API",
        "Clean Architecture",
        "EF Core",
        "SQL Server",
        "Square / Lightspeed / Clover APIs",
        "Cloudflare Turnstile (CAPTCHA)",
        "API Rate Limiting",
        "JWT Bearer & RBAC",
        "Azure App Services",
        "Swagger/OpenAPI"
      ]
    },
    {
      id: "gdm-eco-on-site",
      number: "03",
      name: "GDM (Eco-On-Site)",
      subtitle: "Smart Waste & IoT Sensor Telemetry Monitoring Platform",
      category: "IOT & TELEMETRY",
      status: "PRODUCTION",
      requiresAuth: true,
      accessNote: "Enterprise IoT waste management infrastructure. Live sensor dashboard & mobile app walkthrough available upon request.",
      summary: "A real-time IoT waste management and telemetry platform capturing live data directly from physical bin sensors and devices via webhooks, providing operational dashboards, threshold alerts, and mobile monitoring.",
      architectureHighlights: [
        "Engineered resilient webhook ingestion endpoints to receive and parse high-frequency live telemetry payloads emitted by physical IoT devices and smart bin sensors.",
        "Architected microservice backend with FastEndpoints and MediatR to process sensor heartbeats, battery health, and container fill levels in real time.",
        "Implemented automated collection scheduling logic and missed-disposal detection algorithms with automated MailKit alert triggers.",
        "Contributed to both the React 19 / TypeScript administration portal (live sensor telemetry tables & charts) and the companion Flutter mobile app (eco_on_site)."
      ],
      keyOutcomes: [
        "Real-time webhook ingestion processing physical device payloads and sensor telemetry within seconds.",
        "Live operational dashboard displaying real-time fill percentages and automated disposal scheduling.",
        "Automated operational alerts dispatched within 5 seconds of container threshold breaches."
      ],
      metrics: [
        { label: "Data Pipeline", value: "IoT Device Webhooks" },
        { label: "Alert Latency", value: "< 5s Trigger" },
        { label: "Client Stack", value: "React 19 & Flutter" }
      ],
      techStack: [
        ".NET 8",
        "FastEndpoints",
        "MediatR",
        "IoT Device Webhooks",
        ".NET Aspire",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Flutter (Dart)",
        "OpenTelemetry"
      ]
    },
    {
      id: "sgdps",
      number: "04",
      name: "SGDPS",
      subtitle: "Community Treasury, Field Collection & Society Management System",
      category: "FIELD COLLECTION & FINTECH",
      status: "PRODUCTION",
      requiresAuth: true,
      accessNote: "Community treasury portal & field collector mobile app. Financial ledger and GPS collection demo available upon request.",
      summary: "A community fintech and collection management ecosystem built for festival committees and housing societies, enabling on-field payment collection with GPS logging, treasury tracking, and instant WhatsApp receipts.",
      architectureHighlights: [
        "Built .NET 10 backend using FastEndpoints, MediatR, and EF Core with role authorization for Admins and Collectors.",
        "Developed companion Flutter mobile app (SGDPSMobile) for on-field volunteer collectors, capturing real-time GPS coordinates and timestamps upon payment recording.",
        "Implemented single-click WhatsApp digital receipt dispatch and PDF audit receipt generation.",
        "Designed React 19 + Redux Toolkit Query (RTK Query) admin treasury portal with interactive residential tower and floor collection matrices."
      ],
      keyOutcomes: [
        "Digitalized 100% of physical collection receipts with real-time GPS coordinate proof.",
        "Instant WhatsApp automated digital receipt delivery to residents upon payment recording.",
        "Live financial dashboard with real-time expense ledgers and tower-by-tower collection heatmaps."
      ],
      metrics: [
        { label: "Geo-Tracking", value: "Real-Time GPS Logs" },
        { label: "Receipts", value: "Instant WhatsApp & PDF" },
        { label: "Stack", value: ".NET 10 + React 19 + Flutter" }
      ],
      techStack: [
        ".NET 10",
        "FastEndpoints",
        "MediatR",
        "EF Core",
        "React 19",
        "RTK Query",
        "Flutter 3 (Dart)",
        "Tailwind CSS",
        "SQLite / SQL Server"
      ]
    }
  ],
  skills: [
    {
      id: "languages",
      category: "LANGUAGES",
      description: "Core programming and database languages",
      skills: ["C# (12 / 13)", "SQL", "TypeScript", "JavaScript (ES6+)", "Dart", "HTML5 & CSS3"]
    },
    {
      id: "backend",
      category: "BACKEND & ARCHITECTURE",
      description: "Distributed architectures, microservices, and design patterns",
      skills: [
        "ASP.NET Core Web API",
        "FastEndpoints",
        ".NET Aspire",
        "Clean Architecture",
        "CQRS (MediatR)",
        "Repository & Unit of Work",
        "Dependency Injection",
        "RESTful APIs"
      ]
    },
    {
      id: "database",
      category: "DATABASE & ORM",
      description: "Relational persistence, data modeling, and performance tuning",
      skills: [
        "Microsoft SQL Server",
        "SQLite",
        "Entity Framework Core (EF Core 8/10)",
        "Stored Procedures",
        "Index Tuning & Execution Plans",
        "Schema Migrations"
      ]
    },
    {
      id: "security-cloud",
      category: "SECURITY & CLOUD",
      description: "Authentication, authorization, infrastructure, and resilience",
      skills: [
        "Microsoft Azure (AZ-900, AI-900, DP-900)",
        "AWS Cloud (Practitioner)",
        "JWT Bearer Authentication",
        "Multi-Tenancy & IDOR Isolation",
        "API Rate Limiting & CAPTCHA",
        "OpenTelemetry & Serilog"
      ]
    },
    {
      id: "frontend-mobile",
      category: "FRONTEND & MOBILE",
      description: "Modern UI frameworks, state management, and cross-platform apps",
      skills: [
        "React 19",
        "TypeScript",
        "Vite",
        "Redux Toolkit & RTK Query",
        "Tailwind CSS",
        "Recharts",
        "Flutter 3 (Dart)",
        "Provider State Management",
        "Material 3"
      ]
    },
    {
      id: "tooling-devops",
      category: "TOOLING & INTEGRATIONS",
      description: "Developer workflows, testing, and third-party ecosystems",
      skills: [
        "Git & GitHub",
        "Swagger / OpenAPI & Scalar",
        "Postman",
        "POS Integrations (Square, Lightspeed, Clover)",
        "Cloudflare Turnstile & Rate Limiting",
        "IoT Device Webhooks",
        "Google Maps API",
        "MailKit (SMTP Notifications)"
      ]
    }
  ],
  experience: [
    {
      company: "Intellisoft Technologies",
      role: "Software Engineer",
      period: "December 2024 – Present",
      location: "Noida, India",
      summary: "Architecting high-throughput backend APIs and distributed services across 4 mission-critical commercial platforms. Enforcing Clean Architecture, CQRS, and automated Azure cloud deployments.",
      highlights: [
        "Architect, develop, and maintain enterprise web APIs and distributed services using C#, ASP.NET Core 8/10, EF Core, and SQL Server.",
        "Spearhead backend and full-stack development across 4 production systems: IoT device webhooks, hospitality inventory with Square/Lightspeed/Clover POS sync, real estate data pipelines with Google Maps, and fintech field collections.",
        "Implement enterprise security standards including Cloudflare CAPTCHA verification, ASP.NET Core rate limiting, and JWT Bearer authentication.",
        "Optimize complex SQL queries, execution plans, and indexes, cutting response times by up to 84% on production workloads.",
        "Deploy and configure applications on Microsoft Azure App Services, integrating OpenTelemetry and Serilog to maintain 99.9% uptime."
      ],
      platformsDelivered: [
        "PINPS Property Platform",
        "BarPatrol Inventory System",
        "GDM (Eco-On-Site IoT)",
        "SGDPS Treasury Ecosystem"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
      school: "Meerut Institute of Engineering & Technology (MIET)",
      period: "2021 – 2025",
      result: "CGPA: 8.6 / 10",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Object-Oriented Programming (OOP)",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering"
      ]
    }
  ]
};
