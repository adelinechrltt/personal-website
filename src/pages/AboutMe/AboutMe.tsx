import Biography from "./Biography";
import StackExperience from "./StackExperience";

export default function AboutMe() {
    return (
        <>
            <div style={{
                width: "100%"
            }}>
                <img src="src/assets/ArrowBack.svg" alt=""
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