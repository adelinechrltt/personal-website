import SmallButton, { SmallBtnType } from "../../components/Button"

export default function CTA() {
    return (
        <>
            <h1>
                Let's work together.
            </h1>
            <div>
                <p>
                    Get in touch with me!
                </p>
                <span>
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={SmallBtnType.blue} />
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={SmallBtnType.blue} />
                    <SmallButton
                        onClick={() => { console.log("pressed") }}
                        text={"Hooray"}
                        type={SmallBtnType.blue} />
                </span>
            </div>

            <div>
                <p>
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