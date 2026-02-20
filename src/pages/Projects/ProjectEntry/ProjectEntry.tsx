import { useNavigate, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

import Carousel from "./Carousel"
import { projects } from "../project.data"

import ArrowBack from "../../../assets/ArrowBack.svg"
import BtnSmallOutline from "../../../components/BtnSmallOutline"

import Instagram from "../../../assets/icons/Instagram.svg"
import GitHub from "../../../assets/icons/GitHub.svg"
import LinkedInIcon from "../../../assets/icons/LinkedIn"

export default function ProjectEntry() {

    const navigate = useNavigate();

    const { slug } = useParams()

    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return <div>Project not found.</div>
    }

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            gap: `${40 / 1812 * 100}vh`,
            width: "100%"
        }}>
            <div>
                <button style={{ margin: 0, background: "none" }} onClick={() => navigate("/projects")}>
                    <img src={ArrowBack} alt="" style={{ marginLeft: "-8vw" }} />
                </button>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: `${70 / 1812 * 100}vh`
            }}>

                {/* Title & Subheading */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: `${20 / 1812 * 100}vh`
                }}>
                    <h1 className="blue-1 shadow-text"
                        style={{
                            fontSize: `${120 / 1512 * 100}vw`,
                            margin: "0",
                            lineHeight: "80%"
                        }}>
                        {project.title}
                    </h1>

                    <div className="instrument-sans" style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <p style={{ margin: 0, fontSize: `${24 / 1512 * 100}vw` }}>
                            {project.subtitle}
                        </p>
                        <p style={{ margin: 0, fontSize: `${24 / 1512 * 100}vw` }}>
                            {project.year}.
                        </p>
                    </div>

                    <div className="instrument-sans" style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: `${20 / 1512 * 100}vw`
                        }}>
                            {project.techStack.map((tech) => (
                                <BtnSmallOutline
                                    key={tech}
                                    text={tech}
                                    type={"red"}
                                />
                            ))}
                        </span>

                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: `${10 / 1512 * 100}vw`
                        }}>
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={GitHub}
                                        alt="GitHub"
                                        style={{ maxWidth: `${38 / 1512 * 100}vw` }}
                                    />
                                </a>
                            )}

                            {project.linkedin && (
                                <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon width={38} height={38} />
                                </a>
                            )}

                            {project.instagram && (
                                <a href={project.instagram} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={Instagram}
                                        alt="Instagram"
                                        style={{ maxWidth: `${38 / 1512 * 100}vw` }}
                                    />
                                </a>
                            )}
                        </span>
                    </div>
                </div>

                <Carousel images={project.images} />

                {/* Problem */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: `${10 / 1812 * 100}vh`
                }}>
                    <h1 className="rufina-bold blue-1"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: "0"
                        }}>
                        Problem
                    </h1>
                    <p className="instrument-sans"
                        style={{
                            margin: 0,
                            fontSize: `${16 / 1512 * 100}vw`,
                            textAlign: "justify",
                            maxWidth: "85%"
                        }}>
                        <ReactMarkdown remarkPlugins={[remarkBreaks]}
                            components={{
                                p: ({ children }) => (
                                    <p style={{ margin: "5px 0", textIndent: "2em" }}>
                                        {children}
                                    </p>
                                )
                            }}
                        >
                            {project.problem}
                        </ReactMarkdown>
                    </p>
                </div>

                {/* Solution */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    gap: `${10 / 1812 * 100}vh`
                }}>
                    <h1 className="rufina-bold burgundy"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: "0"
                        }}>
                        Solution
                    </h1>
                    <p className="instrument-sans"
                        style={{
                            margin: 0,
                            fontSize: `${16 / 1512 * 100}vw`,
                            textAlign: "justify",
                            maxWidth: "85%"
                        }}>
                        <ReactMarkdown remarkPlugins={[remarkBreaks]}
                            components={{
                                p: ({ children }) => (
                                    <p style={{ margin: "5px 0", textIndent: "2em" }}>
                                        {children}
                                    </p>
                                )
                            }}
                        >
                            {project.solution}
                        </ReactMarkdown>
                    </p>
                </div>

                {/* Features */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: `${10 / 1812 * 100}vh`
                }}>
                    <h1 className="rufina-bold blue-1"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: "0"
                        }}>
                        Features
                    </h1>
                    <ul className="instrument-sans"
                        style={{
                            margin: 0,
                            fontSize: `${16 / 1512 * 100}vw`,
                            maxWidth: "60%"
                        }}>
                        {project.features.map((item, index) => (
                            <li key={index}>
                                <ReactMarkdown
                                    components={{
                                        p: ({ children }) => <span>{children}</span>
                                    }}
                                >
                                    {item}
                                </ReactMarkdown>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contributions */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    gap: `${10 / 1812 * 100}vh`
                }}>
                    <h1 className="rufina-bold burgundy"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: "0"
                        }}>
                        Contributions
                    </h1>
                    <ul className="instrument-sans"
                        style={{
                            margin: 0,
                            fontSize: `${16 / 1512 * 100}vw`,
                            maxWidth: "60%"
                        }}>
                        {project.contributions.map((item, index) => (
                            <li key={index}>
                                <ReactMarkdown
                                    components={{
                                        p: ({ children }) => <span>{children}</span>
                                    }}
                                >
                                    {item}
                                </ReactMarkdown>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}
