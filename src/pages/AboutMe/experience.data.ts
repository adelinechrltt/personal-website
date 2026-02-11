import type { ComponentType, SVGProps } from "react";

import AppleDeveloperAcademy from "../../assets/icons/experienceIcons/AppleDeveloperAcademy.jpeg"
import AI4Impact from "../../assets/icons/experienceIcons/AI4Impact.jpeg";
import BNCC from "../../assets/icons/experienceIcons/BNCC.jpeg"

export type Experience = {
    icon: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    techStack: string[];
    description: string[];
};

export const experiences: Experience[] = [
    {
        icon: AppleDeveloperAcademy,
        company: "Apple Developer Academy",
        position: "Junior iOS Developer",
        startDate: "03/2025",
        endDate: "12/2025",
        techStack: ["Swift", "SwiftUI", "UIKit", "SwiftLint"],
        description: [
            "Delivered 5 end - to - end iOS projects as Technical Developer and 1 as Product Lead",
            "Built native Apple ecosystem features(App Intents, Widgets, EventKit, Watch Connectivity, GPS indoor mapping) with Firebase - backed synchronization",
            "Integrated AI / ML into iOS using PyTorch and YOLO-based computer vision models",
            "Applied MVVM with Swift / SwiftUI / UIKit, adhering to SOLID, DRY, and KISS principles",
            "Translated business requirements into scalable technical solutions in collaboration with Female Daily (Jakarta X Beauty integration)",
            "Led R&D for a social-emotional learning app for children(3–5), conducting user research and cross-functional execution"]
    },

    {
        icon: AI4Impact,
        company: "Another Company",
        position: "Frontend Developer Intern",
        startDate: "01/2024",
        endDate: "06/2024",
        techStack: ["React", "TypeScript", "Tailwind"],
        description: [
            "Built a GPT-4o-powered chatbot using Smojo for virtual copywriting assistance",
            "Designed UI and engineered prompts to generate brand- aligned, customizable copy",
            "Collaborated with stakeholders to define requirements for an e-commerce assistant chatbot",
            "Researched data processing strategies to support chatbot functionality",
        ]
    },

    {
        icon: BNCC,
        company: "Bina Nusantara Computer Club",
        position: "C/C++ LnT Praetorian",
        startDate: "10/2023",
        endDate: "03/2024",
        techStack: ["C/C++"],
        description: [
            "Taught core C programming concepts (data types, control flow, basic sorting) in a 12-week remote course",
            "Led learning, practice, and exam preparation sessions for two classes (52 undergraduate students)",
            "Achieved an average student participation rate of 84.6 %."
        ]
    }
];
