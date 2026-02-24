import { useRef, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import BtnSmallOutline from "./BtnSmallOutline";
import type { Project } from "../pages/Projects/model/project.data";

import "./styles/ProjectsCard.css";

export const ProjectsCardType = {
    blue: "blue",
    red: "red",
    gray: "gray"
} as const;

export type ProjectsCardType = typeof ProjectsCardType[keyof typeof ProjectsCardType];

type ProjectsCardProps = {
    project: Project;
    type: ProjectsCardType;
}

export default function ProjectsCard({
    project,
    type
}: ProjectsCardProps) {
    const navigate = useNavigate();
    const isClickable = Boolean(project.slug && project.slug.trim() !== "");
    const techContainerRef = useRef<HTMLSpanElement>(null);
    const [visibleCount, setVisibleCount] = useState(2);

    useLayoutEffect(() => {
        const el = techContainerRef.current;
        if (!el) return;

        const isOverflowing = el.scrollWidth > el.clientWidth;
        const newCount = isOverflowing ? 1 : 2;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisibleCount(prev => (prev !== newCount ? newCount : prev));

    }, [project.techStack, visibleCount]);

    return (
        <div
            className={`
                project-card
                ${type}
                ${isClickable ? "clickable" : ""}
            `}
            onClick={
                isClickable
                    ? () => navigate(`/projects/${project.slug}`)
                    : undefined
            }
        >
            {/* Image wrapper; crop oversized images */}
            <div
                style={{
                    flex: 1,
                    minHeight: 0,
                    overflow: "hidden",
                }}>
                <img
                    src={project.images[0]}
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }} />
            </div>

            {/* Description */}
            <div className="project-card-footer" style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: `${20 / 1512 * 100}vw ${20 / 1512 * 100}vw`
            }}>
                <p className="instrument-sans-bold white"
                    style={{
                        display: "-webkit-box",
                        fontSize: `${project.techStack.length == 0 ? `${20 / 1512 * 100}vw` : `${24 / 1512 * 100} vw`}`,
                        margin: 0,
                        width: `${project.techStack.length == 0 ? "100%" : "60%"}`,
                        overflow: "hidden",
                        WebkitLineClamp: `${project.techStack.length == 0 ? 2 : 1}`,
                        WebkitBoxOrient: "vertical",
                    }}
                >{project.title}
                </p>
                <span style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${20 / 1512 * 100}vw`,
                }}>
                    <span
                        ref={techContainerRef}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: `${10 / 1512 * 100}vw`,
                            minWidth: 0
                        }}
                    >
                        {project.techStack.slice(0, visibleCount).map((tech) => (
                            <BtnSmallOutline
                                key={tech}
                                text={tech}
                                type="white"
                            />
                        ))}
                    </span>
                </span>
            </div>
        </div >
    )
}