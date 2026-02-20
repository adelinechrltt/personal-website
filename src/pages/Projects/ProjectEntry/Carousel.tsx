import { useState } from "react";

import ChevronIcon from "../../../assets/Chevron";

type CarouselProps = {
    images: string[]
}

export default function Carousel({ images }: CarouselProps) {

    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <div style={{
            position: "relative",
            width: "100%",
            overflow: "hidden", // Clips the images sliding out
            maxHeight: "28.125rem",
            borderRadius: `${20 / 1512 * 100}vw`,
            border: "1.5px solid #7F2025",
        }}>
            {/* The Moving Track */}
            <div
                style={{
                    display: "flex", // Only the track should be flex
                    width: "100%",
                    height: "100%",
                    transform: `translateX(-${index * 100}%)`,
                    transition: "transform 0.6s ease-in-out",
                }}
            >
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt=""
                        style={{
                            width: "100%", // Force image to match parent width
                            flexShrink: 0, // Prevent images from squishing
                            objectFit: "cover",
                        }}
                    />
                ))}
            </div>

            {/* Overlay Shadow */}
            <div style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                boxShadow: "inset 0 0 10px #D9CEC2",
                borderRadius: "inherit",
            }} />

            {/* Buttons */}
            <div style={{
                position: "absolute",
                inset: "0 0 auto 0",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "0 4%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                boxSizing: "border-box",
            }}>

                <button
                    className="burgundy-bg"
                    style={{
                        width: "3rem",
                        height: "4rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        borderRadius: "999px",
                        boxShadow: "0 0 10px #D9CEC2",
                    }}
                    onClick={prev}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "rotate(-90deg)",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                    </div>
                </button>

                <button
                    className="burgundy-bg"
                    style={{
                        width: "3rem",
                        height: "4rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        borderRadius: "999px",
                        boxShadow: "0 0 10px #D9CEC2"
                    }}
                    onClick={next}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "rotate(90deg)",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                    </div>
                </button>

            </div>
        </div>
    );
}