import { useEffect, useRef, useState } from "react";
import HeroSectionVector01 from "../../assets/HeroSectionVector01.png";
import HeroSectionVector02 from "../../assets/HeroSectionVector02.png";

import "./styles/HeroSection.css";
import "./styles/Animations.css";

export default function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!heroRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="hero-section" ref={heroRef}>
            <div className={`hero-text-container ${visible ? "animate-float" : ""}`}>
                <h1 className={`rufina-bold blue-1 shadow-text ${visible ? "animate-hidden animate-delay-1" : ""}`}>
                    <span>Ad</span> astra<br />per aspera.
                </h1>
                <h3 className={`reenie-beanie-regular dark-gray ${visible ? "animate-hidden animate-delay-2" : ""}`}>
                    Turning ideas into code.
                </h3>
            </div>

            <p className={`instrument-sans hero-intro ${visible ? "animate-float animate-delay-3" : ""}`}>
                <span className="burgundy"><b><u>Adeline</u> Charlotte Augustinne.</b></span> Software developer, among other things.
            </p>

            <img src={HeroSectionVector01} className={`hero-vector01 animate-hidden ${visible ? "animate-slide-right animate-delay-4" : ""}`} />
            <img src={HeroSectionVector02} className={`hero-vector02 animate-hidden ${visible ? "animate-slide-left animate-delay-4" : ""}`} />
        </section>
    );
}