import BtnSmallOutline from "./BtnSmallOutline";

export const ProjectsCardType = {
    blue: "blue",
    red: "red",
    gray: "gray"
} as const;

export type ProjectsCardType = typeof ProjectsCardType[keyof typeof ProjectsCardType];

type ProjectsCardProps = {
    type: ProjectsCardType;
}

export default function ProjectsCard({
    type
}: ProjectsCardProps) {

    let cardBG = "";
    switch (type) {
        case ProjectsCardType.blue:
            cardBG = "blue-1-bg";
            break;
        case ProjectsCardType.red:
            cardBG = "burgundy-bg";
            break;
        case ProjectsCardType.gray:
            cardBG = "dark-gray-bg"
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            border: "1px solid #7F2025",
            height: "22.6rem",
            width: "100%",
            overflow: "hidden"
        }}>
            {/* Image wrapper; crop oversized images */}
            <div
                style={{
                    flex: 1,
                    minHeight: 0,
                    overflow: "hidden",
                }}>
                <img
                    src="https://picsum.photos/400"
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }} />
            </div>

            {/* Description */}
            <div className={`${cardBG}`} style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: `${20 / 1512 * 100}vw ${20 / 1512 * 100}vw`
            }}>
                <p className="instrument-sans-bold white" style={{ fontSize: `${24 / 1512 * 100}vw`, margin: 0 }}>Kimo</p>
                <span style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${20 / 1512 * 100}vw`,
                }}>
                    <BtnSmallOutline text={"Swift"} type={"white"} />
                </span>
            </div>
        </div >
    )
}