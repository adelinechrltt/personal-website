import type { ReactNode } from "react";

export const BtnSmallOutlineType = {
    blue: "blue",
    blueAlt: "blue-alt",
    red: "red",
    white: "white"
} as const;

export type BtnSmallOutlineType = typeof BtnSmallOutlineType[keyof typeof BtnSmallOutlineType];

type BtnSmallOutlineProps = {
    onClick?: () => void;
    text: string;
    type: BtnSmallOutlineType;
    icon?: string | React.ReactNode;
    size?: any
}

export default function BtnSmallOutline({
    onClick,
    text,
    type,
    icon,
    size = 16
}: BtnSmallOutlineProps) {
    let btnClass = "";

    switch (type) {
        case BtnSmallOutlineType.blue:
            btnClass = "blue-2";
            break;
        case BtnSmallOutlineType.blueAlt:
            btnClass = "blue-3";
            break;
        case BtnSmallOutlineType.red:
            btnClass = "burgundy";
            break;
        case BtnSmallOutlineType.white:
            btnClass = "white"
    }

    return (
        <button
            className={`${btnClass}
            instrument-sans-bold`}
            style={{
                borderRadius: `${20 / 1512 * 100}vw`,
                padding: `${7 / 1512 * 100}vw ${15 / 1512 * 100}vw`,
                fontSize: `${size / 1512 * 100}vw`,
                background: "none",
                border: "1px solid",
            }
            }
            disabled={!onClick}
            onClick={onClick} >
            <span
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.9rem",
                    alignItems: "center"
                }}>{text}
                {icon && (
                    typeof icon === "string" ? (
                        <img
                            src={icon}
                            alt=""
                            style={{ width: "1em", height: "1em" }}
                        />
                    ) : (
                        icon
                    ))}
            </span>
        </button >
    )
}