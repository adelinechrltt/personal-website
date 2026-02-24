import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

import Carousel from "./Carousel";
import { projects } from "../model/project.data";

import ArrowBack from "../../../assets/ArrowBack.svg";
import BtnSmallOutline from "../../../components/BtnSmallOutline";

import InstagramIcon from "../../../assets/icons/Instagram";
import GitHubIcon from "../../../assets/icons/GitHub";
import LinkedInIcon from "../../../assets/icons/LinkedIn";

import "./styles/ProjectEntry.css";

export default function ProjectEntry() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) return <div>Project not found.</div>;

    return (
        <section className="project-entry-section">
            {/* Back Button */}
            <div>
                <button
                    className="project-entry-back-btn"
                    onClick={() => navigate("/projects")}
                >
                    <img src={ArrowBack} alt="" />
                </button>
            </div>

            <div className="project-entry-title-section">
                {/* Title */}
                <h1 className="blue-1 shadow-text project-entry-title">
                    {project.title}
                </h1>

                {/* Subtitle & Year */}
                <div className="instrument-sans project-entry-subtitle-row">
                    <p>{project.subtitle}</p>
                    <p>{project.year}.</p>
                </div>

                {/* Tech Stack + Social Links */}
                <div className="instrument-sans project-entry-tech-links">
                    <span>
                        {project.techStack.map((tech) => (
                            <BtnSmallOutline key={tech} text={tech} type="red" />
                        ))}
                    </span>
                    <span className="project-entry-socials">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon />
                            </a>
                        )}
                        {project.linkedin && (
                            <a
                                href={project.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon width={38} height={38} />
                            </a>
                        )}
                        {project.instagram && (
                            <a
                                href={project.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon />
                            </a>
                        )}
                    </span>
                </div>
            </div>

            {/* Carousel */}
            <Carousel images={project.images} />

            {/* Problem */}
            <div className="project-entry-align-start">
                <h1 className="rufina-bold blue-1 project-entry-section-header">
                    Problem
                </h1>
                <div className="instrument-sans project-entry-body">
                    <ReactMarkdown
                        remarkPlugins={[remarkBreaks]}
                        components={{
                            p: ({ children }) => <p style={{ margin: "5px 0", textIndent: "2em" }}>{children}</p>
                        }}
                    >
                        {project.problem}
                    </ReactMarkdown>
                </div>
            </div>

            {/* Solution */}
            <div className="project-entry-align-end">
                <h1 className="rufina-bold burgundy project-entry-section-header">
                    Solution
                </h1>
                <div className="instrument-sans project-entry-body">
                    <ReactMarkdown
                        remarkPlugins={[remarkBreaks]}
                        components={{
                            p: ({ children }) => <p style={{ margin: "5px 0", textIndent: "2em" }}>{children}</p>
                        }}
                    >
                        {project.solution}
                    </ReactMarkdown>
                </div>
            </div>

            {/* Features */}
            <div className="project-entry-align-start">
                <h1 className="rufina-bold blue-1 project-entry-section-header">
                    Features
                </h1>
                <ul className="instrument-sans project-entry-body">
                    {project.features.map((item, index) => (
                        <li key={index}>
                            <ReactMarkdown components={{ p: ({ children }) => <span>{children}</span> }}>
                                {item}
                            </ReactMarkdown>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contributions */}
            <div className="project-entry-align-end">
                <h1 className="rufina-bold burgundy project-entry-section-header">
                    Contributions
                </h1>
                <ul className="instrument-sans project-entry-body">
                    {project.contributions.map((item, index) => (
                        <li key={index}>
                            <ReactMarkdown components={{ p: ({ children }) => <span>{children}</span> }}>
                                {item}
                            </ReactMarkdown>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}