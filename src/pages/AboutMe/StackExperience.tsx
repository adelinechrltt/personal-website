import ExperienceEntry from "./components/ExperienceEntry";
import TechStackCell from "./components/TechStackCell";

import { mobileIcons, webIcons, backendIcons, dataIcons } from "./model/stack.data";

import { experiences } from "./model/experience.data";

export default function StackExperience() {
    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
            gap: `${80 / 1512 * 100}vh`,
            margin: `30px 0px`
        }}>

            {/* Tech Stack */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center",
                gap: `${10 / 1512 * 100}vw`
            }}>
                <h3 className="rufina-bold burgundy"
                    style={{
                        fontSize: `${32 / 1512 * 100}vw`,
                        margin: 0
                    }}>
                    Tech Stack
                </h3>

                {/* Row 1 */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center",
                    gap: `${54 / 1512 * 100}vw`
                }}>
                    <TechStackCell title={"Mobile Dev."} icons={mobileIcons} />
                    <TechStackCell title={"Wev Dev."} icons={webIcons} />
                </div>

                {/* Row 2 */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center",
                    gap: `${54 / 1512 * 100}vw`
                }}>
                    <TechStackCell title={"Backend"} icons={backendIcons} />
                    <TechStackCell title={"Data"} icons={dataIcons} />
                </div>
                <p className="instrument-sans-medium" style={{
                    fontSize: `${16 / 1512 * 100}vw`,
                    margin: 0
                }}><i>... among other things!</i></p>
            </div>

            {/* Professional Experience */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center",
                width: "100%",
                gap: `${20 / 1512 * 100}vh`
            }}>
                {/* Header */}
                <h3 className="rufina-bold blue-2"
                    style={{
                        fontSize: `${32 / 1512 * 100}vw`,
                        margin: 0
                    }}>
                    Professional Experience
                </h3>

                {/* Entry */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: `${20 / 1512 * 100}vh`,
                    width: "80%"
                }}>
                    {experiences.map((exp, index) => (
                        <div key={exp.company}>
                            <ExperienceEntry {...exp} />
                            {index !== experiences.length - 1 && (
                                <hr
                                    className="blue-2-bg"
                                    style={{ width: "100%", border: "none", height: "1px" }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}