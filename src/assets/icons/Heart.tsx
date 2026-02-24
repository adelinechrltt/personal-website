import React from "react";

interface HeartIconProps {
    size?: number;
    color?: string;
    className?: string;
}

export default function HeartIcon({
    size = 24,
    color = "#9D252B",
    className
}: HeartIconProps) {
    return (
        <svg
            width={size}
            height={(size * 23) / 27}
            viewBox="0 0 27 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.48984 2.40971C3.92288 1.02296 5.82088 0.177181 7.84162 0.0248625C9.86236 -0.127456 11.8729 0.423711 13.5106 1.57898C15.241 0.367758 17.3791 -0.169207 19.5 0.0748211C21.6209 0.318849 23.5692 1.326 24.9576 2.89609C26.3461 4.46618 27.0732 6.48424 26.9942 8.54916C26.9152 10.6141 26.036 12.5746 24.5314 14.0412L16.5159 21.7959C15.7188 22.5669 14.6378 23 13.5106 23C12.3835 23 11.3025 22.5669 10.5053 21.7959L2.48984 14.0425C0.895615 12.5001 0 10.4081 0 8.2268C0 6.04551 0.895615 3.95217 2.48984 2.40971Z"
                fill={color}
            />
        </svg>
    );
}