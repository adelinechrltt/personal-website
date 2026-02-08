import NavBar from "../../components/NavBar";
import AboutMe from "./AboutMe";
import CTA from "./CTA";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";

export default function LandingPage() {
    return (
        <section style={{
            width: "100%",
        }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0
            }}>
                <NavBar sections={["Home", "About Me", "Portfolio"]} />
            </div>
            <HeroSection />
            <AboutMe />
            <Portfolio />
            <CTA />
        </section>
    )
}