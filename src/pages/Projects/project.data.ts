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
        subtitle: "AI-powered child emotion tracker.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "Firebase"],
        github: "https://github.com/yourrepo",
        problem: "Parents struggle to track emotional development in early childhood.",
        solution: "We built an interactive SEL-based iOS app with AI-driven insights.",
        features: [
            "Emotion logging",
            "Parent dashboard",
            "AI-powered recommendations"
        ],
        contributions: [
            "Technical Developer",
            "Product Lead"
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
        subtitle: "AI-powered child emotion tracker.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "Firebase"],
        github: "https://github.com/yourrepo",
        problem: "Parents struggle to track emotional development in early childhood.",
        solution: "We built an interactive SEL-based iOS app with AI-driven insights.",
        features: [
            "Emotion logging",
            "Parent dashboard",
            "AI-powered recommendations"
        ],
        contributions: [
            "Technical Developer",
            "Product Lead"
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
    {
        slug: "medium-clone-course",
        tag: "web",
        title: "Small Medium Clone.",
        subtitle: "AI-powered child emotion tracker.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "Firebase"],
        github: "https://github.com/yourrepo",
        problem: "Parents struggle to track emotional development in early childhood.",
        solution: "We built an interactive SEL-based iOS app with AI-driven insights.",
        features: [
            "Emotion logging",
            "Parent dashboard",
            "AI-powered recommendations"
        ],
        contributions: [
            "Technical Developer",
            "Product Lead"
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
        subtitle: "AI-powered child emotion tracker.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "Firebase"],
        github: "https://github.com/yourrepo",
        problem: "Parents struggle to track emotional development in early childhood.",
        solution: "We built an interactive SEL-based iOS app with AI-driven insights.",
        features: [
            "Emotion logging",
            "Parent dashboard",
            "AI-powered recommendations"
        ],
        contributions: [
            "Technical Developer",
            "Product Lead"
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
        title: "Outfit of The Day.",
        subtitle: "AI-powered child emotion tracker.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "Firebase"],
        github: "https://github.com/yourrepo",
        problem: "Parents struggle to track emotional development in early childhood.",
        solution: "We built an interactive SEL-based iOS app with AI-driven insights.",
        features: [
            "Emotion logging",
            "Parent dashboard",
            "AI-powered recommendations"
        ],
        contributions: [
            "Technical Developer",
            "Product Lead"
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
        subtitle: "AI-powered child emotion tracker.",
        year: "2025",
        techStack: ["Swift", "SwiftUI", "Firebase"],
        github: "https://github.com/yourrepo",
        problem: "Parents struggle to track emotional development in early childhood.",
        solution: "We built an interactive SEL-based iOS app with AI-driven insights.",
        features: [
            "Emotion logging",
            "Parent dashboard",
            "AI-powered recommendations"
        ],
        contributions: [
            "Technical Developer",
            "Product Lead"
        ],
        images: [
            "https://picsum.photos/id/1015/1200/800",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
        ],
    },
]
