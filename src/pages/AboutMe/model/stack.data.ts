import type { ComponentType, SVGProps } from "react";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const mobile = import.meta.glob(
    "/src/assets/icons/techStackIcons/mobile/*.svg",
    {
        eager: true,
        import: "default",
        query: "?react"
    }
) as Record<string, SvgIcon>;
const mobileIcons = Object.values(mobile)

const web = import.meta.glob(
    "/src/assets/icons/techStackIcons/web/*.svg",
    {
        eager: true,
        import: "default",
        query: "?react"
    }
) as Record<string, SvgIcon>;
const webIcons = Object.values(web)

const backend = import.meta.glob(
    "/src/assets/icons/techStackIcons/backend/*.svg",
    {
        eager: true,
        import: "default",
        query: "?react"
    }
) as Record<string, SvgIcon>;
const backendIcons = Object.values(backend)

const data = import.meta.glob(
    "/src/assets/icons/techStackIcons/data/*.svg",
    {
        eager: true,
        import: "default",
        query: "?react"
    }
) as Record<string, SvgIcon>;
const dataIcons = Object.values(data)

export {
    mobileIcons,
    webIcons,
    backendIcons,
    dataIcons
}