import Biography from "./Biography";
import StackExperience from "./StackExperience";

import ArrowBack from "../../assets/ArrowBack.svg"

export default function AboutMe() {
    return (
        <>
            <div style={{
                width: "100%"
            }}>
                <img src={ArrowBack} alt=""
                    style={{
                        marginLeft: "-8vw"
                    }}
                />
            </div>
            <Biography />
            <StackExperience />
        </>
    )
}