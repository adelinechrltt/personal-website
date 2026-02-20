import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BtnSmallOutline from "./BtnSmallOutline";
import type { Project } from "../pages/Projects/model/project.data";

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

    let cardBG = "";
    switch (type) {
        case ProjectsCardType.blue:
            cardBG = "blue-1-bg";
            break;
        case ProjectsCardType.red:
            cardBG = "burgundy-bg";
            break;
        case ProjectsCardType.gray:
            cardBG = "dark-gray-bg"
    }

    const techContainerRef = useRef<HTMLSpanElement>(null);
    const [visibleCount, setVisibleCount] = useState(2);

    useEffect(() => {
        const el = techContainerRef.current;
        if (!el) return;

        const isOverflowing = el.scrollWidth > el.clientWidth;

        if (isOverflowing) {
            setVisibleCount(1);
        } else {
            setVisibleCount(2);
        }
    }, [project.techStack]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                border: "1px solid #7F2025",
                height: "22.6rem",
                width: "100%",
                overflow: "hidden",
                cursor: isClickable ? "pointer" : "default",
            }}
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
            <div className={`${cardBG}`} style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: `${20 / 1512 * 100}vw ${20 / 1512 * 100}vw`
            }}>
                <p className="instrument-sans-bold white"
                    style={{
                        display: "-webkit-box",
                        fontSize: `${24 / 1512 * 100}vw`,
                        margin: 0,
                        width: "60%",
                        overflow: "hidden",
                        WebkitLineClamp: 1,
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