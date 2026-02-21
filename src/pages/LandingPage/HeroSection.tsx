import HeroSectionVector01 from "../../assets/HeroSectionVector01.png";
import HeroSectionVector02 from "../../assets/HeroSectionVector02.png";

import "./styles/HeroSection.css";

export default function HeroSection() {
    return (
        <section id="hero-section">
            <div className="hero-text-container">
                <h1 className="rufina-bold blue-1 shadow-text">
                    <span>Ad</span> astra<br />per aspera.
                </h1>
                <h3 className="reenie-beanie-regular dark-gray">
                    Turning ideas into code.
                </h3>
            </div>

            <p className="instrument-sans hero-intro">
                <span className="burgundy"><b><u>Adeline</u> Charlotte Augustinne.</b></span> Software developer, among other things.
            </p>

            <img src={HeroSectionVector01} className="hero-vector01" />
            <img src={HeroSectionVector02} className="hero-vector02" />
        </section>
    );
}