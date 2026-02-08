import type { ComponentType, SVGProps } from "react";

import ExperienceEntry from "./ExperienceEntry";
import TechStackCell from "./TechStackCell";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const mobile = import.meta.glob(
    "/src/assets/icons/techStackIcons/mobile/*.svg",
    {
        eager: true,
        import: "default",
        query: "?react"
    }
) as Record<string, SvgIcon>;

const web = import.meta.glob(
    "/src/assets/icons/techStackIcons/web/*.svg",
    {
        eager: true,
        import: "default",
        query: "?react"
    }
) as Record<string, SvgIcon>;

const backend = import.meta.glob(
    "/src/assets/icons/techStackIcons/backend/*.svg",
    {
        eager: true,
        import: "default",
        query: "?react"
    }
) as Record<string, SvgIcon>;

const data = import.meta.glob(
    "/src/assets/icons/techStackIcons/data/*.svg",
    {
        eager: true,
        import: "default",
        query: "?react"
    }
) as Record<string, SvgIcon>;

const mobileIcons = Object.values(mobile)
const webIcons = Object.values(web)
const backendIcons = Object.values(backend)
const dataIcons = Object.values(data)

const rawFiles = import.meta.glob("/src/assets/icons/techStackIcons/mobile/*.svg", { eager: true });
console.log("Raw SVG files:", rawFiles);

const relativeFiles = import.meta.glob("../assets/icons/techStackIcons/mobile/*.svg?react", { eager: true, import: "default" });
console.log("Relative path files:", relativeFiles);

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
                    <ExperienceEntry />
                    <hr className="blue-2-bg" style={{ width: "100%", border: "none", height: "1px" }} />
                    <ExperienceEntry />
                </div>
            </div>
        </section >
    )
}