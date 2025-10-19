"use client";

import Link from "next/link";
import { BlurImage } from "../ui/blur-image";

type ProjectCardsProps = {
  projects: Project[];
};

const ProjectCard = ({ name, description, techstack, slug, imgPath }: Project) => (
  <Link
    href={`/projects/${slug}`}
    className="shadow-feature-card group rounded-xl px-2 py-4"
  >
    <BlurImage
      src={imgPath}
      width={1280}
      height={832}
      imageClassName="group-hover:scale-105"
      alt={name}
      className="rounded-lg"
    />
    <div className="flex-1 px-2 py-4 space-y-2">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {techstack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

const ProjectCards = ({ projects }: ProjectCardsProps) => (
  <div className="grid gap-4 md:grid-cols-2">
    {projects.map((project) => (
      <ProjectCard key={project.slug} {...project} />
    ))}
  </div>
);

export default ProjectCards;