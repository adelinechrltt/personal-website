export const SmallBtnType = {
    blue: "blue",
    red: "red"
} as const;

export type SmallBtnType = typeof SmallBtnType[keyof typeof SmallBtnType];

type SmallButtonProps = {
    onClick: () => void;
    text: string;
    type: SmallBtnType;
    icon?: string
}

export default function SmallButton({
    onClick,
    text,
    type,
    icon
}: SmallButtonProps) {
    return (
        <button
            className={
                `${type == SmallBtnType.blue ? "blue-1-bg" : "burgundy-bg"} 
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