export default function ChevronIcon({ color = "#5B89BF", size = 24, strokeWidth = 2 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            style={{ color }}
        >
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M19 15L12 8L5 15"
                stroke="currentColor"
                strokeWidth={`${strokeWidth}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}