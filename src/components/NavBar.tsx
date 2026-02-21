import BtnSmallFill from "./BtnSmallFill"
import BtnSmallOutline from "./BtnSmallOutline"

import LinkIcon from "../assets/icons/Link"
import { useState, useEffect } from "react";

interface NavBarProps {
    sections: string[];
}

export default function NavBar({ sections }: NavBarProps) {
    const [activeSection, setActiveSection] = useState("Hero Section");
    const [manualOverride, setManualOverride] = useState(false);
    const [targetSection, setTargetSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (manualOverride && targetSection) {
                const el = document.getElementById(targetSection.toLowerCase().replace(" ", "-"));
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top <= 5 && rect.top >= -5) {
                    setManualOverride(false);
                    setTargetSection(null);
                }
                return;
            }

            sections.forEach((section) => {
                const el = document.getElementById(section.toLowerCase().replace(" ", "-"));
                if (!el) return;
                const top = el.getBoundingClientRect().top;
                if (top <= 100 && top >= -el.offsetHeight / 2) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [manualOverride, targetSection, sections]);

    const scrollToSection = (section: string) => {
        const el = document.getElementById(section.toLowerCase().replace(" ", "-"));
        if (!el) return;

        setManualOverride(true);
        setTargetSection(section);
        setActiveSection(section);

        el.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <section
            className="instrument-sans"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                background: "linear-gradient(to right, #F0E8DD, #FFFFFF)",
                position: "fixed",
                width: "100vw",
                padding: `${27 / 1512 * 100}vw ${120 / 1512 * 100}vw`,
                boxSizing: `border-box`,
                top: 0,
                zIndex: 1000
            }}>
            <div className="blue-2" style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: `${60 / 1512 * 100}vw`
            }}>
                {sections.map((section) =>
                    section === activeSection ? (
                        <BtnSmallOutline
                            key={section}
                            text={section}
                            type={"blue-alt"}
                            size={24}
                            onClick={() => scrollToSection(section)}
                        />
                    ) : (
                        <h2
                            key={section}
                            style={{
                                fontSize: `${24 / 1512 * 100}vw`,
                                margin: 0,
                                cursor: "pointer",
                            }}
                            onClick={() => scrollToSection(section)}
                        >
                            {section}
                        </h2>
                    )
                )}
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: `${60 / 1512 * 100}vw`
            }}>
                <BtnSmallFill onClick={() =>
                    window.open("https://drive.google.com/drive/folders/19iKoH-SQ_I6FD54sieSNxMfy29LS-9L_?usp=sharing")} text={"CV"} type={"red"} icon={<LinkIcon width={13} />} size={20} gap={"5px"} />
                <BtnSmallOutline onClick={() => scrollToSection("cta-section")} text={"Let's work together!"} type={"red"} size={24} />
            </div>
        </section >
    )
}