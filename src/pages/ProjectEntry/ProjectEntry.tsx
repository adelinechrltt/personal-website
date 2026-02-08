import { useNavigate } from "react-router-dom"

import Carousel from "./Carousel"

import ArrowBack from "../../assets/ArrowBack.svg"
import BtnSmallOutline from "../../components/BtnSmallOutline"

import ChevronIcon from "../../assets/Chevron"

import LinkedIn from "../../assets/icons/LinkedIn.svg"
import Instagram from "../../assets/icons/Instagram.svg"
import GitHub from "../../assets/icons/GitHub.svg"

export default function ProjectEntry() {
    const navigate = useNavigate();

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            gap: `${40 / 1812 * 100}vh`,
            width: "100%"
        }}>
            <div>
                <button style={{ margin: 0, background: "none" }} onClick={() => navigate("/projects")}>
                    <img src={ArrowBack} alt=""
                        style={{
                            marginLeft: "-8vw"
                        }
                        }
                    />
                </button>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: `${50 / 1812 * 100}vh`
            }}>

                {/* Title & Subheading*/}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: `${20 / 1812 * 100}vh`
                }}>
                    <h1 className="blue-1 shadow-text"
                        style={{
                            fontSize: `${120 / 1512 * 100}vw`,
                            margin: "0"
                        }}>
                        Kimo.
                    </h1>

                    <div className="instrument-sans" style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <p style={{ margin: 0, fontSize: `${24 / 1512 * 100}vw` }}>Lorem ipsum <span className="burgundy"><b>dolor sit amet.</b></span></p>
                        <p style={{ margin: 0, fontSize: `${24 / 1512 * 100}vw` }}>2025.</p>
                    </div>
                    <div className="instrument-sans" style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyItems: "start",
                            gap: `${20 / 1512 * 100}vw`
                        }}>
                            <BtnSmallOutline text={"Swift"} type={"red"} />
                            <BtnSmallOutline text={"SwiftUI"} type={"red"} />
                            <BtnSmallOutline text={"UIKit"} type={"red"} />
                            <BtnSmallOutline text={"SwiftLint"} type={"red"} />
                        </span>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyItems: "start",
                            gap: `${10 / 1512 * 100}vw`
                        }}>
                            <img src={GitHub} alt="" style={{ maxWidth: `${38 / 1512 * 100}vw` }} />
                            <img src={LinkedIn} alt="" style={{ maxWidth: `${38 / 1512 * 100}vw` }} />
                            <img src={Instagram} alt="" style={{ maxWidth: `${38 / 1512 * 100}vw` }} />
                        </span>
                    </div>
                </div>

                <Carousel />

                {/* Problem */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    alignItems: "start",
                    gap: `${10 / 1812 * 100}vh`
                }}>
                    <h1 className="rufina-bold blue-1"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: "0"
                        }}>
                        Problem
                    </h1>
                    <p className="instrument-sans"
                        style={{
                            margin: 0,
                            fontSize: `${16 / 1512 * 100}vw`,
                            textAlign: "justify"
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/* Solution */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    alignItems: "end",
                    gap: `${10 / 1812 * 100}vh`
                }}>
                    <h1 className="rufina-bold burgundy"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: "0"
                        }}>
                        Solution
                    </h1>
                    <p className="instrument-sans"
                        style={{
                            margin: 0,
                            fontSize: `${16 / 1512 * 100}vw`,
                            textAlign: "end"
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/* Features */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    alignItems: "start",
                    gap: `${10 / 1812 * 100}vh`
                }}>
                    <h1 className="rufina-bold blue-1"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: "0"
                        }}>
                        Problem
                    </h1>
                    <ul className="instrument-sans"
                        style={{
                            margin: 0,
                            fontSize: `${16 / 1512 * 100}vw`,
                            textAlign: "justify"
                        }}
                    >
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>

                {/* Roles & Collaborators */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    alignItems: "end",
                    gap: `${10 / 1812 * 100}vh`
                }}>
                    <h1 className="rufina-bold burgundy"
                        style={{
                            fontSize: `${32 / 1512 * 100}vw`,
                            margin: "0"
                        }}>
                        Solution
                    </h1>
                    <ul className="instrument-sans"
                        style={{
                            margin: 0,
                            fontSize: `${16 / 1512 * 100}vw`,
                            textAlign: "end"
                        }}
                    >
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div >

        </section >
    )
}