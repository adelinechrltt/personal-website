import SmallButton from "../../components/Button";

export default function StackExperience() {
    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center"
            }}>
                <h2>Tech Stack</h2>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        alignItems: "center"
                    }}>
                        <p>Mobile Dev.</p>
                        <span>
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        </span>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        alignItems: "center"
                    }}>
                        <p>Web Dev.</p>
                        <span>
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        </span>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        alignItems: "center"
                    }}>
                        <p>Backend Dev.</p>
                        <span>
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        </span>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        alignItems: "center"
                    }}>
                        <p>Data</p>
                        <span>
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${30 / 1512 * 100}vw` }} />
                        </span>
                    </div>
                </div>
                <p>...among other things!</p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center",
                width: "100%"
            }}>
                <h2>Professional Experience</h2>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    alignItems: "start",
                    width: "80%"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyItems: "center",
                        justifyContent: "space-between",
                        alignItems: "stretch",
                        width: "100%"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyItems: "center",
                            alignItems: "center",
                            width: "100%"
                        }}>
                            <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${70 / 1512 * 100}vw` }} />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyItems: "center",
                                alignItems: "start",
                                width: "100%"
                            }}>
                                <h3>Apple Developer Academy</h3>
                                <p>Junior iOS Developer</p>
                            </div>
                        </div>
                        <p>03/2025 - 12/2025</p>
                        <button>a</button>
                    </div>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                    <span>
                        <SmallButton onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }} text={"Swift"} type={"blue"} />
                        <SmallButton onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }} text={"Swift"} type={"blue"} />
                        <SmallButton onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }} text={"Swift"} type={"blue"} />
                    </span>
                </div>
            </div>
        </section >
    )
}