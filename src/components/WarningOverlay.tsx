import BtnSmallFill from "./BtnSmallFill";

import "./styles/WarningOverlay.css"

interface WarningOverlayProps {
    onClose: () => void;
}

export default function WarningOverlay({ onClose }: WarningOverlayProps) {
    return (
        <div className="viewport-overlay">
            <div className="overlay-content">
                <h2
                    className="rufina-bold white"
                    style={{
                        fontSize: "4.5vw"
                    }}>This site is currently optimized for larger screens!</h2>
                <p
                    className="instrument-sans-medium white"
                    style={{
                        fontSize: "2.1vw"
                    }}
                >
                    Some layouts may look a little janky on smaller viewports.
                </p>
                <BtnSmallFill onClick={onClose} text={"I understand"} type={"red"} size={40} />
            </div>
        </div>
    )
}