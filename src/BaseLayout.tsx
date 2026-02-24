import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react";

import Footer from "./components/Footer"
import WarningOverlay from "./components/WarningOverlay";

import "./BaseLayout.css"

export default function Layout() {
    const MIN_WIDTH = 1100;

    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth < MIN_WIDTH) {
                setShowOverlay(true);
            } else {
                setShowOverlay(false);
            }
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return (
        <>
            {showOverlay && (
                <WarningOverlay onClose={() => setShowOverlay(false)} />
            )}
            <div>
                <div className="base-layout text-gray"
                    style={{
                        maxWidth: "1512px",
                        marginInline: "auto",
                        paddingInline: "clamp(1rem, 16.7vw, 253px)",
                        boxSizing: "border-box"
                    }}>
                    <Outlet />
                </div >
                <Footer />
            </div>
        </>

    )
}