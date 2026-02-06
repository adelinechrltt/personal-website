import { useState } from "react";

import BtnSmallOutline from "../../components/BtnSmallOutline";

import Chevron from "../../assets/Chevron.svg"
import LinkedIn from "../../assets/icons/LinkedIn.svg"

export default function ExperienceEntry() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="instrument-sans-medium" style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "start",
            width: "100%"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyItems: "center",
                justifyContent: "space-between",
                alignItems: "stretch",
                width: "100%"
            }}>
                {/* Icon, Company, Position */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: "1",
                    justifyItems: "center",
                    alignItems: "center",
                    gap: `${10 / 1512 * 100}vw`
                }}>
                    <img src={LinkedIn} alt="" style={{ width: `${70 / 1512 * 100}vw` }} />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        alignItems: "start",
                        width: "100%"
                    }}>
                        <h3 className="instrument-sans-semibold" style={{ margin: 0 }}>Apple Developer Academy</h3>
                        <p style={{ margin: 0 }}>Junior iOS Developer</p>
                    </div>
                </div>

                {/* Duration, Chevron */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "flex-end",
                    alignItems: "center",
                    gap: `${15 / 1512 * 100}vw`
                }}>
                    <p style={{ fontSize: `${16 / 1512 * 100}vw` }}>03/2025 - 12/2025</p>
                    <button
                        style={{
                            background: "none",
                            border: "none",
                            transform: isExpanded ? "rotate(0deg)" : "rotate(-180deg)",
                            transition: "transform 0.25s ease",
                        }}
                        onClick={() => setIsExpanded(prev => !prev)}><img src={Chevron} /></button>
                </div>
            </div>
            <div style={{
                overflow: "hidden",
                maxHeight: isExpanded ? "500px" : "0",
                opacity: isExpanded ? 1 : 0,
                transition: "max-height 0.5s ease, opacity 0.3s ease",
            }}>
                <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 0 0 15px",
                    gap: `${0 / 1512 * 100}vh`,
                }}>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
                <span style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${10 / 1512 * 100}vw`
                }}>
                    <BtnSmallOutline text={"Swift"} type={"red"} />
                    <BtnSmallOutline text={"SwiftUI"} type={"red"} />
                    <BtnSmallOutline text={"UIKit"} type={"red"} />
                    <BtnSmallOutline text={"SwiftLint"} type={"red"} />
                </span>
            </div>
        </div>
    )
}