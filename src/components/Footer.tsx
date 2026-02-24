import ReactMarkdown from "react-markdown"
import remarkBreaks from "remark-breaks"
import HeartIcon from "../assets/icons/Heart"

export default function Footer() {
    return (
        <section className="dark-gray-bg" style={{
            paddingTop: "3vh",
            paddingBottom: "3vh",
            paddingInline: "clamp(1rem, 16.7vw, 253px)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <span>
                    <HeartIcon />
                </span>
                <span className="instrument-sans off-white">
                    <ReactMarkdown
                        remarkPlugins={[remarkBreaks]}
                        components={{
                            p: ({ children }) => <p style={{
                                fontSize: `1.1vw`,
                                margin: "5px 0",
                                textIndent: "2em",
                                lineHeight: "100%"
                            }}>{children}</p>
                        }}
                    >
                        {`Designed and coded to life by yours truly.\n\n` +
                            `Made with ReactJS, TypeScript, Vite, and lots of love—`}
                    </ReactMarkdown>
                </span>
            </div>
            <div className="off-white" style={{
                display: "flex",
                flexDirection: "row",
                gap: "1vw",
                alignItems: "center"
            }}>
                <span
                    className="instrument-sans"
                    style={{
                        fontSize: `1.1vw`,
                    }}><i>-by</i></span>
                <span
                    className="rufina-bold"
                    style={{
                        fontSize: "1.5vw"
                    }}
                >
                    Adeline.
                </span>
            </div>
        </section>
    )

}