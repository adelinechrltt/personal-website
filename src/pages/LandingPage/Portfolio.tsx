import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BtnSmallFill, { BtnSmallFillType } from "../../components/BtnSmallFill";
import ProjectsCard from "../../components/ProjectsCard";
import Carousel from "./Carousel";

import Arrow from "../../assets/Arrow.svg";

import { projects } from "../Projects/model/project.data";

import "./styles/Portfolio.css";
import "./styles/Animations.css"

export default function Portfolio() {
    const navigate = useNavigate();

    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const iosProjects = projects.filter(p => p.tag === "iOS").slice(0, 2);
    const webProject = projects.find(p => p.tag === "web");
    const miscProject = projects.find(p => p.tag === "misc");

    const selectedProjects = [
        ...iosProjects,
        ...(webProject ? [webProject] : []),
        ...(miscProject ? [miscProject] : []),
    ];

    return (
        <section id="portfolio" ref={sectionRef}>
            {/* Header */}
            <div className="portfolio-header">
                <h1 className={`rufina-bold blue-1 ${visible ? "animate-float" : ""}`}>Portfolio.</h1>
                <p className={`instrument-sans ${visible ? "animate-float" : ""}`}>
                    Take a peek at my past <span className="burgundy"><b>projects and achievements.</b></span>
                </p>
            </div>

            {/* Projects */}
            <div className={`portfolio-projects ${visible ? "animate-float-1" : ""}`}>
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
            <div className={`portfolio-achievements`}>
                <div className={`portfolio-achievements-header ${visible ? "animate-float-2 animate-float-delay-2" : ""}`}>
                    <h3 className="rufina-bold burgundy">Achievements</h3>
                </div>

                {/* Carousel */}
                <div className={`${visible ? "animate-float-2" : ""}`}>
                    <Carousel />
                </div>
            </div>
        </section >
    );
}