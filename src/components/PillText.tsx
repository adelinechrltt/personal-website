export const SmallOutlineBtnType = {
    blue: "blue",
    red: "red"
} as const;

export type SmallOutlineBtnType = typeof SmallOutlineBtnType[keyof typeof SmallOutlineBtnType];

type SmallOutlineBtnProps = {
    onClick?: () => void;
    text: string;
    type: SmallOutlineBtnType;
    icon?: string
}

export default function SmallOutlineBtn({
    onClick,
    text,
    type,
    icon
}: SmallOutlineBtnProps) {
    return (
        <button
            className={
                `${type == SmallOutlineBtnType.blue ? "blue-1" : "burgundy"} 
            instrument-sans-bold`
            }
            style={{
                borderRadius: `${20 / 1512 * 100}vw`,
                padding: `${7 / 1512 * 100}vw ${15 / 1512 * 100}vw`,
                fontSize: `${16 / 1512 * 100}vw`,
                background: "none",
                border: "1px solid",
            }}
            disabled={!onClick}
            onClick={onClick}>
            <span
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.9rem"
                }}>{text}{icon != null ? <img src={icon} /> : <></>}</span>
        </button>
    )
}