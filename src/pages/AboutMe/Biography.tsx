import { useEffect, useRef, useState } from "react"

import AdelineHalfBody from "../../assets/AdelineHalfbody.png"
import RedStarOutline from "../../assets/RedStarOutline.svg"

import MusicIcon from "../../assets/icons/MusicIcon"
import LinkedInIcon from "../../assets/icons/LinkedIn"
import InstagramIcon from "../../assets/icons/Instagram"
import GithubIcon from "../../assets/icons/GitHub"
import SpotifyIcon from "../../assets/icons/Spotify"

import { IconButton } from "../../assets/icons/IconButtonWrapper"

import "./styles/Biography.css"
import "./styles/Animation.css"

export default function Biography() {
    const bioRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!bioRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(bioRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            gap: `${30 / 1812 * 100}vh`,
        }} ref={bioRef}>
            <div style={{
                position: "relative",
                marginLeft: `${130 / 1512 * 100}rem`
            }}>
                <h1 className="rufina-bold blue-1 shadow-text"
                    style={{
                        fontSize: `${200 / 1512 * 100}vw`,
                        margin: 0,
                        marginBottom: "-1.5rem"
                    }}>
                    Adeline.
                </h1>

                <h2 className="reenie-beanie-regular dark-gray"
                    style={{
                        fontSize: `${40 / 1512 * 100}vw`,
                        WebkitTextStroke: "1px",
                        margin: "0rem",
                        marginLeft: `${80 / 1512 * 100}rem`
                    }}>
                    Aspiring software developer & lifelong learner
                </h2>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: `${25 / 1812 * 100}vh`,
                margin: `${10 / 1812 * 100}vh`,
                marginLeft: `${290 / 1512 * 100}rem`
            }}>
                {/* Hello! */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0
                }}>
                    <h3 className="rufina-bold burgundy"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: 0
                        }}>
                        Hello!
                    </h3>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: `10px`
                    }}>
                        <p className="instrument-sans" style={{
                            fontSize: `${18 / 1512 * 100}vw`,
                            margin: 0,
                        }}>
                            I’m <b>Adeline</b>, an aspiring full-stack software developer based in{" "}
                            <b>Jakarta, Indonesia.</b>
                        </p>

                        <ul className="instrument-sans"
                            style={{
                                fontSize: `${18 / 1512 * 100}vw`,
                                margin: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            }}>
                            <li>
                                A <b>lifelong learner</b> with a deep curiosity for how things work, passion for
                                turning ideas into real-world solutions, and dedication to growth.
                            </li>
                            <li>
                                Currently exploring <b>
                                    iOS and backend development, system design, and software
                                    architecture!
                                </b>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Columns */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>

                    {/* Socials + Spotify Column */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        gap: `${20 / 1812 * 100}vh`
                    }}>
                        {/* Socials Row */}
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: `${10 / 1881.02 * 100}vh`
                        }}>
                            <h3 className="rufina-bold blue-2"
                                style={{
                                    fontSize: `${32 / 1512 * 100}vw`,
                                    margin: 0
                                }}>
                                Socials
                            </h3>
                            <span style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: `${30 / 1512 * 100}vw`,
                                margin: 0
                            }}>
                                <IconButton onClick={() => window.open("https://linkedin.com/in/adelinechrltt", "_blank")}>
                                    <LinkedInIcon width={30} height={30} />
                                </IconButton>
                                <IconButton onClick={() => window.open("https://instagram.com/adelinechrltt", "_blank")}>
                                    <InstagramIcon width={30} height={30} />
                                </IconButton>
                                <IconButton onClick={() => window.open("https://github.com/adelinechrltt", "_blank")}>
                                    <GithubIcon width={30} height={30} />
                                </IconButton>
                                <IconButton onClick={() => window.open("https://open.spotify.com/user/ia83v904ogj2u5vor1w0brc4e?si=59678a0ed2b74590", "_blank")}>
                                    <SpotifyIcon width={30} height={30} />
                                </IconButton>
                            </span>
                        </div>

                        {/* Spotify Row */}
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: `${10 / 1881.02 * 100}vh`
                        }}>
                            <p className="instrument-sans-medium" style={{ fontSize: `${16 / 1512 * 100}vw`, margin: 0 }}>
                                <i>Last listened to...</i>
                            </p>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: `${20 / 1512 * 100}vw`,
                                padding: `15px`,
                                background: "linear-gradient(90deg, #D9CEC2 0%, #C0BCB4 100%)",
                                borderRadius: `20px`,
                                border: "1px solid #7F2025"
                            }}>
                                <div className="cd-wrapper animate-spin">
                                    <div className="cd-ring">
                                        <img
                                            src="https://i.ytimg.com/vi/Cb0JZhdmjtg/maxresdefault.jpg" // placeholder album art
                                            alt="Album art"
                                            className="cd-art"
                                        />
                                    </div>
                                </div>
                                <div className="instrument-sans" style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyItems: "flex-start",
                                    gap: `${10 / 1881.02 * 100}vh`,
                                    justifyContent: "space-between",
                                    height: "90%",
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 0,
                                        margin: 0
                                    }}>
                                        <span style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyItems: "flex-start",
                                            gap: `6px`
                                        }}><MusicIcon width={30} height={30} />
                                            <p style={{ margin: 0, fontSize: `${20 / 1881 * 100}vw` }}><b>Jane Doe</b></p></span>
                                        <p style={{ margin: 0, fontSize: `${14 / 1881 * 100}vw` }}>by Kenshi Yonezu & Hikaru Utada</p>
                                    </div>
                                    <p style={{ margin: 0, fontSize: `${14 / 1881 * 100}vw` }}>2d ago via Spotify Web API</p>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        gap: "5px"
                    }}>
                        <h3 className="rufina-bold blue-2"
                            style={{
                                fontSize: `${32 / 1512 * 100}vw`,
                                margin: 0
                            }}>
                            Trivia
                        </h3>
                        <ul className="instrument-sans" style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: `${15 / 1512 * 100}vw`,
                            margin: 0,
                            textAlign: "justify",
                            gap: "7px"
                        }}>
                            <li><b>INTJ-T</b> and a <b>huge cat person~</b></li>

                            <li>
                                Several of the things I like include:
                                <ul style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "justify",
                                    gap: "5px"
                                }}>
                                    <li>
                                        <b>the Godzilla franchise,</b>  especially Monsterverse & Shin Godzilla
                                    </li>
                                    <li>
                                        <b>Nintendo games</b> (The Legend of Zelda & Fire Emblem)
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <b>East Asian indie & urban-pop</b> (Hikaru Utada, m-flo, Elephant Gym)
                            </li>
                            <li>I also do <a className="blue-2"><b><u>digital art</u></b></a> on the side too, sometimes!</li>
                        </ul>
                    </div>
                </div >
            </div >
            <img className={`${visible ? "animate-float" : ""}`} src={AdelineHalfBody} alt="" style={{
                position: "absolute",
                maxHeight: `${550 / 725 * 100}vh`,
                top: `${70 / 1512 * 100}vh`,
                left: `${150 / 1512 * 100}vw`,
                pointerEvents: "none"
            }} />
            <img className={`${visible ? "animate-spin animate-float" : ""}`} src={RedStarOutline} alt="" style={{
                position: "absolute",
                maxHeight: `${550 / 725 * 100}vh`,
                top: `${320 / 1512 * 100}vh`,
                left: `${180 / 1512 * 100}vw`,
                pointerEvents: "none"
            }} />
        </section >
    )
}