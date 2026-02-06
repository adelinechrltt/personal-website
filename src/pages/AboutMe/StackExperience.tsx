import SmallButton from "../../components/Button";
import SmallOutlineBtn from "../../components/PillText";
import ExperienceEntry from "./ExperienceEntry";
import TechStackCell from "./TechStackCell";

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
                    <TechStackCell />
                    <TechStackCell />
                </div>

                {/* Row 2 */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center",
                    gap: `${54 / 1512 * 100}vw`
                }}>
                    <TechStackCell />
                    <TechStackCell />
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
                    <ExperienceEntry />
                    <hr className="blue-2-bg" style={{ width: "100%", border: "none", height: "1px" }} />
                    <ExperienceEntry />
                </div>
            </div>
        </section >
    )
}