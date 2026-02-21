import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import BtnSmallFill, { BtnSmallFillType } from "../../components/BtnSmallFill";

import Arrow from "../../assets/Arrow.svg";
import AdelineFullBody from "../../assets/AdelineFullbody.png";

import Instagram from "../../assets/icons/Instagram.svg";
import GitHub from "../../assets/icons/GitHub.svg";
import LinkedInIcon from "../../assets/icons/LinkedIn";

import "./styles/AboutMe.css";
import "./styles/Animations.css";

export default function AboutMe() {
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
        <section id="about-me" ref={sectionRef}>
            <div className="about-me-container">

                <div className="about-me-header">
                    <h1 className={`rufina-bold blue-1 ${visible ? "animate-float" : ""}`}>
                        Adeline.
                    </h1>

                    <h2 className={`reenie-beanie-regular dark-gray ${visible ? "animate-float" : ""}`}>
                        I <span className="burgundy">learn, break,</span> and{" "}
                        <span className="burgundy build">build</span> things.
                    </h2>
                </div>

                <p className={`instrument-sans about-me-intro ${visible ? "animate-float-1" : ""}`}>
                    I’m <b>Adeline</b>, an aspiring full-stack software developer<br />
                    based in <b>Jakarta, Indonesia</b>.
                    <br /><br />
                    A <b>lifelong learner</b> dabbling in software development,<br />
                    among other things.
                </p>

                <div className={`about-me-footer ${visible ? "animate-float-1" : ""}`}>
                    <span className="social-icons">
                        <LinkedInIcon width={38} height={38} />
                        <img src={Instagram} alt="" />
                        <img src={GitHub} alt="" />
                    </span>

                    <BtnSmallFill
                        onClick={() => navigate("/about-me")}
                        text={"More about me!"}
                        type={BtnSmallFillType.blue}
                        icon={Arrow}
                    />
                </div>
            </div>

            <img
                src={AdelineFullBody}
                alt=""
                className={`about-me-image ${visible ? "animate-float-2" : ""}`}
            />
        </section>
    );
}