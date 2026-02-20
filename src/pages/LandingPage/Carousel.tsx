import { useState } from "react";
import ReactMarkdown from "react-markdown";

import ChevronIcon from "../../assets/Chevron";
import ProjectsCard from "../../components/ProjectsCard";

import { achievements } from "./model/achievements.data";
import { achievementToProject } from "./model/achievements.mapper";

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
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: `${15 / 16}rem`,
            width: "100%",
        }}>
            <button className="burgundy-bg" onClick={prev} style={buttonStyle}>
                <div style={{ transform: "rotate(-90deg)" }}>
                    <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                </div>
            </button>

            <div style={{
                overflow: "hidden",
                width: "100%",
                borderRadius: "8px",
                padding: "0 2px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${15 / 16}rem`,
                    transition: "transform 0.5s ease-in-out",
                    transform: `translateX(calc(-${index * (100 / visibleCards)}% - ${index * (15 / 16 / visibleCards)}rem))`,
                }}>
                    {projects.map((proj) => (
                        <div
                            key={`${proj.title}-${proj.year}`}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: `${20 / 16}rem`,
                                flex: `0 0 calc(${100 / visibleCards}% - ${((visibleCards - 1) * (15 / 16)) / visibleCards}rem)`
                            }}
                        >
                            <ProjectsCard type="red" project={proj} />

                            <p
                                className="instrument-sans-medium"
                                style={{
                                    fontSize: `${16 / 1512 * 100}vw`,
                                    margin: 0,
                                    textAlign: "center"
                                }}
                            >
                                <ReactMarkdown
                                    components={{
                                        p: ({ children }) => (
                                            <p style={{ margin: "5px 0", textIndent: "2em" }}>
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

            <button className="burgundy-bg" onClick={next} style={buttonStyle}>
                <div style={{ transform: "rotate(90deg)" }}>
                    <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                </div>
            </button>
        </div>
    );
}

const buttonStyle = {
    width: "3rem",
    height: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "999px",
    boxShadow: "0 0 10px #D9CEC2",
    border: "none",
    flexShrink: 0
};