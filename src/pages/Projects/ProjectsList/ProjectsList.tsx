import BtnSmallOutline from "../../../components/BtnSmallOutline";
import ProjectsCard from "../../../components/ProjectsCard";

import ArrowBack from "../../../assets/ArrowBack.svg"
import { useNavigate } from "react-router-dom";

export default function ProjectsList() {
    const navigate = useNavigate();

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            gap: `${40 / 1812 * 100}vh`,
        }}>
            {/* Page title */}
            <div style={{
                width: "100%"
            }}>
                <div>
                    <button style={{ margin: 0, background: "none" }} onClick={() => navigate("/")}>
                        <img src={ArrowBack} alt=""
                            style={{
                                marginLeft: "-8vw"
                            }
                            }
                        />
                    </button>
                </div>

                <h1 className="blue-1 shadow-text"
                    style={{
                        fontSize: `${180 / 1512 * 100}vw`,
                        margin: "0"
                    }}>Projects.</h1>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <h3 className="instrument-sans" style={{ margin: 0 }}>An overview of my <span className="burgundy"><b>projects catalogue.</b></span></h3>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <BtnSmallOutline text={"iOS Dev"} type={"blue"}></BtnSmallOutline>
                        <BtnSmallOutline text={"Web Dev"} type={"blue"}></BtnSmallOutline>
                        <BtnSmallOutline text={"Misc"} type={"blue"}></BtnSmallOutline>
                    </div>
                </div>
            </div>

            {/* iOS Development */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: `${10 / 1812 * 100}vh`,
            }}>
                <h3 className="rufina-bold blue-2" style={{ fontSize: `${32 / 1512 * 100}vw`, margin: 0 }}>iOS Development</h3>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: `${15 / 1812 * 100}vh`,
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: `${15 / 1512 * 100}vw`
                    }}>
                        <ProjectsCard type={"blue"} />
                        <ProjectsCard type={"blue"} />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: `${15 / 1512 * 100}vw`
                    }}>
                        <ProjectsCard type={"blue"} />
                        <ProjectsCard type={"blue"} />
                    </div>
                </div>
            </div>

            {/* Web Development */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: `${10 / 1812 * 100}vh`,
            }}>
                <h3 className="rufina-bold burgundy" style={{ fontSize: `${32 / 1512 * 100}vw`, margin: 0, textAlign: "end" }}>Web Development</h3>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${15 / 1512 * 100}vw`,
                }}>
                    <ProjectsCard type={"red"} />
                    <ProjectsCard type={"red"} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${15 / 1512 * 100}vw`
                }}>
                    <ProjectsCard type={"red"} />
                    <ProjectsCard type={"red"} />
                </div>
            </div>

            {/* Miscellaneous Development */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: `${10 / 1812 * 100}vh`,
            }}>
                <h3 className="rufina-bold dark-gray" style={{ fontSize: `${32 / 1512 * 100}vw`, margin: 0 }}>Miscellaneous</h3>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${15 / 1512 * 100}vw`,
                }}>
                    <ProjectsCard type={"gray"} />
                    <ProjectsCard type={"gray"} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${15 / 1512 * 100}vw`
                }}>
                    <ProjectsCard type={"gray"} />
                    <ProjectsCard type={"gray"} />
                </div>
            </div>
        </section >
    )
}