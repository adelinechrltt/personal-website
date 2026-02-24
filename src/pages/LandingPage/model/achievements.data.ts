export type Achievement = {
    title: string,
    year: string,
    description: string,
    image: string
}

export const achievements: Achievement[] = [
    {
        title: "PawPal @ SIC 7 & APICTA 2025",
        year: "2025",
        description:
            "An AIoT-powered, conversational, educational toy.\n\nDesigned to promote healthy early childhood learning and reduce excessive screentime.",
        image: "/achievements/PawPal.png"
    },
    {
        title: "Best Presenter @ ITIS 2025",
        year: "2025",
        description:
            "Awarded Best Speaker at ITIS 2025 for presenting the research paper:\n\n“Addressing Real-World Domain Shifts in Skin Lesion Diagnosis with Metric-Based Few-Shot Learning.\"",
        image: "/achievements/ITIS.png"
    },
    {
        title: "1st Best Team @ BizzIT COMPFEST 17",
        year: "2025",
        description:
            "Won 1st Best Team at the BizzIT Business Case Competition, COMPFEST 17, competing against 70+ teams.",
        image: "/achievements/Gryffindor.png"
    },
    {
        title: "Best Speaker @ BizzIT COMPFEST 17",
        year: "2025",
        description:
            "Awarded Best Speaker at BizzIT COMPFEST 17, selected from 21 finalist presenters.",
        image: "/achievements/BestSpeaker.png"
    }
];