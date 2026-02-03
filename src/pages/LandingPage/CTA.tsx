import SmallButton, { SmallBtnType } from "../../components/Button"

export default function CTA() {
    return (
        <>
            <h1 className="rufina-bold burgundy">
                Let's work together.
            </h1>
            <div>
                <p className="instrument-sans">
                    Get in touch with me!
                </p>
                <span>
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={SmallBtnType.red} />
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={SmallBtnType.red} />
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={SmallBtnType.red} />
                </span>
            </div>

            <div>
                <p className="instrument-sans">
                    Or contact me via my socials.
                </p>
                <span>
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={SmallBtnType.blue} />
                </span>
            </div>
        </>
    )
}