import { useState } from "react";
import ChevronIcon from "../../assets/Chevron";
import ProjectsCard from "../../components/ProjectsCard";

// temp data
const projects = [
    { id: 1, title: "Project One" },
    { id: 2, title: "Project Two" },
    { id: 3, title: "Project Three" },
    { id: 4, title: "Project Four" },
    { id: 5, title: "Project Five" },
];

export default function ProjectCarousel() {
    const [index, setIndex] = useState(0);

    const visibleCards = 3;
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
                borderRadius: "8px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${15 / 16}rem`,
                    transition: "transform 0.5s ease-in-out",
                    transform: `translateX(calc(-${index * (100 / visibleCards)}% - ${index * (15 / 16 / visibleCards)}rem))`,
                }}>
                    {projects.map((proj, i) => (
                        <div key={proj.id} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: `${20 / 16}rem`,
                            flex: `0 0 calc(${(100 / visibleCards)}% - ${((visibleCards - 1) * (15 / 16)) / visibleCards}rem)`
                        }}>
                            <ProjectsCard type={"red"} />
                            <p className="instrument-sans-medium" style={{
                                fontSize: `${16 / 1512 * 100}vw`,
                                margin: 0,
                                textAlign: "center"
                            }}>
                                {proj.title}
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