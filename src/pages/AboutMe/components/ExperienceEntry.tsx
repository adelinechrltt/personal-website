import { useState, type ComponentType, type SVGProps } from "react";

import BtnSmallOutline from "../../../components/BtnSmallOutline.tsx";

import ChevronIcon from "../../../assets/Chevron.tsx"

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

type ExperienceEntryProps = {
    icon: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    techStack: string[];
    description: string[];
};

export default function ExperienceEntry({
    icon,
    company,
    position,
    startDate,
    endDate,
    techStack,
    description
}: ExperienceEntryProps) {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="instrument-sans-medium"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: "100%"
            }}
        >
            {/* Header Row */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    width: "100%"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        gap: `${10 / 1512 * 100}vw`
                    }}
                >
                    <img
                        src={icon}
                        alt={company}
                        style={{ width: 70, height: 70, objectFit: "cover" }}
                    />

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3
                            className="instrument-sans-semibold"
                            style={{ margin: 0 }}
                        >
                            {company}
                        </h3>
                        <p style={{ margin: 0 }}>{position}</p>
                    </div>
                </div>

                {/* Date & chevron */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: `${15 / 1512 * 100}vw`
                    }}
                >
                    <p style={{ fontSize: `${16 / 1512 * 100}vw` }}>
                        {startDate} - {endDate}
                    </p>

                    <button
                        style={{
                            background: "none",
                            border: "none",
                            transform: isExpanded
                                ? "rotate(0deg)"
                                : "rotate(-180deg)",
                            transition: "transform 0.25s ease",
                            cursor: "pointer"
                        }}
                        onClick={() => setIsExpanded(prev => !prev)}
                    >
                        <ChevronIcon />
                    </button>
                </div>
            </div>

            <div
                style={{
                    overflow: "hidden",
                    maxHeight: isExpanded ? "500px" : "0",
                    opacity: isExpanded ? 1 : 0,
                    transition: "max-height 0.5s ease, opacity 0.3s ease",
                }}
            >
                {/* Jobdesc */}
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0 0 0 15px",
                    }}
                >
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <span
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: `${10 / 1512 * 100}vw`
                    }}
                >
                    {techStack.map((tech) => (
                        <BtnSmallOutline
                            key={tech}
                            text={tech}
                            type="red"
                        />
                    ))}
                </span>
            </div>
        </div>
    );
}
