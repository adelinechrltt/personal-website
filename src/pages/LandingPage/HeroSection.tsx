export default function HeroSection() {
    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
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
                <h3 className="reenie-beanie-regular text-dark-gray"
                    style={{
                        fontSize: `${64 / 1512 * 100}vw`,
                        WebkitTextStroke: "1px",
                        textAlign: "end",
                        margin: 0
                    }}>Turning ideas into code.</h3>
            </div>
            <p className="instrument-sans" style={{ fontSize: `${24 / 1512 * 100}vw` }}>
                <span className="burgundy"><b><u>Adeline</u> Charlotte Augustinne.</b></span> Software developer, among other things.</p>
        </section>
    )
}