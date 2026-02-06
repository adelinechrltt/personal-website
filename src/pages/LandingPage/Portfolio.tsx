import BtnSmallFill, { BtnSmallFillType } from "../../components/BtnSmallFill";
import ProjectsCard from "../../components/ProjectsCard";

import Arrow from "../../assets/Arrow.svg"

export default function Portfolio() {
    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            minHeight: "100vh",
            gap: `${30 / 16}rem`,
            width: "100%"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: `${10 / 16}rem`,
                width: "100%"
            }}>
                <h1 className="rufina-bold blue-1"
                    style={{
                        fontSize: `${180 / 1512 * 100}vw`,
                        lineHeight: "70%",
                        margin: 0
                    }}>
                    Portfolio.
                </h1>
                <p className="instrument-sans"
                    style={{
                        fontSize: `${24 / 1512 * 100}vw`,
                        margin: 0
                    }}
                >
                    Take a peek at my past <span className="burgundy"><b>projects and achievements.</b></span>
                </p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: `${15 / 16}rem`,
                width: "100%"
            }}>
                <h3 className="rufina-bold blue-1" style={{
                    fontSize: `${32 / 16}rem`, margin: 0
                }}>Projects</h3>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: `${15 / 16}rem`,
                    width: "100%"
                }}>
                    <ProjectsCard type={"blue"} />
                    <ProjectsCard type={"blue"} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: `${15 / 16}rem`,
                    width: "100%"
                }}>
                    <ProjectsCard type={"blue"} />
                    <ProjectsCard type={"blue"} />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%"
                    }}
                >
                    <BtnSmallFill
                        onClick={() => { console.log("pressed") }}
                        text={"View all projects"}
                        type={BtnSmallFillType.blue}
                        icon={Arrow}
                    />
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: `${15 / 16}rem`,
                width: "100%"
            }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%"
                    }}
                >
                    <h3 className="rufina-bold burgundy"
                        style={{
                            fontSize: `${32 / 16}rem`,
                            margin: 0
                        }}>Achievements</h3>
                </div>
                <img src="https://picsum.photos/800/300" alt="" />
            </div>
        </section>
    )
}