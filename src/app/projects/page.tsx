import type { Metadata } from "next";
import Header1 from "@/components/mvpblocks/header-1";
import ProjectsHero from "@/components/mvpblocks/projects-hero";
import ProjectsContent from "@/components/mvpblocks/projects-content";

export const metadata: Metadata = {
  title: "Projects - Junaid Ali",
  description: "Explore my portfolio of web applications, from full-stack solutions to innovative frontend experiences. Each project represents a unique challenge and creative solution.",
};

export default function Projects() {
  return (
    <div>
      <Header1 />
      <ProjectsHero />
      <ProjectsContent />
    </div>
  );
}
