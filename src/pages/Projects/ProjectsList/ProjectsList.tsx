import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BtnSmallOutline from "../../../components/BtnSmallOutline";
import ProjectsCard, { ProjectsCardType } from "../../../components/ProjectsCard";
import { projects, type Project } from "../model/project.data";

import ArrowBack from "../../../assets/ArrowBack.svg";
import ChevronIcon from "../../../assets/Chevron";

import "./ProjectsList.css";

export default function ProjectsList() {
    const navigate = useNavigate();

    const scrollToSection = (key: string) => {
        const element = document.getElementById(key);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const iosProjects = projects.filter(p => p.tag === "iOS");
    const webProjects = projects.filter(p => p.tag === "web");
    const miscProjects = projects.filter(p => p.tag === "misc");

    const [expanded, setExpanded] = useState<ExpandedSections>({
        ios: true,
        web: true,
        misc: true,
    });

    return (
        <section className="projects-list">
            {/* Page title */}
            <div className="page-title">
                <div>
                    <button onClick={() => navigate("/")}>
                        <img src={ArrowBack} alt="" />
                    </button>
                </div>

                <h1 className="blue-1 shadow-text">Projects.</h1>

                <div className="subtitle-row">
                    <h3 className="instrument-sans">
                        An overview of my <span className="burgundy"><b>projects catalogue.</b></span>
                    </h3>
                    <div className="btn-row">
                        <BtnSmallOutline text={"iOS Dev"} type={"blue"} onClick={() => scrollToSection("ios-section")} />
                        <BtnSmallOutline text={"Web Dev"} type={"red"} onClick={() => scrollToSection("web-section")} />
                        <BtnSmallOutline text={"Misc"} type={"dark-gray"} onClick={() => scrollToSection("misc-section")} />
                    </div>
                </div>
            </div>

            {/* Sections */}
            <div id="ios-section">
                <ProjectsSection
                    title="iOS Development"
                    colorClass="blue-2"
                    projects={iosProjects}
                    cardType="blue"
                    sectionKey="ios"
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
            </div>

            <div id={"web-section"}>
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
            </div>

            <div id="misc-section">
                <ProjectsSection
                    title="Miscellaneous"
                    colorClass="dark-gray"
                    projects={miscProjects}
                    cardType="gray"
                    sectionKey="misc"
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
            </div>

        </section>
    );
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
}: ProjectsSectionProps) {
    const isExpanded = expanded[sectionKey];

    return (
        <div className="projects-section">
            {/* Header */}
            <div
                className="header-row"
                style={{ justifyContent: align === "start" ? "flex-start" : "flex-end" }}
            >
                <h3 className={`rufina-bold ${colorClass}`} style={{ textAlign: align }}>
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
                        setExpanded((prev: ExpandedSections) => ({
                            ...prev,
                            [sectionKey]: !prev[sectionKey]
                        }))
                    }
                >
                    <ChevronIcon
                        color={
                            colorClass === "blue-2" ? "#5B89BF" :
                                colorClass === "burgundy" ? "#7F2025" : "#38322F"
                        }
                    />
                </button>
            </div>

            {/* Collapsible Grid */}
            <div
                className="collapsible-grid"
                style={{
                    maxHeight: isExpanded ? "2000px" : "0",
                    opacity: isExpanded ? 1 : 0,
                    overflow: isExpanded ? "hidden" : "visible"
                }}
            >
                <div className="grid">
                    {projects.map((project: Project) => (
                        <ProjectsCard key={project.slug} project={project} type={cardType} />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface ExpandedSections {
    ios: boolean
    web: boolean
    misc: boolean
}

interface ProjectsSectionProps {
    title: string
    colorClass: string
    align?: "start" | "end"
    projects: Project[]
    cardType: ProjectsCardType
    sectionKey: keyof ExpandedSections
    expanded: ExpandedSections
    setExpanded: React.Dispatch<React.SetStateAction<ExpandedSections>>
}