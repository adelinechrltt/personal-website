import BtnSmallFill from "./BtnSmallFill"
import BtnSmallOutline from "./BtnSmallOutline"

import LinkIcon from "../assets/icons/Link"
import { useState, useEffect } from "react";

import "./styles/NavBar.css"

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
        <section className="instrument-sans navbar">
            <div className="blue-2 navbar-left">
                {sections.map((section) =>
                    section === activeSection ? (
                        <BtnSmallOutline
                            key={section}
                            text={section}
                            type="blue-alt"
                            size={24}
                            onClick={() => scrollToSection(section)}
                        />
                    ) : (
                        <h2
                            key={section}
                            className="navbar-link"
                            onClick={() => scrollToSection(section)}
                        >
                            {section}
                        </h2>
                    )
                )}
            </div>

            <div className="navbar-right">
                <BtnSmallFill
                    onClick={() =>
                        window.open(
                            "https://drive.google.com/drive/folders/19iKoH-SQ_I6FD54sieSNxMfy29LS-9L_?usp=sharing"
                        )
                    }
                    text="CV"
                    type="red"
                    icon={<LinkIcon width={13} />}
                    size={20}
                    gap="5px"
                />

                <BtnSmallOutline
                    onClick={() => scrollToSection("cta-section")}
                    text="Let's work together!"
                    type="red"
                    size={24}
                />
            </div>
        </section>
    );
}