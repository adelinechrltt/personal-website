export const SmallBtnType = {
    blue: "blue",
    red: "red"
} as const;

export type SmallBtnType = typeof SmallBtnType[keyof typeof SmallBtnType];

type SmallButonProps = {
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
}: SmallButonProps) {
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
                borderRadius: "0.98rem",
                padding: "7px 15px",
                fontSize: "1.5rem"
            }}>
            <span
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.9rem"
                }}>{text}<img src={icon} /></span>
        </button>
    )
}