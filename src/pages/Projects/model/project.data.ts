export type Project = {
    slug: string
    tag: string
    title: string
    subtitle: string
    year: string
    techStack: string[]
    github?: string
    linkedin?: string
    instagram?: string
    problem: string
    solution: string
    features: string[]
    contributions: string[]
    images: string[]
}

export const projects: Project[] = [
    // iOS Projects
    {
        slug: "kimo",
        tag: "iOS",
        title: "Kimo.",
        subtitle: "Educational iPad app for ages 3–5-year-olds, teaching emotions through play.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "MVVM"],
        github: "https://github.com/feelwithkimo/feelwithkimo-ios",
        instagram: "https://www.instagram.com/feelwithkimo/",
        problem: "**Parents struggle to track and nurture emotional development in early childhood,** especially in ways that are structured, age-appropriate, and grounded in research.\n\nMany emotional learning efforts rely on verbal instruction alone, which is less effective for children aged 3–5 who learn best through guided interaction and play.",
        solution: "We built **Kimo, an interactive iPad-based SEL app designed for children aged 3–5** to use together with their parents. Grounded in Yale's RULER framework, the app delivers emotion-learning through interactive storytelling and play-based modules.\n\nBy combining structured emotional frameworks with meaningful parent–child interaction, **Kimo transforms abstract emotional concepts into contextual, engaging experiences.**",
        features: [
            "**Interactive storytelling modules aligned with the five RULER stages** (Recognize, Understand, Label, Express, Regulate).",
            "**Play-based activities** such as drag-and-drop blocks, guided scaffolding questions, story-contextual clapping interactions, and 4–7–8 breathing exercises.",
            "**Parent-guided reflective prompts** to encourage meaningful emotional conversations.",
            "User-tested design refined through feedback from parents, teachers, and certified SEL practitioners."
        ],

        contributions: [
            "Researched child emotional intelligence and translated the RULER framework into **age-appropriate product flows.**",
            "**Aligned design and engineering teams** by defining workflows, iterations, and clear development goals.",
            "**Built the drag-and-drop module using MVVM,** ensuring modular and scalable architecture.",
            "Co-led **stakeholder engagement, concept & user testing, and exhibition conceptualization** for Talent Spark Exhibition (TSX), synthesizing insights into iterative product improvements."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
    {
        slug: "swifter",
        tag: "iOS",
        title: "Swifter.",
        subtitle: "Smart jogging planner that auto-schedules runs around your calendar.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "SwiftData", "EventKit"],
        github: "https://github.com/adelinechrltt/swifter",
        problem: "**Busy individuals often struggle to maintain consistent jogging routines** due to unpredictable schedules and poor time management.\n\nManually planning workouts around meetings and commitments creates friction that reduces long-term consistency––because **jogging is supposed to be a low-cognitive load hobby.**",
        solution: "We built **Swifter,** an intelligent iOS jogging planner that analyzes a user’s existing calendar to automatically schedule optimal running sessions.\n\nBy integrating directly with native iOS planning tools, **the app removes scheduling friction and promotes sustainable fitness habits.**",
        features: [
            "**Automatic run scheduling** based on available calendar time slots.",
            "**Native Calendar integration** using EventKit for seamless synchronization.",
            "**Local data persistence using SwiftData** for lightweight, offline-first performance & personalization.",
            "**Home screen widgets and watchOS support** for quick run visibility and tracking."
        ],
        contributions: [
            "**Conducted user interviews** to translate jogging pain points into actionable product features.",
            "**Designed the data model and ERD,** implementing SwiftData for structured local persistence.",
            "**Integrated native Calendar functionality** using EventKit to automate run scheduling.",
            "**Led Git workflow practices and standardized branching** and review processes for the team."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
    {
        slug: "snorkeling-feat",
        tag: "iOS",
        title: "Group Booking Feature.",
        subtitle: "Collaborative snorkeling trip booking with real-time checklist management.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "UIKit", "Firebase RTDB"],
        problem: "**Snorkeling trips often require complex group coordination**, from managing participants to ensuring everyone brings the right equipment. \n\nTraditional booking flows are optimized for individuals, leaving group admins to manually coordinate logistics, track equipment readiness, and communicate updates across fragmented channels.",
        solution: "We extended the existing snorkeling booking platform by introducing a **Group Booking feature** that enables a trip admin to create a shared booking space and invite participants. \n\nWithin this collaborative space, users manage a **real-time equipment checklist**, receive live updates via Firebase RTDB, and access structured trip information—including weather forecasts, assembly points, and trip inclusions—through UIKit-based information sections.",
        features: [
            "**Group booking flow** allowing admins to create and manage shared trip spaces.",
            "**Real-time collaborative equipment checklist** with live synchronization via Firebase Realtime Database.",
            "Structured trip information modules covering marine weather, inclusions, and day-of-trip expectations.",
            "In-app notification system to reflect live checklist updates and booking changes."
        ],
        contributions: [
            "**Served as Technical Lead**, reinforcing GitHub workflows, CI/CD pipelines, and SwiftLint enforcement while maintaining a scalable MVVM architecture bridging SwiftUI and UIKit.",
            "Documented the legacy UIKit codebase into architectural diagrams, ERDs, and module maps to establish shared system understanding.",
            "Integrated SwiftUI–UIKit frontend layers with Firebase RTDB to power real-time checklist and group booking functionality.",
            "Led code reviews, ticket management, QA cycles, and cross-feature debugging to ensure stable feature delivery."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
    {
        slug: "leaflens",
        tag: "iOS",
        title: "Leaflens.",
        subtitle: "On-device plant disease detection using a two-stage ML pipeline.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "CreateML", "CoreMLTools", "CoreML"],
        github: "https://github.com/lariach/PlantDiseaseDetector",
        problem: "**Busy plant owners often struggle to quickly identify plant diseases**, relying on scattered online searches and inconsistent visual references. \n\nThis process is time-consuming and inaccessible for users who want fast, practical health insights for their plants.",
        solution: "We built LeafLens, an iOS app that uses a **two-stage machine learning pipeline** to analyze plant health directly on-device. \n\nThe system first performs object detection to isolate leaves, then applies classification to predict potential diseases—providing users with instant, accessible plant health assessments.",
        features: [
            "**Two-stage ML pipeline**: leaf detection followed by disease classification.",
            "On-device inference using CoreML for fast and private predictions.",
            "Camera integration with zoom, flash, and auto-cropping via bounding boxes.",
            "Basic image editing tools including rotation and manual cropping."
        ],
        contributions: [
            "Preprocessed datasets and developed the object detection model using CreateML and CoreMLTools.",
            "Integrated camera functionality with auto-cropping based on detected bounding boxes.",
            "Resolved state management bugs to improve prediction flow and UI responsiveness."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
    {
        slug: "digital-map",
        tag: "iOS",
        title: "Digital Venue Map.",
        subtitle: "Interactive indoor navigation and booth discovery for JakartaXBeauty 2025.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "MapKit", "Firebase"],
        github: "https://github.com/jonathancalvin/C8S2-IndustrialPartnershipChallenge",
        problem: "**Large-scale beauty events like JakartaXBeauty create navigation friction for visitors**, making booth discovery overwhelming and reducing engagement with participating brands. \n\nStatic venue maps limit real-time updates and fail to support informed on-site purchasing decisions.",
        solution: "We digitized the JakartaXBeauty venue map into an **interactive indoor navigation system** designed to improve wayfinding, booth discovery, and visitor retention. \n\nBy integrating real-time booth updates, brand profiles, and product information, the platform transforms the map into both a navigation tool and a marketing surface that supports informed purchase decisions.",
        features: [
            "**Searchable and filterable indoor map** with zoom-based dynamic label rendering.",
            "Real-time updates for booth activities, promotions, and flash sales.",
            "Integrated brand profiles and product review access to support purchase decisions.",
            "Optimized wayfinding experience designed to increase booth visibility and event engagement."
        ],
        contributions: [
            "**Led product research** to identify visitor pain points and define the digital mapping strategy.",
            "Developed the technical proof-of-concept for the interactive indoor map.",
            "Synthesized insights into a final product pitch and presented the solution to stakeholders."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },

    // Web Projects
    {
        slug: "eazybytes-microservices-course",
        tag: "web",
        title: "Microservices Code-Along.",
        subtitle: "Spring Boot microservices with Docker & Kubernetes.",
        year: "2025",
        techStack: [
            "Spring",
            "Docker",
            "Docker Compose",
            "Spring Boot",
            "Spring Cloud",
            "JPA & Hibernate",
            "Eureka",
        ],
        github: "https://github.com/adelinechrltt/EazyBytes-Microservices",
        problem: "**Modern applications demand scalable and independently deployable services**, but monolithic architectures limit flexibility, fault isolation, and deployment speed. \n\nUnderstanding distributed systems requires hands-on experience with service communication, configuration management, and containerization.",
        solution: "I built and containerized multiple **Spring Boot microservices** following a structured code-along based on the EazyBytes course. \n\nThe system integrates **service discovery, centralized configuration, and API gateway routing**, simulating a production-style distributed architecture.",
        features: [
            "**Independent Spring Boot microservices** with environment-based configuration.",
            "Service discovery using **Eureka**.",
            "Centralized configuration via **Config Server**.",
            "API Gateway routing and inter-service communication.",
            "Containerized services using **Docker and Docker Compose**."
        ],
        contributions: [
            "Implemented Docker image generation using **Dockerfiles, Buildpacks, and Google Jib**.",
            "Configured internal (application.yml) and externalized environment profiles.",
            "Set up centralized configuration with encrypted properties.",
            "Orchestrated multi-service environments using Docker Compose."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
    {
        slug: "yelpcamp-course",
        tag: "web",
        title: "YelpCamp Code-Along.",
        subtitle: "Full-stack MERN application with authentication and validation.",
        year: "2025",
        techStack: [
            "MERN",
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "Bootstrap"
        ],
        github: "https://github.com/adelinechrltt/YelpCamp---WebDev-Course",
        problem: "**Building scalable full-stack applications requires understanding both client and server architecture**, including routing, validation, and database modeling. \n\nMany beginner projects isolate frontend and backend concepts without demonstrating how they integrate in a production-style environment.",
        solution: "Through a structured code-along based on Colt Steele’s Web Developer Bootcamp, I developed a **Yelp-style campsite listing platform** using the MERN stack. \n\nThe project integrates RESTful routing, server-side validation, templating, and database persistence to simulate a real-world full-stack application.",
        features: [
            "CRUD functionality for campsite listings.",
            "RESTful routing using Express Router.",
            "Server-side validation with **JOI**.",
            "MongoDB data modeling and persistence.",
            "Responsive UI using **Bootstrap** and templating with EJSmate."
        ],
        contributions: [
            "Implemented full-stack CRUD architecture using MERN.",
            "Structured modular Express routing and middleware patterns.",
            "Integrated server-side validation for data integrity.",
            "Connected frontend rendering with backend APIs and database models."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },

    // Misc Projects
    {
        slug: "stellarfest",
        tag: "misc",
        title: "Stellarfest.",
        subtitle: "Role-based event management system built with MVC architecture.",
        year: "2025",
        techStack: [
            "Java",
            "JavaFX",
            "MySQL",
            "JDBC",
            "MVC Architecture"
        ],
        github: "https://github.com/adelinechrltt/Stellarfest_OOAD",
        problem: "**Event management involves multiple stakeholders with different permissions and workflows**, making system structure and access control critical. \n\nWithout a well-designed architecture, handling authentication, role-based features, and data persistence becomes difficult to scale and maintain.",
        solution: "StellarFest is a **full-stack event management platform** developed for an Object-Oriented Architecture and Design course. \n\nBuilt using **vanilla Java, JavaFX, and MySQL with JDBC**, the system follows a structured **MVC architecture** to ensure clean separation between presentation, business logic, and data layers. \n\nThe project achieved a final evaluation score of **97/100**.",
        features: [
            "Role-based authentication (**Admin, Event Organizer, Vendor, Guest**).",
            "Full CRUD functionality for events and products.",
            "Invitation system between organizers, vendors, and guests.",
            "Profile management (change email, username, password).",
            "Admin dashboard for centralized user management."
        ],
        contributions: [
            "Designed and implemented MVC-based system architecture.",
            "Developed database connectivity using JDBC and MySQL.",
            "Built JavaFX GUI with structured navigation flows.",
            "Created system documentation including UML diagrams and module explanations.",
            "Collaborated in full-stack development for end-semester submission."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
    {
        slug: "ootd-game",
        tag: "misc",
        title: "Outfit of the Day.",
        subtitle: "A reflective Swift Playground about resilience and self-expression.",
        year: "2025",
        techStack: ["Swift", "Swift Playgrounds"],
        github: "https://github.com/adelinechrltt/outfit-of-the-day-game",
        problem: "**Grief, burnout, and emotional setbacks can make even small daily routines feel overwhelming.** \n\nSometimes, rebuilding strength starts not with grand solutions, but with gentle, personal rituals that help us reconnect with ourselves.",
        solution: "Outfit of the Day is a **reflective dress-up game built in Swift Playgrounds**, where clothing choices symbolize emotional states. \n\nThe ending dynamically changes based on how your outfit makes your avatar feel, turning a simple interaction into an **interactive metaphor for healing, resilience, and rediscovering joy through small acts of care.**",
        features: [
            "Emotion-driven branching endings.",
            "Interactive outfit selection mechanics.",
            "Soft, hand-drawn visual style and custom illustrations.",
            "Symbolic design elements, including a recurring sunflower motif."
        ],
        contributions: [
            "Designed and developed the full interactive experience in Swift Playgrounds.",
            "Conceptualized emotional branching logic and narrative outcomes.",
            "Created custom illustrations and visual identity.",
            "Translated personal storytelling into interactive game mechanics."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
    {
        slug: "few-shot-learning",
        tag: "misc",
        title: "FSL in Dermatology.",
        subtitle: "Metric-based few-shot learning for cross-domain skin lesion classification.",
        year: "2025",
        techStack: [
            "Python",
            "PyTorch",
            "EfficientNetV2-S",
            "Few-Shot Learning",
            "Medical Imaging"
        ],
        github: "https://github.com/yourrepo",
        problem: "**Skin lesion classifiers trained on single, well-curated datasets often fail under real-world domain shifts**, such as variations in age, anatomical location, and skin tone. \n\nThis performance drop disproportionately affects under-represented groups, highlighting the need for models that generalize more robustly across domains.",
        solution: "This research investigates **metric-based few-shot learning (FSL)** as a strategy to improve cross-domain generalization in dermatology image classification. \n\nFour episodically trained meta-learning models — **Prototypical, Matching, Siamese, and Relation Networks** — sharing an EfficientNetV2-S backbone were trained on HAM10000 and evaluated across five domains. \n\nThe best-performing FSL model was further tested on the DDI dataset and compared against conventional supervised baselines using imbalance-aware metrics such as **AUC-PR, F1, precision, and recall**.",
        features: [
            "Implementation of four metric-based few-shot meta-learning architectures.",
            "Episodic training framework for cross-domain robustness.",
            "Evaluation across five shifted domains.",
            "Benchmark comparison against conventional supervised classifier.",
            "Use of imbalance-aware metrics beyond accuracy and AUC-ROC."
        ],
        contributions: [
            "Developed the **high-level research design**, grounding methodology in relevant academic literature and prior citations.",
            "Integrated and experimentally validated an **EfficientNetV2-S–based Prototypical Network** for cross-domain evaluation.",
            "Presented findings at **IEEE ITIS 2025** and received **Best Speaker Award**."
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
]
