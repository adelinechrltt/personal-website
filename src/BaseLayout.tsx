import { Outlet } from "react-router-dom"
import "./BaseLayout.css"

export default function Layout() {
    return (
        <div className="base-layout text-gray">
            <Outlet />
        </div>
    )
}