import SmallButton, { SmallBtnType } from "../../components/Button"

export default function CTA() {
    return (
        <section style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            minHeight: "100vh",
            gap: `${30 / 16}rem`
        }}>
            <h1 className="rufina-bold burgundy" style={{
                fontSize: `${128 / 16}vw`,
                lineHeight: "0.7",
                margin: "0rem",
                marginBottom: "1.5rem"
            }}>
                Let's work <span style={{
                    textDecorationLine: "underline",
                    textDecorationThickness: "0.4rem",
                    textUnderlineOffset: "0.7rem"
                }}>together.</span>
            </h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: `${10 / 16}rem`,
                width: "100%"
            }}>
                <p className="instrument-sans" style={{ fontSize: `${24 / 16}rem`, margin: 0 }}>
                    Get in touch with me!
                </p>
                <span style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${10 / 16}rem`
                }}>
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={SmallBtnType.red} />
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={SmallBtnType.red} />
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"CV"}
                        type={SmallBtnType.red}
                        icon={"src/assets/icons/CV.svg"} />
                </span>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                gap: `${10 / 16}rem`,
                width: "100%"
            }}>
                <p className="instrument-sans" style={{ fontSize: `${24 / 16}rem`, margin: 0 }}>
                    Or contact me via <span className="blue-1"><b>my socials</b></span>.
                </p>
                <span>
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"About me"}
                        type={SmallBtnType.blue}
                        icon={"src/assets/Arrow.svg"} />
                </span>
            </div>

            <img src="src/assets/CTAVector.png"
                style={{
                    position: "absolute",
                    right: "-30%",
                    bottom: "60%",
                    zIndex: 0,
                    pointerEvents: "none"
                }}
            />

        </section >
    )
}