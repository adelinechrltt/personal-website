import { useNavigate } from "react-router-dom";

import BtnSmallOutline from "../../../components/BtnSmallOutline";
import ProjectsCard from "../../../components/ProjectsCard";
import { projects } from "../model/project.data";

import ArrowBack from "../../../assets/ArrowBack.svg"
import { useState } from "react";
import ChevronIcon from "../../../assets/Chevron";

export default function ProjectsList() {
    const navigate = useNavigate();

    const iosProjects = projects.filter(p => p.tag === "iOS");
    const webProjects = projects.filter(p => p.tag === "web");
    const miscProjects = projects.filter(p => p.tag === "misc");

    const [expanded, setExpanded] = useState({
        ios: true,
        web: true,
        misc: true,
    });

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            gap: `${40 / 1812 * 100}vh`,
        }}>
            {/* Page title */}
            <div style={{
                width: "100%"
            }}>
                <div>
                    <button style={{ margin: 0, background: "none" }} onClick={() => navigate("/")}>
                        <img src={ArrowBack} alt=""
                            style={{
                                marginLeft: "-8vw"
                            }
                            }
                        />
                    </button>
                </div>

                <h1 className="blue-1 shadow-text"
                    style={{
                        fontSize: `${180 / 1512 * 100}vw`,
                        margin: "0"
                    }}>Projects.</h1>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <h3 className="instrument-sans" style={{ margin: 0 }}>An overview of my <span className="burgundy"><b>projects catalogue.</b></span></h3>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <BtnSmallOutline text={"iOS Dev"} type={"blue"}></BtnSmallOutline>
                        <BtnSmallOutline text={"Web Dev"} type={"blue"}></BtnSmallOutline>
                        <BtnSmallOutline text={"Misc"} type={"blue"}></BtnSmallOutline>
                    </div>
                </div>
            </div>

            {/* iOS Projects */}
            <ProjectsSection
                title="iOS Development"
                colorClass="blue-2"
                projects={iosProjects}
                cardType="blue"
                sectionKey="ios"
                expanded={expanded}
                setExpanded={setExpanded}
            />

            {/* Webdev Projects */}
            <ProjectsSection
                title="Web Development"
                colorClass="burgundy"
                align="end"
                projects={webProjects}
                cardType="red"
                sectionKey="web"
                expanded={expanded}
                setExpanded={setExpanded}
            />

            {/* Misc Projects */}
            <ProjectsSection
                title="Miscellaneous"
                colorClass="dark-gray"
                projects={miscProjects}
                cardType="gray"
                sectionKey="misc"
                expanded={expanded}
                setExpanded={setExpanded}
            />
        </section >
    )
}

function ProjectsSection({
    title,
    colorClass,
    align = "start",
    projects,
    cardType,
    sectionKey,
    expanded,
    setExpanded
}: any) {
    const isExpanded = expanded[sectionKey];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: `${10 / 1812 * 100}vh`,
            }}
        >
            {/* Header Row */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: `${align == "start" ? "start" : "end"}`
                }}
            >
                <h3
                    className={`rufina-bold ${colorClass}`}
                    style={{
                        fontSize: `${32 / 1512 * 100}vw`,
                        margin: 0,
                        textAlign: align,
                    }}
                >
                    {title}
                </h3>

                <button
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        transform: isExpanded ? "rotate(90deg)" : "rotate(180deg)",
                        transition: "transform 0.3s ease"
                    }}
                    onClick={() =>
                        setExpanded((prev: any) => ({
                            ...prev,
                            [sectionKey]: !prev[sectionKey],
                        }))
                    }
                >
                    <ChevronIcon color={colorClass == "blue-2" ? "#5B89BF" :
                        colorClass == "burgundy" ? "#7F2025" : "#38322F"} />
                </button>
            </div>

            {/* Collapsible Grid */}
            <div
                style={{
                    overflow: "hidden",
                    maxHeight: isExpanded ? "2000px" : "0",
                    opacity: isExpanded ? 1 : 0,
                    transition: "max-height 0.5s ease, opacity 0.3s ease",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: `${15 / 1512 * 100}vw`,
                    }}
                >
                    {projects.map((project: any) => (
                        <ProjectsCard
                            key={project.slug}
                            project={project}
                            type={cardType}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}