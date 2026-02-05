export default function TechStackCell() {
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
            }}><i>Mobile Dev.</i></p>
            <span style={{
                display: "flex",
                flexDirection: "row",
                gap: `${15 / 1512 * 100}vw`
            }}>
                <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${54 / 1512 * 100}vw` }} />
                <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${54 / 1512 * 100}vw` }} />
                <img src="src/assets/icons/LinkedIn.svg" alt="" style={{ width: `${54 / 1512 * 100}vw` }} />
            </span>
        </div >
    )
}