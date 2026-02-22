/* StackExperience.tsx */
import ExperienceEntry from "./components/ExperienceEntry";
import TechStackCell from "./components/TechStackCell";

import { mobileIcons, webIcons, backendIcons, dataIcons } from "./model/stack.data";
import { experiences } from "./model/experience.data";

import "./styles/StackExperience.css";

export default function StackExperience() {
    return (
        <section id="stack-experience">

            {/* Tech Stack */}
            <div className="tech-stack">
                <h3 className="rufina-bold burgundy">Tech Stack</h3>

                {/* Row 1 */}
                <div className="tech-stack-row">
                    <TechStackCell title={"Mobile Dev."} icons={mobileIcons} />
                    <TechStackCell title={"Wev Dev."} icons={webIcons} />
                </div>

                {/* Row 2 */}
                <div className="tech-stack-row">
                    <TechStackCell title={"Backend"} icons={backendIcons} />
                    <TechStackCell title={"Data"} icons={dataIcons} />
                </div>

                <p className="instrument-sans-medium"><i>... among other things!</i></p>
            </div>

            {/* Professional Experience */}
            <div className="professional-experience">
                <h3 className="rufina-bold blue-2">Professional Experience</h3>

                <div className="experience-entries">
                    {experiences.map((exp, index) => (
                        <div key={exp.company}>
                            <ExperienceEntry {...exp} />
                            {index !== experiences.length - 1 && <hr className="blue-2-bg" />}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}