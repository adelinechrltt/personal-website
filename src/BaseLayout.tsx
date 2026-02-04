import { Outlet } from "react-router-dom"
import "./BaseLayout.css"

export default function Layout() {
    return (
        <div className="base-layout text-gray"
            style={{
                maxWidth: "1512px",
                marginInline: "auto",
                paddingInline: "clamp(1rem, 16.7vw, 253px)",
                boxSizing: "border-box"
            }}>
            <Outlet />
        </div >
    )
}