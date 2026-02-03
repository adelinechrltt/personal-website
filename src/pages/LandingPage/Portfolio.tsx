import SmallButton, { SmallBtnType } from "../../components/Button";

export default function Portfolio() {
    return (
        <>
            <div>
                <h1 className="rufina-bold blue-1">
                    Portfolio.
                </h1>
                <p className="instrument-sans">
                    Take a peek at my past projects.
                </p>
            </div>
            <div>
                <h3 className="rufina-bold blue-1">Projects</h3>
                <div>
                    <img src="https://picsum.photos/500/500" alt="" />
                    <img src="https://picsum.photos/500/500" alt="" />
                </div>
                <div>
                    <img src="https://picsum.photos/500/500" alt="" />
                    <img src="https://picsum.photos/500/500" alt="" />
                </div>
                <SmallButton
                                    onClick={() => { console.log("pressed") }}
                                    text={"Hooray"}
                                    type={SmallBtnType.blue} />
            </div>
            <div>
                <h3 className="rufina-bold burgundy">Achievements</h3>
                    <img src="https://picsum.photos/1008/400" alt="" />
            </div>
        </>
    )
}