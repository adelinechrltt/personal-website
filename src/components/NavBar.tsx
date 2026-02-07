import BtnSmallFill from "./BtnSmallFill"
import BtnSmallOutline from "./BtnSmallOutline"

import LinkSVG from "../assets/icons/Link.svg"
import LinkIcon from "../assets/icons/Link"

export default function NavBar() {
    return (
        <section
            className="instrument-sans"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                background: "linear-gradient(to right, #F0E8DD, #FFFFFF)",
                position: "fixed",
                width: "100vw",
                padding: `${27 / 1512 * 100}vw ${120 / 1512 * 100}vw`,
                boxSizing: `border-box`,
                top: 0,
                zIndex: 1000
            }}>
            <div className="blue-2" style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: `${60 / 1512 * 100}vw`
            }}>
                <BtnSmallOutline text={"Home"} type={"blue-alt"} size={24} />
                <h2 style={{
                    fontSize: `${24 / 1512 * 100}vw`,
                    margin: 0
                }}>About Me</h2>
                <h2 style={{
                    fontSize: `${24 / 1512 * 100}vw`,
                    margin: 0
                }}>Portfolio</h2>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: `${60 / 1512 * 100}vw`
            }}>
                <BtnSmallFill onClick={() => { }} text={"CV"} type={"red"} icon={<LinkIcon width={13} />} size={20} gap={"5px"} />
                <BtnSmallOutline text={"Let's work together!"} type={"red"} size={24} />
            </div>
        </section >
    )
}