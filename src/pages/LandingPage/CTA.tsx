import BtnSmallFill, { BtnSmallFillType } from "../../components/BtnSmallFill"

import Arrow from "../../assets/Arrow.svg"
import CTAVector from "../../assets/CTAVector.png"
import LinkSVG from "../../assets/icons/Link.svg"

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
                    <BtnSmallFill
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={BtnSmallFillType.red} />
                    <BtnSmallFill
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={BtnSmallFillType.red} />
                    <BtnSmallFill
                        onClick={() => { console.log("pressed") }}
                        text={"CV"}
                        type={BtnSmallFillType.red}
                        icon={LinkSVG} />
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
                    <BtnSmallFill
                        onClick={() => { console.log("pressed") }}
                        text={"About me"}
                        type={BtnSmallFillType.blue}
                        icon={Arrow} />
                </span>
            </div>

            <img src={CTAVector}
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