import "./styles/BtnOutlineColors.css";

export const BtnSmallOutlineType = {
    blue: "blue",
    blueAlt: "blue-alt",
    red: "red",
    white: "white",
    gray: "dark-gray"
} as const;

export type BtnSmallOutlineType = typeof BtnSmallOutlineType[keyof typeof BtnSmallOutlineType];

type BtnSmallOutlineProps = {
    onClick?: () => void;
    text: string;
    type: BtnSmallOutlineType;
    icon?: string | React.ReactNode;
    size?: number
}


export default function BtnSmallOutline({
    onClick,
    text,
    type,
    icon,
    size = 16
}: BtnSmallOutlineProps) {

    return (
        <button
            className={`
                btn-small-outline
                ${type}
                instrument-sans-bold
            `}
            style={{
                borderRadius: `${20 / 1512 * 100}vw`,
                padding: `${7 / 1512 * 100}vw ${15 / 1512 * 100}vw`,
                fontSize: `${size / 1512 * 100}vw`,
                opacity: "100%"
            }}
            disabled={!onClick}
            onClick={onClick}
        >
            <span
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.9rem",
                    alignItems: "center"
                }}
            >
                {text}
                {icon && (
                    typeof icon === "string" ? (
                        <img
                            src={icon}
                            alt=""
                            style={{ width: "1em", height: "1em" }}
                        />
                    ) : (
                        icon
                    )
                )}
            </span>
        </button>
    );
}