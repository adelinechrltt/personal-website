import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BtnSmallFill, { BtnSmallFillType } from "../../components/BtnSmallFill";
import BtnSmallOutline, { BtnSmallOutlineType } from "../../components/BtnSmallOutline.tsx";

import Arrow from "../../assets/Arrow.svg";
import CTAVector from "../../assets/CTAVector.png";
import LinkIcon from "../../assets/icons/Link.tsx";
import LinkedInIcon from "../../assets/icons/LinkedIn.tsx";
import EmailIcon from "../../assets/icons/Email.tsx";

import "./styles/CTA.css";
import "./styles/Animations.css"

export default function CTA() {
    const navigate = useNavigate();

    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);


    return (
        <section id="cta-section" ref={sectionRef}>
            <h1 className={`rufina-bold burgundy cta-header ${visible ? "animate-float-1 animate-float-delay-3" : ""}`}>
                Let's work <span>together.</span>
            </h1>

            <div className={`cta-contact ${visible ? "animate-float-2 animate-float-delay-3" : ""}`}>
                <p className="instrument-sans">
                    Get in touch with me!
                </p>
                <span>
                    <BtnSmallOutline
                        size={20}
                        text={"E-mail"}
                        type={BtnSmallOutlineType.red}
                        icon={<EmailIcon width={20} fill="#7F2025" />}
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

            <div className={`cta-socials ${visible ? "animate-float-2 animate-float-delay-3" : ""}`}>
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

            <img src={CTAVector} className={`cta-vector ${visible ? "animate-slide-left animate-float-delay-3" : ""}`} />
        </section>
    );
}