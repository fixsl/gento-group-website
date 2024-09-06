import { FadeIn } from "@/components/FadeIn";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
