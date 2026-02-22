import { useNavigate } from "react-router-dom";

import Biography from "./Biography";
import StackExperience from "./StackExperience";

import ArrowBack from "../../assets/ArrowBack.svg"

export default function AboutMe() {
    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "3vh",
            marginTop: "5vh"
        }}>
            <div style={{
                width: "100%",
            }}>
                <button style={{ margin: 0, background: "none" }} onClick={() => navigate("//")}>
                    <img src={ArrowBack} alt=""
                        style={{
                            marginLeft: "-8vw"
                        }
                        }
                    />
                </button>
            </div>
            <Biography />
            <StackExperience />
        </div>
    )
}