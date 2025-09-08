import Globe3D from "@/components/mvpblocks/3dglobe";
import AboutHero from "@/components/mvpblocks/about-hero";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import Header1 from "@/components/mvpblocks/header-1";
import ProjectsContent from "@/components/mvpblocks/projects-content";
import ProjectsHero from "@/components/mvpblocks/projects-hero";
export default function Home() {
  return (
    <div>
      <Header1 />
      <Globe3D />
      <AboutHero />
      <ProjectsHero />
      <ProjectsContent />
      <ContactUs1/>
    </div>
  );
}
