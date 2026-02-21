import { useNavigate } from "react-router-dom";

import BtnSmallFill, { BtnSmallFillType } from "../../components/BtnSmallFill";
import ProjectsCard from "../../components/ProjectsCard";
import Carousel from "./Carousel";

import Arrow from "../../assets/Arrow.svg";

import { projects } from "../Projects/model/project.data";

import "./styles/Portfolio.css";

export default function Portfolio() {
    const navigate = useNavigate();

    const iosProjects = projects.filter(p => p.tag === "iOS").slice(0, 2);
    const webProject = projects.find(p => p.tag === "web");
    const miscProject = projects.find(p => p.tag === "misc");

    const selectedProjects = [
        ...iosProjects,
        ...(webProject ? [webProject] : []),
        ...(miscProject ? [miscProject] : []),
    ];

    return (
        <section id="portfolio">
            {/* Header */}
            <div className="portfolio-header">
                <h1 className="rufina-bold blue-1">Portfolio.</h1>
                <p className="instrument-sans">
                    Take a peek at my past <span className="burgundy"><b>projects and achievements.</b></span>
                </p>
            </div>

            {/* Projects */}
            <div className="portfolio-projects">
                <h3 className="rufina-bold blue-1">Projects</h3>
                <div className="projects-grid">
                    {selectedProjects.map(project => (
                        <ProjectsCard
                            key={project.slug}
                            type={project.tag === "iOS" ? "blue" : project.tag === "web" ? "red" : "gray"}
                            project={project}
                        />
                    ))}
                </div>
                <div className="projects-footer">
                    <BtnSmallFill
                        onClick={() => navigate("/projects")}
                        text={"View all projects"}
                        type={BtnSmallFillType.blue}
                        icon={Arrow}
                    />
                </div>
            </div>

            {/* Achievements */}
            <div className="portfolio-achievements">
                <div className="portfolio-achievements-header">
                    <h3 className="rufina-bold burgundy">Achievements</h3>
                </div>

                {/* Carousel */}
                <Carousel />
            </div>
        </section>
    );
}