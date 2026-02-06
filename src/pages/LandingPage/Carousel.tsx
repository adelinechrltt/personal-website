import ChevronIcon from "../../assets/Chevron";
import ProjectsCard from "../../components/ProjectsCard";

export default function () {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: `${15 / 16}rem`,
            width: "100%"
        }}>

            <button
                className="burgundy-bg"
                style={{
                    width: "3rem",
                    height: "4rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "999px",
                    boxShadow: "0 0 10px #D9CEC2",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: "rotate(-90deg)",
                        transition: "transform 0.3s ease",
                    }}
                >
                    <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                </div>
            </button>

            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: `${15 / 16}rem`,
                width: "100%"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: `${20 / 16}rem`,
                }}>
                    <ProjectsCard type={"red"} />
                    <p className="instrument-sans-medium"
                        style={{
                            fontSize: `${16 / 1512 * 100}vw`,
                            margin: 0
                        }}>
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: `${20 / 16}rem`,
                }}>
                    <ProjectsCard type={"red"} />
                    <p className="instrument-sans-medium"
                        style={{
                            fontSize: `${16 / 1512 * 100}vw`,
                            margin: 0
                        }}>
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: `${20 / 16}rem`,
                }}>
                    <ProjectsCard type={"red"} />
                    <p className="instrument-sans-medium"
                        style={{
                            fontSize: `${16 / 1512 * 100}vw`,
                            margin: 0
                        }}>
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
            <button
                className="burgundy-bg"
                style={{
                    width: "3rem",
                    height: "4rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "999px",
                    boxShadow: "0 0 10px #D9CEC2",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: "rotate(90deg)",
                        transition: "transform 0.3s ease",
                    }}
                >
                    <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                </div>
            </button>
        </div>
    )
}