export default function Biography() {
    return (
        <section>
            <div>

                <h1 className="rufina-bold blue-1 shadow-text"
                    style={{
                        fontSize: `${200 / 1512 * 100}vw`,
                        margin: 0,
                        marginBottom: "-1.5rem"
                    }}>
                    Adeline.
                </h1>

                <h2 className="reenie-beanie-regular text-dark-gray"
                    style={{
                        fontSize: `${40 / 1512 * 100}vw`,
                        WebkitTextStroke: "1px",
                        margin: "0rem",
                    }}>
                    Aspiring software developer & lifelong learner
                </h2>

            </div>

            <div>
                <div>
                    <h3 className="rufina-bold burgundy"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
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
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <div style={{
                    width: "50%"
                }}>
                    <h3 className="rufina-bold blue-2"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: 0
                        }}>
                        Socials
                    </h3>
                    <span style={{ margin: 0 }}>
                        <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        <img src="src/assets/icons/Instagram.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        <img src="src/assets/icons/GitHub.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        <img src="src/assets/icons/Spotify.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                    </span>
                    <div>
                        <p className="instrument-sans-medium" style={{ fontSize: `${16 / 1512 * 100}vw` }}><i>Last listened to...</i></p>
                        <div style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <img src="src/assets/icons/Spotify.svg" alt="" style={{ width: `${75 / 1512 * 100}vw` }} />
                            <div className="instrument-sans" style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyItems: "flex-start"
                            }}>
                                <span style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyItems: "flex-start"
                                }}><img src="src/assets/icons/MusicIcon.svg" alt="" /><p><b>Jane Doe</b></p></span>
                                <p>by Kenshi Yonezu & Hikaru Utada</p>
                                <p>2d ago via Spotify Web API</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: "50%"
                }}>
                    <h3 className="rufina-bold blue-2"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: 0
                        }}>
                        Trivia
                    </h3>
                    <ul className="instrument-sans" style={{ fontSize: `${15 / 1512 * 100}vw` }}>
                        <li><b>INTJ-T</b> and a <b>huge cat person~</b></li>

                        <li>
                            Several of the things I like include:
                            <ul>
                                <li>
                                    <b>the Godzilla franchise,</b>  especially Monsterverse & Shin Godzilla
                                </li>
                                <li>
                                    <b>Nintendo games</b> (The Legend of Zelda & Fire Emblem)
                                </li>
                            </ul>
                        </li>

                        <li>
                            <b>East Asian indie & urban-pop</b>
                            (Hikaru Utada, m-flo, Elephant Gym)
                        </li>

                        <li>I also do <a className="blue-2"><b><u>digital art</u></b></a> on the side too, sometimes!</li>
                    </ul>
                </div>
            </div>
        </section >
    )
}