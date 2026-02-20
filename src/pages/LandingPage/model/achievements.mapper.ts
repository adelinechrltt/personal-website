import type { Achievement } from "./achievements.data";
import type { Project } from "../../Projects/model/project.data";

export function achievementToProject(a: Achievement): Project {
    return {
        slug: "",
        tag: "Achievement",
        title: a.title,
        subtitle: a.description,
        year: a.year,
        techStack: [],
        github: undefined,
        linkedin: undefined,
        instagram: undefined,
        problem: "",
        solution: "",
        features: [],
        contributions: [],
        images: [a.image],
    };
}