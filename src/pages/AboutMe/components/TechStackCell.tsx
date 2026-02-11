    import type { ComponentType, SVGProps } from "react";

    type IconType = ComponentType<SVGProps<SVGSVGElement>>

    type TechStackCellProps = {
        title: string
        icons: IconType[]
    }

    export default function TechStackCell({ title, icons }: TechStackCellProps) {
        return (
            < div style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center",
                gap: `${10 / 1512 * 100}vh`
            }
            }>
                <p className="instrument-sans-medium" style={{
                    fontSize: `${20 / 1512 * 100}vw`,
                    margin: 0
                }}><i>{title}</i></p>
                <span style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: `${15 / 1512 * 100}vw`
                }}>
                    {icons.map((Icon, index) => (
                        <Icon
                            key={index}
                            width={30}
                            height={30}
                        />
                    ))}
                </span>
            </div >
        )
    }