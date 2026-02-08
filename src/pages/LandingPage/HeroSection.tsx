import HeroSectionVector01 from "../../assets/HeroSectionVector01.png"
import HeroSectionVector02 from "../../assets/HeroSectionVector02.png"

export default function HeroSection() {
    return (
        <section id="home" style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                zIndex: 1
            }}>
                <h1 className="rufina-bold blue-1 shadow-text"
                    style={{
                        fontSize: `${180 / 1512 * 100}vw`,
                        lineHeight: "70%",
                        textAlign: "end",
                        margin: 0
                    }}>
                    <span style={{
                        textDecorationThickness: "0.4rem",
                        textDecorationLine: "underline",
                        textUnderlineOffset: "0.7rem"
                    }}>Ad</span> astra<br />per aspera.
                </h1>
                <h3 className="reenie-beanie-regular dark-gray"
                    style={{
                        fontSize: `${64 / 1512 * 100}vw`,
                        WebkitTextStroke: "1px",
                        textAlign: "end",
                        margin: 0
                    }}>Turning ideas into code.</h3>
            </div>
            <p className="instrument-sans" style={{ fontSize: `${24 / 1512 * 100}vw` }}>
                <span className="burgundy"><b><u>Adeline</u> Charlotte Augustinne.</b></span> Software developer, among other things.</p>


            <img src={HeroSectionVector01}
                style={{
                    position: "absolute",
                    bottom: "45%",
                    right: "70%",
                    zIndex: 0,
                    pointerEvents: "none"
                }}
            />
            <img src={HeroSectionVector02}
                style={{
                    position: "absolute",
                    bottom: "15%",
                    right: "-25%",
                    zIndex: 0,
                    pointerEvents: "none"
                }}
            />
        </section>
    )
}