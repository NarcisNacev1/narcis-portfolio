export interface IProjectsBox {
    type: string;
    name: string;
    image: string;
    techStack: string[];
    githubLink: string;
    description: string;
    status: string;
}

export interface FlipCardProps {
    project: IProjectsBox;
    index: number;
}