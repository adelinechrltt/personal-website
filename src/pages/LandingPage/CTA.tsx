import { useNavigate } from "react-router-dom";

import BtnSmallFill, { BtnSmallFillType } from "../../components/BtnSmallFill"
import BtnSmallOutline, { BtnSmallOutlineType } from "../../components/BtnSmallOutline.tsx";

import Arrow from "../../assets/Arrow.svg"
import CTAVector from "../../assets/CTAVector.png"
import LinkIcon from "../../assets/icons/Link.tsx"
import LinkedInIcon from "../../assets/icons/LinkedIn.tsx";

export default function CTA() {
    const navigate = useNavigate();

    return (
        <section id="cta-section" style={{
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
                    <BtnSmallOutline size={20} text={"E-mail"} type={BtnSmallOutlineType.red} icon="src/assets/icons/Email.svg"
                        onClick={() =>
                            window.location.href = "mailto:adeline.chrltt@gmail.com"} />
                    <BtnSmallOutline size={20} text={"LinkedIn"} type={BtnSmallOutlineType.red} icon={<LinkedInIcon width={20} fill="#7F2025" />}
                        onClick={() =>
                            window.open("https://linkedin.com/in/adelinechrltt")} />
                    <BtnSmallFill
                        onClick={() =>
                            window.open("https://drive.google.com/drive/folders/19iKoH-SQ_I6FD54sieSNxMfy29LS-9L_?usp=sharing")}
                        size={20}
                        text={"CV"}
                        type={BtnSmallFillType.red}
                        icon={<LinkIcon />} />
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
                        onClick={() => { navigate("/about-me") }}
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