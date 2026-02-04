export default function Biography() {
    return (
        <section>
            <div>
                <h1>Adeline</h1>
                <h2>Aspiring software developer & lifelong learner</h2>
            </div>
            <div>
                <div>
                    <h3>Hello!</h3>
                    <p>
                        I’m <b>Adeline</b>, an aspiring full-stack software developer based in{" "}
                        <b>Jakarta, Indonesia.</b>
                    </p>

                    <ul>
                        <li>
                            A lifelong learner with a deep curiosity for how things work, passion for
                            turning ideas into real-world solutions, and dedication to growth.
                        </li>
                        <li>
                            Currently exploring iOS and backend development, system design, and software
                            architecture!
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <div style={{
                    width: "50%"
                }}>
                    <h3>Socials</h3>
                    <span>
                        <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        <img src="src/assets/icons/Instagram.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        <img src="src/assets/icons/GitHub.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        <img src="src/assets/icons/Spotify.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                    </span>
                    <div>
                        <p>Last listened to...</p>
                        <div style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <img src="src/assets/icons/Spotify.svg" alt="" style={{ width: `${75 / 1512 * 100}vw` }} />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyItems: "flex-start"
                            }}>
                                <span><img src="src/assets/icons/MusicIcon.svg" alt="" /><p>Jane Doe</p></span>
                                <p>by Kenshi Yonezu & Hikaru Utada</p>
                                <p>2d ago via Spotify Web API</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: "50%"
                }}>
                    <h3>Trivia</h3>
                    <ul>
                        <li>I'm an <b>INTJ-T</b> and a <b>huge cat person!</b></li>

                        <li>
                            My current, top two interests span:
                            <ul>
                                <li>
                                    <b>the Godzilla franchise:</b> I &lt;3 the Monsterverse and Shin Godzilla entries
                                </li>
                                <li>
                                    <b>Nintendo games:</b> huge fan of The Legend of Zelda & Fire Emblem series!
                                </li>
                            </ul>
                        </li>

                        <li>
                            Avid listener of <b>East Asian indie & urban-pop</b>
                            (Hikaru Utada, Ken Hirai, m-flo, Elephant Gym, Sunset Rollercoaster)
                        </li>

                        <li>I also do <b><a>digital art</a></b> on the side too, sometimes!</li>
                    </ul>
                </div>
            </div>
        </section >
    )
}