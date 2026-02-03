import SmallButton, { SmallBtnType } from "../../components/Button";

export default function AboutMe() {
    return (
        <>
            <h1>
                Adeline.
            </h1>
            <h2>I learn, break, and build things.</h2>
            <p>
                I’m Adeline, an aspiring full-stack software developer based in Jakarta, Indonesia.
                <br /><br />
                A lifelong learner dabbling in software development, among other things.
            </p>
            <div>
                <span>
                    <img src="https://picsum.photos/20" alt="" />
                    <img src="https://picsum.photos/20" alt="" />
                    <img src="https://picsum.photos/20" alt="" />
                </span>
                <SmallButton
                    onClick={() => { console.log("pressed") }}
                    text={"Hooray"}
                    type={SmallBtnType.blue} />
            </div>
        </>
    )
}