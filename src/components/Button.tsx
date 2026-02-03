export const SmallBtnType = {
    blue: "blue",
    red: "red"
} as const;

export type SmallBtnType = typeof SmallBtnType[keyof typeof SmallBtnType];

type SmallButonProps = {
    onClick: () => void;
    text: string;
    type: SmallBtnType;
}

export default function SmallButton({
    onClick,
    text,
    type
}: SmallButonProps) {
    return (
        <button className={`${type == SmallBtnType.blue ? "blue-1-bg" : "burgundy-bg"} off-white`} onClick={onClick}>{text}</button>
    )
}