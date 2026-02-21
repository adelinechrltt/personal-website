/* CTA.tsx */
import { useNavigate } from "react-router-dom";

import BtnSmallFill, { BtnSmallFillType } from "../../components/BtnSmallFill";
import BtnSmallOutline, { BtnSmallOutlineType } from "../../components/BtnSmallOutline.tsx";

import Arrow from "../../assets/Arrow.svg";
import CTAVector from "../../assets/CTAVector.png";
import LinkIcon from "../../assets/icons/Link.tsx";
import LinkedInIcon from "../../assets/icons/LinkedIn.tsx";

import "./styles/CTA.css";

export default function CTA() {
    const navigate = useNavigate();

    return (
        <section id="cta-section">
            <h1 className="rufina-bold burgundy cta-header">
                Let's work <span>together.</span>
            </h1>

            <div className="cta-contact">
                <p className="instrument-sans">
                    Get in touch with me!
                </p>
                <span>
                    <BtnSmallOutline
                        size={20}
                        text={"E-mail"}
                        type={BtnSmallOutlineType.red}
                        icon="src/assets/icons/Email.svg"
                        onClick={() => window.location.href = "mailto:adeline.chrltt@gmail.com"}
                    />
                    <BtnSmallOutline
                        size={20}
                        text={"LinkedIn"}
                        type={BtnSmallOutlineType.red}
                        icon={<LinkedInIcon width={20} fill="#7F2025" />}
                        onClick={() => window.open("https://linkedin.com/in/adelinechrltt")}
                    />
                    <BtnSmallFill
                        size={20}
                        text={"CV"}
                        type={BtnSmallFillType.red}
                        icon={<LinkIcon />}
                        onClick={() =>
                            window.open("https://drive.google.com/drive/folders/19iKoH-SQ_I6FD54sieSNxMfy29LS-9L_?usp=sharing")
                        }
                    />
                </span>
            </div>

            <div className="cta-socials">
                <p className="instrument-sans">
                    Or contact me via <span className="blue-1"><b>my socials</b></span>.
                </p>
                <span>
                    <BtnSmallFill
                        text={"About me"}
                        type={BtnSmallFillType.blue}
                        icon={Arrow}
                        onClick={() => navigate("/about-me")}
                    />
                </span>
            </div>

            <img src={CTAVector} className="cta-vector" />
        </section>
    );
}