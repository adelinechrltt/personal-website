export const BtnSmallFillType = {
    blue: "blue",
    red: "red"
} as const;

export type BtnSmallFillType = typeof BtnSmallFillType[keyof typeof BtnSmallFillType];

type BtnSmallFillProps = {
    onClick: () => void;
    text: string;
    type: BtnSmallFillType;
    icon?: string | React.ReactNode;
    size?: any;
    gap?: any;
}

export default function BtnSmallFill({
    onClick,
    text,
    type,
    icon,
    size = 24,
    gap = "0.9rem"
}: BtnSmallFillProps) {
    return (
        <button
            className={
                `${type == BtnSmallFillType.blue ? "blue-1-bg" : "burgundy-bg"} 
            off-white
            instruent-sans-bold
            shadow`
            }
            onClick={onClick}
            style={{
                borderRadius: `${15 / 1512 * 100}vw`,
                padding: `${7 / 1512 * 100}vw ${15 / 1512 * 100}vw`,
                fontSize: `${size / 1512 * 100}vw`,
                justifyItems: "center",
                alignItems: "center"
            }}>
            <span
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: gap,
                    justifyItems: "center",
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
        </button>
    )
}