export const BtnSmallFillType = {
    blue: "blue",
    red: "red"
} as const;

export type BtnSmallFillType = typeof BtnSmallFillType[keyof typeof BtnSmallFillType];

type BtnSmallFillProps = {
    onClick: () => void;
    text: string;
    type: BtnSmallFillType;
    icon?: string
}

export default function BtnSmallFill({
    onClick,
    text,
    type,
    icon
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
                fontSize: `${24 / 1512 * 100}vw`
            }}>
            <span
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.9rem"
                }}>{text}{icon != null ? <img src={icon} /> : <></>}</span>
        </button>
    )
}