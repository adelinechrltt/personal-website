import React from "react";

interface IconButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ children, onClick, className }) => {
    const isClickable = !!onClick;

    const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-200 p-2";

    const hoverStyles = isClickable
        ? "blue-1-bg hover:scale-110 cursor-pointer active:scale-95"
        : "cursor-default";

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${hoverStyles} ${className || ""}`}
            style={{
                background: "transparent", border: 'none', outline: 'none'
            }}
        >
            {children}
        </button >
    );
};