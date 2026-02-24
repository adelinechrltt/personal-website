import { useState } from "react";
import ChevronIcon from "../../../assets/Chevron";

import "./styles/Carousel.css";

type CarouselProps = {
    images: string[];
};

export default function Carousel({ images }: CarouselProps) {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <div className="carousel-container">
            {/* Track */}
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((src, i) => (
                    <div className="carousel-slide">
                        <img key={i} src={src} alt="" />
                    </div>
                ))}
            </div>

            {/* Overlay */}
            <div className="carousel-overlay" />

            {/* Buttons */}
            <div className="carousel-buttons">
                <button className="carousel-button" onClick={prev}>
                    <div style={{ transform: "rotate(-90deg)" }}>
                        <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                    </div>
                </button>

                <button className="carousel-button" onClick={next}>
                    <div style={{ transform: "rotate(90deg)" }}>
                        <ChevronIcon color="#EBE0D2" size={30} strokeWidth={5} />
                    </div>
                </button>
            </div>
        </div>
    );
}