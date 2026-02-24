import { useState } from "react";
import ReactMarkdown from "react-markdown";

import ChevronIcon from "../../assets/Chevron";
import ProjectsCard from "../../components/ProjectsCard";

import { achievements } from "./model/achievements.data";
import { achievementToProject } from "./model/achievements.mapper";

import "./styles/Carousel.css"

export default function ProjectCarousel() {
    const [index, setIndex] = useState(0);
    const visibleCards = 3;

    const projects = achievements.map(achievementToProject);

    const maxIndex = projects.length - visibleCards;

    const next = () => {
        setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    };

    const prev = () => {
        setIndex((i) => (i <= 0 ? maxIndex : i - 1));
    };


    return (
        <div className="carousel-wrapper">
            <button
                className="burgundy-bg carousel-btn"
                onClick={prev}
            >
                <div style={{ transform: "rotate(-90deg)" }}>
                    <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                </div>
            </button>

            <div className="carousel-viewport">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${index * (100 / visibleCards)}%)`,
                    }}
                >
                    {projects.map((proj) => (
                        <div
                            key={`${proj.title}-${proj.year}`}
                            className="carousel-card"
                        >
                            <ProjectsCard type="red" project={proj} />

                            <p className="instrument-sans-medium carousel-subtitle">
                                <ReactMarkdown
                                    components={{
                                        p: ({ children }) => (
                                            <p>
                                                {children}
                                            </p>
                                        )
                                    }}
                                >
                                    {proj.subtitle}
                                </ReactMarkdown>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="burgundy-bg carousel-btn"
                onClick={next}
            >
                <div style={{ transform: "rotate(90deg)" }}>
                    <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                </div>
            </button>
        </div>
    );
}