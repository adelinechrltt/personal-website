import SmallButton, { SmallBtnType } from "../../components/Button";

export default function AboutMe() {
    return (
        <section style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "3.4rem"
                }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}>
                    <h1
                        className="rufina-bold blue-1"
                        style={{
                            fontSize: `${260 / 1512 * 100}vw`,
                            margin: 0,
                            marginBottom: "-4rem"
                        }}>
                        Adeline.
                    </h1>
                    <h2
                        className="reenie-beanie-regular text-dark-gray"
                        style={{
                            fontSize: `${64 / 1512 * 100}vw`,
                            WebkitTextStroke: "1px",
                            textAlign: "end",
                            margin: "0rem",
                            marginBottom: "-1.5rem"
                        }}>I <span className="burgundy">learn, break,</span> and{` `}
                        <span className="burgundy" style={{
                            textDecorationThickness: "0.2rem",
                            textDecorationLine: "underline",
                            textUnderlineOffset: "0.3rem"
                        }}>build</span> things.</h2>
                </div>
                <p className="instrument-sans"
                    style={{
                        fontSize: `${24 / 1512 * 100}vw`,
                        margin: 0
                    }}>
                    I’m <b>Adeline</b>, an aspiring full-stack software developer<br />
                    based in <b>Jakarta, Indonesia</b>.
                    <br /><br />
                    A <b>lifelong learner</b> dabbling in software development,<br />
                    among other things.
                </p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        gap: "3.125rem"
                    }}>
                    <span style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "1.9rem"
                    }}>
                        <img src="src/assets/icons/LinkedIn.svg" alt="" />
                        <img src="src/assets/icons/Instagram.svg" alt="" />
                        <img src="src/assets/icons/GitHub.svg" alt="" />
                    </span>
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"More about me!"}
                        type={SmallBtnType.blue}
                        icon={"src/assets/Arrow.svg"} />
                </div>
            </div>
            <img
                src="src/assets/AdelineFullbody.png" alt=""
                style={{
                    position: "absolute",
                    right: "0%",
                    bottom: "5%",
                    height: `${625 / 793 * 100}vh`,
                    zIndex: 2,
                    pointerEvents: "none"
                }} />
        </section>
    )
}